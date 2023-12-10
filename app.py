from flask import Flask,request, url_for, redirect, render_template,jsonify
import pickle
import numpy as np
import pandas as pd

app = Flask(__name__)

model=pickle.load(open('The_Palmist.pkl','rb'))
a = pd.read_csv("test.csv")

@app.route('/')
def hello_world():
    return render_template("forest.html")


@app.route('/predict',methods=['POST','GET'])
def predict():
    int_features=[ x for x in request.form.values()]
    for i in int_features:
        a[i][0]=1
    final=[np.array(int_features)]
    print(int_features)
    print(a)
    prediction=model.predict(a)[0]
    snakes = pd.read_csv("snakes1.csv")
    output = snakes.iloc[prediction][1] 
    output1 = snakes.iloc[prediction][5]
    return jsonify({"value" : output1})

if __name__ == '__main__':
    app.run(debug=True)
