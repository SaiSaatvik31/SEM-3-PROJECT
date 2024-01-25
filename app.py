#from markupsafe import escape
from flask import Flask,request, url_for, redirect, render_template,jsonify
import pickle
import numpy as np
import pandas as pd
from datetime import datetime,timedelta
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)
model=pickle.load(open('The_Palmist_new3.pkl','rb'))
tmodel=pickle.load(open('The_TimeMachine_fin.pkl','rb'))
#a = pd.read_csv("test.csv")
#b = pd.read_csv("updated test.emt_1.csv")

x=0

client = MongoClient('mongodb+srv://trustcureorg:ksksap@cluster7.hzgfnmh.mongodb.net/?retryWrites=true&w=majority')
db = client.trustcure
doctors_collection = db.doc_avail_new
time_collection = db.time

@app.route('/flask/predict',methods=['POST','GET'])
def predict():
    current_date=datetime.now()
    day_name=current_date.strftime("%A")
    print("day_name:",day_name)
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
    print(prediction) #logistic regression
    print(model.predict(a))
    snakes = pd.read_csv("Snakes_fin.csv")
    output = snakes.iloc[prediction][1] 
    l=[]
    h=[]
    amt=[]
    t=[]
    r=[]
    n=[]
    s_t=[]
    doc_wtl = pd.read_csv("Doc_wtl_n1.csv")
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
        s_t.append(str(doc_wtl[f"{day_name}"][a12]))
        if i == 2:
            h.append("Trust Cure Hospitals")
            amt.append("500")
        elif i==3:
            h.append("Trust Cure Hospitals")
            amt.append("540")
        elif i==4:
            h.append("Apollo Hospitals")
            amt.append("600")
        elif i==5:
            h.append("Kamineni Hospital")
            amt.append("450")
    n_dic = {'doctor_list':l,"hospitals_list":h,"time":t, "rating":r,"Norm":n,"slot":s_t,"dayName":day_name,"amt":amt}
    url = 'https://docs.google.com/spreadsheets/d/1rZutJ4-S0YK-Yw3URsJN5BacnUO-Z8R2Lt8F88N32cU/export?format=csv&gid=243849322'
    gf1 = pd.read_csv(url)
    last_updated_time = time_collection.find_one()
    last_updated_time = last_updated_time['time']
    print(last_updated_time)
    # time_document = last_updated_time_.next() if last_updated_time_.count()>0 else None
    # print(time_document)
    # time = time_document["time"] if time_document else None
    # print(time)
    gf2 = gf1[gf1['DateTime']>last_updated_time]
    print(gf2.empty)
    if not gf2.empty:

        example = gf2['Doctor_ID'].index.values
        last_index = example[-1] 
        time = gf2['DateTime'][last_index]
        print(time)
    # time = example['DateTime'][example[-1]]
        latest_time = time_collection.update_one({},{"$set":{'time': time}})
        # if time > last_updated_time:
        print("#############")
        for i in example:
        
                # print(doctor_id)
                doctor_doc = doctors_collection.find_one({"doc_id": gf2['Doctor_ID'][i]})
                if doctor_doc:
                # Toggle status based on existing status
                    new_status = "absent" if doctor_doc["status"] == "present" else "present"
                    doctors_collection.update_one({"doc_id": gf2['Doctor_ID'][i]}, {"$set": {"status": new_status}})
                    print(new_status)
                else:
                    # Doctor ID not found, handle as needed (e.g., log a message)
                    print(f"Doctor ID {gf2['Doctor_ID'][i]} not found in MongoDB collection.")
    print("helllo")
    print(day_name)
    n_dtf = pd.DataFrame(n_dic)
    n_dtf.sort_values(by = 'Norm', ascending = 0,inplace = True)
    n_dtf = n_dtf.astype(str)
    

    print(output)
    print(x)
    print(prediction)
    return {"value" : output,"doctor_list":list(n_dtf['doctor_list']),"hospitals_list":list(n_dtf["hospitals_list"]),"time":list(n_dtf["time"]), "rating":list(n_dtf["rating"]), "slot":list(n_dtf["slot"]),"dayName":day_name,"amt":list(n_dtf["amt"])} #jsonify('{value : 21}'), 200, {'Content-Type': 'application/json'}
x

@app.route('/flask/otherDoctors',methods=['POST','GET'])
def otherDoc():
    snakes = pd.read_csv("Snakes_fin.csv")
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
            doc2.extend(["Dermatologist"]*4)
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

@app.route('/flask/amg',methods=['POST','GET'])
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
    c = pd.read_csv("Dep_ie_fin.csv")
    d = pd.read_csv("Hst_ie_fin.csv")
    print("nice")
    print(dep)
    p = c[dep][0]
    q = d[hos][0]
    print("nice")
    a['Department'][0] = p
    a['Hospital_Type'][0] = q
    pre_t=tmodel.predict(a)
    print(pre_t)
    doc_wtl = pd.read_csv("Doc_wtl_n1.csv")
    x1 = doc_wtl[doc_wtl['Doc_Name']==doc].index.values[0]
    doc_wtl['Time'][x1]= doc_wtl["Time"][x1]+pre_t[0]
    print(doc_wtl['Time'][x1])
    doc_wtl.to_csv("doc_wtl_n1.csv",index=False)
    return {}
    
if __name__ == '__main__':
    app.run(debug=True)