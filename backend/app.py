from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from flask_cors import CORS
import json
import random
from cs50 import SQL

app = Flask(__name__)
CORS(app, origins='http://localhost:3000')

db = SQL("sqlite:///database.db")



@app.route("/questions", methods=["GET", "POST"])
def math():
    if request.method == "GET":
        sub = request.args.get("sub")
        lvl = int(request.args.get("lvl"))
        print(sub, lvl)
        with open(f"dataset/{sub}.json", "r") as f:
            data = json.load(f)
        response = random.sample([q for q in data if q['level']==lvl], 10)
        return jsonify(response)
    

def test():
    with open("dataset/math.json", "r") as f:
            data = json.load(f)
    response = random.sample([q for q in data if q['level']==2], 10)
    print(json.dumps(response, indent=4))

app.run(debug=True)