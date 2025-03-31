# Virtual Environment (venv)

## Steps to activate Virtual Environment

### MacOS
* `$source myenv/bin/actiavte`

### Windows using CMD
* `venv\Scripts\activate`

## Deactivate: `deactivate` for both OS


# Conda Installation (if required)

`https://www.anaconda.com/`

## Adding to Path 

### MacOS

`echo 'export PATH="$HOME/miniconda3/bin:$PATH"' >> ~/.bashrc`
`source ~/.bashrc`

### Windows (Powershell)

`setx PATH "%PATH%;C:\Users\YourUsername\miniconda3\Scripts"`

# To activate this environment, use

`$ conda activate myenv`

# To deactivate use 

`$ conda deactivate`

# Smiles Strings
## Non Toxic
* Non-Toxic (Generally Safe) Molecules
* Ethanol (Alcohol) – "CCO"
* Water – "O"
* Glucose (Sugar) – "C(C1C(C(C(C(O1)O)O)O)O)O"
* Aspirin – "CC(=O)Oc1ccccc1C(=O)O"
* Caffeine – "CN1C=NC2=C1C(=O)N(C(=O)N2C)"

## Potential Toxic
* Potentially Toxic Molecules
* Methanol (Toxic Alcohol) – "CO"
* Benzene (Carcinogenic Solvent) – "c1ccccc1"
* Cyanide (Highly Toxic) – "C#N"
* Nicotine (Neurotoxic Alkaloid) – "CN1CCCC1C2=CN=CC=C2"
* Tetrodotoxin (Neurotoxin from Pufferfish) – "C1C[C@@H]2[C@H]([C@@H]([C@@H](C[C@@]2([C@H]1N)O)O)N)O"