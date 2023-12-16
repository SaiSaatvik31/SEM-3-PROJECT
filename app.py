#from markupsafe import escape
from flask import Flask,request, url_for, redirect, render_template,jsonify
import pickle
import numpy as np
import pandas as pd


app = Flask(__name__,static_folder='./dist/assets',template_folder='./dist')

model=pickle.load(open('The_Palmist_new1.pkl','rb'))
#a = pd.read_csv("test.csv")
#b = pd.read_csv("updated test.emt_1.csv")

@app.route('/')
def hello_world():
    print("okay")
    return render_template("index.html")


@app.route('/predict',methods=['POST','GET'])
def predict():
    print("hello")
    a = pd.read_csv("test.csv")
    b = pd.read_csv("updated test.emt_1.csv")
    data = request.get_json()
    int_features = []
    print(data)
    #symptoms = data.get("symptoms")
    x=[]
    for i in data['data']:
        int_features.append(i['label'])
    print(1)
    for i in int_features:
        x.append(b[i][0])
    print(2)
    for i in x:
        a[i][0]=1
    print(3)
    prediction=model.predict(a)[0]
    snakes = pd.read_csv("snakes5.csv")
    output = snakes.iloc[prediction][1] 
    l=[]
    h=[]
    for i in range(2,6):
        l.append(snakes.iloc[prediction][i])
        if i == 2:
            h.append("Nova")
        elif i==3:
            h.append("Kamineni")
        elif i==4:
            h.append("Shashi Das Hospitals")
        elif i==5:
            h.append("Dootha Hospitals")
    
    print(output)
    return {"value" : output,"doctor_list":l,"hospitals_list":h} #jsonify('{value : 21}'), 200, {'Content-Type': 'application/json'}
if __name__ == '__main__':
    app.run(debug=True)


