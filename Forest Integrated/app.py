from flask import Flask,request, url_for, redirect, render_template
import pickle
import numpy as np
import pandas as pd

app = Flask(__name__)

model=pickle.load(open('Forest Integrated/The_Palmist.pkl','rb'))


@app.route('/')
def hello_world():
    return render_template("forest.html")


@app.route('/predict',methods=['POST','GET'])
def predict():
    int_features=[ x for x in request.form.values()]
    a = pd.read_csv("test.emt.csv")
    for i in int_features:
        a[i][0]=1
    final=[np.array(int_features)]
    print(int_features)
    print(a)
    prediction=model.predict(a)[0]
    snakes = pd.read_csv("Snakes.csv")
    output = snakes.iloc[prediction][1]

    
    return render_template('forest.html',pred='Your Forest is in Danger.\nProbability of fire occuring is {}'.format(output),bhai="kuch karna hain iska ab?")

if __name__ == '__main__':
    app.run(debug=True)
