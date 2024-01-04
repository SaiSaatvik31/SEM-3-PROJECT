#from markupsafe import escape
from flask import Flask,request, url_for, redirect, render_template,jsonify
import pickle
import numpy as np
import pandas as pd


app = Flask(__name__,static_folder='./dist/assets',template_folder='./dist')

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
    r=[]
    n=[]
    doc_wtl = pd.read_csv("Doc_wtl_n.csv")
    ut = doc_wtl['Time'].max()
    lt = doc_wtl['Time'].min()
    dt = ut - lt
    #len(df['Time'])
    for i in range(len(doc_wtl['Time'])):
        st = doc_wtl['Time'][i] - lt
        if dt == 0:
            dft = 0
        else:
            dft = st/dt
        dft = 1 - dft
        dfr = doc_wtl['Rating'][i]/5
        doc_wtl['Norm'][i] = dft*0.6 + dfr*0.4
    doc_wtl.sort_values(by = 'Norm', ascending = 0)

    for i in range(2,6):
        l.append(snakes.iloc[prediction][i])
        a12 = doc_wtl[doc_wtl['Doc_Name']== snakes.iloc[prediction][i]].index.values[0]
        t.append(str(doc_wtl['Time'][a12]))
        r.append(str(doc_wtl['Rating'][a12]))
        n.append(str(doc_wtl['Norm'][a12]))
        if i == 2:
            h.append("Trust Cure Hospitals")
        elif i==3:
            h.append("Trust Cure Hospitals")
        elif i==4:
            h.append("Apollo Hospitals")
        elif i==5:
            h.append("Kamineni Hospital")
    n_dic = {'doctor_list':l,"hospitals_list":h,"time":t, "rating":r,"Norm":n }
    n_dtf = pd.DataFrame(n_dic)
    n_dtf.sort_values(by = 'Norm', ascending = 0,inplace = True)
    n_dtf = n_dtf.astype(str)

    

    print(output)
    print(x)
    print(prediction)
    return {"value" : output,"doctor_list":list(n_dtf['doctor_list']),"hospitals_list":list(n_dtf["hospitals_list"]),"time":list(n_dtf["time"]), "rating":list(n_dtf["rating"])} #jsonify('{value : 21}'), 200, {'Content-Type': 'application/json'}


@app.route('/otherDoctors',methods=['POST','GET'])
def otherDoc():
    snakes = pd.read_csv("snakes5.csv")
    doctor_names = snakes.iloc[:, 2:].values.flatten().tolist()
    print(doctor_names)
    doc1=[]
    doc2=[]
    for i in range(0,48,4):
        doc1.append("Trust Cure Hospitals")
        doc1.append("Trust Cure Hospitals")
        doc1.append("Apollo Hospitals")
        doc1.append("Kamineni Hospitals")
    for i in range(1):
            doc2.extend(["Allergist"]*4)
            doc2.extend(["Cardiologist"]*4)
            doc2.extend(["ENT Specialist"]*4)
            doc2.extend(["Gastroenterologist"]*4)
            doc2.extend(["General Physician"]*4)
            doc2.extend(["Infectious Disease Specialist"]*4)
            doc2.extend(["Ophthalmologist"]*4)
            doc2.extend(["Orthopedician"]*4)
            doc2.extend(["Psychiatrist"]*4)
            doc2.extend(["Pulmonologist"]*4)
            doc2.extend(["Rheumatologist"]*4)

    print(doc1)
    print(doc2)
    return {"other_doctor_names":doctor_names,"hospitals_name":doc1,"speciality":doc2}




@app.route('/amg',methods=['POST','GET'])
def pre_time():
    print("hello")
    b = pd.read_csv("updated test.emt_1.csv")
    a = pd.read_csv("NT_emt.csv")
    data = request.get_json()
    doc = data['name']
    print(doc)
    hos = data['hospital']
    if hos == "Trust Cure Hospitals":
        hos = "Pre_Corporate"
    elif hos == "Apollo Hospitals":
        hos = "Corporate"
    elif hos == "Kamineni Hospital":
        hos = "Clinic"
    print(hos)
    dep = data['department']
    int_features = []
    print(data)
    x=[]
    for i in data['data']:
        int_features.append(i['label'])
    print(1)
    for i in int_features:
        x.append(b[i][0])
    print(2)
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
    doc_wtl = pd.read_csv("Doc_wtl_n.csv")
    x1 = doc_wtl[doc_wtl['Doc_Name']==doc].index.values[0]
    doc_wtl['Time'][x1]= doc_wtl["Time"][x1]+pre_t[0]
    print(doc_wtl['Time'][x1])
    doc_wtl.to_csv("doc_wtl_n.csv")
    return {}
    
if __name__ == '__main__':
    app.run(debug=True)