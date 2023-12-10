from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib  
from pydantic import BaseModel

app = FastAPI()


origins = ["http://localhost:5175"]  
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class InputData(BaseModel):
   
    feature1: float
    feature2: float
    

@app.post("/amogham")
def predict():
  
    # model = joblib.load("The_Palmist.pkl")

  
    # features = [data.feature1, data.feature2]  

 
    # prediction = model.predict([features])[0]

    return {"prediction": "prediction"}
