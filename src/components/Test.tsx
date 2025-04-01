/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import axios from "axios";
import "./styling.css";

interface PredictionResponse {
  smiles: string;
  toxicity: boolean;
}

const App: React.FC = () => {
  const [smiles, setSmiles] = useState<string>("");
  const [toxicity, setToxicity] = useState<boolean | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handlePredict = async () => {
    try {
      setErr(null);
      setLoading(true);
      setToxicity(null);
      
      const response = await axios.post<PredictionResponse>(
        "http://127.0.0.1:8000/predict/",
        { 'smiles' :smiles.toUpperCase() },
        {
          headers: {
            "Content-Type":"application/json"
          },
          maxRedirects: 0
        }
      );

      setToxicity(response.data.toxicity);
    } catch (error:any) {
      if (error.response && error.response.data && error.response.data.detail) {
        setErr(error.response.data.detail);
      } else {
        setErr("Error predicting toxicity. Please try again.");
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Toxicity Prediction</h1>
      <input
      className="smiles-input"
        type="text"
        value={smiles}
        onChange={(e) => setSmiles(e.target.value)}
        placeholder="Enter SMILES notation"
      />
      <div className="">
      <button className="btn" onClick={handlePredict} disabled={loading}>
        {loading ? "Predicting..." : "Predict"}
      </button>
      </div>

      {err && <p style={{ color: "red" }}>{err}</p>}
      {toxicity !== null && (
        <p className="predict">
          Toxicity: <strong>{toxicity ? <span style={{color:'red'}}>Toxic</span> : <span style={{color:"green"}}>Non-Toxic</span>}</strong>
        </p>
      )}
      <div className="" style={{display: "flex"}}>
          <div className="card">
            <ul style={{listStyleType:"disc"}}>
                <h2 style={{marginBottom: '20px'}}>Non-Toxic (Generally Safe) Molecules</h2>
                <li>Ethanol (Alcohol) - "CCO"</li>
                <li>Water - "O"</li>
                <li>Glucose (Sugar) - "C(C1C(C(C(C(O1)O)O)O)O)O"</li>
                <li>Aspirin - "CC(=O)Oc1ccccc1C(=O)O"</li>
                <li>Caffeine - "CN1C=NC2=C1C(=O)N(C(=O)N2C)"</li>
            </ul>
          </div>
          <div className="card">
            <ul style={{listStyleType:"disc"}}>
                <h2 style={{marginBottom: '20px'}}>Potential Toxic Molecules</h2>
                <li> Methanol (Toxic Alcohol) - "CO"</li>
                <li>Benzene (Carcinogenic Solvent) - "c1ccccc1"</li>
                <li>Cyanide (Highly Toxic) - "C#N"</li>
                <li> Nicotine (Neurotoxic Alkaloid) - "CN1CCCC1C2=CN=CC=C2"</li>
                <li>Tetrodotoxin (Neurotoxin from Pufferfish) - "C1C[C@@H]2[C@H]([C@@H]([C@@H](C[C@@]2([C@H]1N)O)O)N)O"</li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default App;