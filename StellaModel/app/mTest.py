from fastapi import FastAPI
from pydantic import BaseModel
from rdkit import Chem

app = FastAPI()

class InputData(BaseModel):
    smiles : str

def is_toxic(smiles: str) -> bool:
    mol = Chem.MolFromSmiles(smiles)
    if not mol:
        return False
    nitro_group = Chem.MolFromSmiles("[N+](=o)[o-]")
    return mol.HasSubstructMatch(nitro_group)

@app.post("/predict")
def predict(data:InputData):
    result = is_toxic(data.smiles)
    return {"is toxic": result}

if __name__ == '__main__':
    import uvicorn
    uvicorn.run("mTest:app", host="127.0.0.1", port=8000, reload=True)