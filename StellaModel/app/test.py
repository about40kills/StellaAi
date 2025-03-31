import requests

url = "http://127.0.0.1:8000/predict/"
data = {"smiles": "C#N"}  # Example SMILES

response = requests.post(url, json=data)
print(response.json())