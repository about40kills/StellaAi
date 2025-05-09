from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse
import joblib
import os
from rdkit import Chem
from rdkit.Chem import Descriptors
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Load the trained model
# 1. Get the directory where `main.py` is located
script_dir = os.path.dirname(__file__)  

# 2. Navigate up one level (`..`) to the project root, then into `model/`
model_path = os.path.join(script_dir, "..", "model", "toxicity_model1.pkl") 
model = joblib.load(model_path)

# Initialize FastAPI app
app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

# Define request model
class SMILESRequest(BaseModel):
    smiles: str

# Feature extraction function
def featurize(smiles):
    mol = Chem.MolFromSmiles(smiles)
    if mol:
        return [
            Descriptors.MolWt(mol), 
            Descriptors.MolLogP(mol),
            Descriptors.NumHDonors(mol), 
            Descriptors.NumHAcceptors(mol),
            
        ]
    return None

@app.post("/predict")
async def predict_toxicity(request: SMILESRequest):
    features = featurize(request.smiles)
    if features is None:
        raise HTTPException(status_code=400, detail="Invalid SMILES string")
    
    prediction = model.predict([features])[0]
    print(prediction)
    return {"smiles": request.smiles, "toxicity": bool(prediction)}

@app.get("/")
def root():
    return {"message": "Toxicity Prediction API is running!"}


# Run the FastAPI server using: uvicorn main:app --reload
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)