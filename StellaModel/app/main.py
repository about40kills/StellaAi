from fastapi import FastAPI, HTTPException
import joblib
from rdkit import Chem
from rdkit.Chem import Descriptors
from pydantic import BaseModel

# Load the trained model
model = joblib.load("/Users/macbook/Desktop/my_folder/StellaModel/model/toxicity_model1.pkl")

# Initialize FastAPI app
app = FastAPI()

# Define request model
class SMILESRequest(BaseModel):
    smiles: str

# Feature extraction function
def featurize(smiles):
    mol = Chem.MolFromSmiles(smiles)
    if mol:
        return [
            Descriptors.MolWt(mol), Descriptors.MolLogP(mol),
            Descriptors.NumHDonors(mol), Descriptors.NumHAcceptors(mol)
        ]
    return None

@app.post("/predict/")
async def predict_toxicity(request: SMILESRequest):
    features = featurize(request.smiles)
    if features is None:
        raise HTTPException(status_code=400, detail="Invalid SMILES string")
    
    prediction = model.predict([features])[0]
    return {"smiles": request.smiles, "toxicity": bool(prediction)}

@app.get("/")
def root():
    return {"message": "Toxicity Prediction API is running!"}


# Run the FastAPI server using: uvicorn main:app --reload
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)