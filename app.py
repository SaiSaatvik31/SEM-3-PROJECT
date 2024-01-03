#from markupsafe import escape
from flask import Flask,request, url_for, redirect, render_template,jsonify
import pickle
import numpy as np
import pandas as pd


app = Flask(_name_,static_folder='./dist/assets',template_folder='./dist')

model=pickle.load(open('The_Palmist_new1.pkl','rb'))
tmodel=pickle.load(open('The_TimeMachine.pkl','rb'))
#a = pd.read_csv("test.csv")
#b = pd.read_csv("updated test.emt_1.csv")
prediction = -1
output = 0
x=[]

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
    t=[]
    doc_wtl = pd.read_csv("Doc_wtl.csv")
    for i in range(2,6):
        l.append(snakes.iloc[prediction][i])
        t.append(str(doc_wtl[snakes.iloc[prediction][i]][0]))
        if i == 2:
            h.append("Pre_Corporate")
        elif i==3:
            h.append("Pre_Corporate")
        elif i==4:
            h.append("Corporate")
        elif i==5:
            h.append("Clinic")
    
    

    print(output)
    print(x)
    print(prediction)
    return {"value" : output,"doctor_list":l,"hospitals_list":h,"time":t} #jsonify('{value : 21}'), 200, {'Content-Type': 'application/json'}






@app.route('/amg',methods=['POST','GET'])
def pre_time():
    print("hello")
    b = pd.read_csv("updated test.emt_1.csv")
    a = pd.read_csv("NT_emt.csv")
    data = request.get_json()
    doc = data['name']
    print(doc)
    hos = data['hospital']
    print(hos)
    dep = data['department']
    for i in x:
        a[i][0]=1
    c = pd.read_csv("Dep_ie.csv")
    d = pd.read_csv("Hst_ie.csv")
    print("nice")
    print(dep)
    p = c[dep][0]
    q = d[hos][0]
    print("nice")
    a['Department'][0] = p
    a['Hospital_Type'][0] = q
    pre_t=tmodel.predict(a)
    print(pre_t)
    doc_wtl = pd.read_csv("Doc_wtl.csv")
    doc_wtl[doc]= doc_wtl[doc]+pre_t[0]
    doc_wtl.to_csv("doc_wtl.csv")
    return {}
    
if __name__ == '__main__':
    app.run(debug=True)
