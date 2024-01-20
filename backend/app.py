from flask import Flask, render_template, request, redirect, url_for, flash, jsonify, session
from flask_cors import CORS
import json
import random
from cs50 import SQL
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app, origins='http://localhost:3000')

db = SQL("sqlite:///edumadefun.db")


@app.route("/register", methods=["GET", "POST", "OPTIONS"])
def register():
    if request.method == "POST":
        data = request.get_json()
        email = data.get("logemail")
        username = data.get("logname")
        password = data.get("logpass")
        if not username:
            return jsonify({"success": False, "message": "Username not provided"})
        elif not password:
            return jsonify({"success": False, "message": "Password not provided"})
        elif db.execute("SELECT * FROM users WHERE email = :email", email=email):
            return jsonify({"success": False, "message": "Email already exists"})
        else:
            password = generate_password_hash(password)
            db.execute("INSERT INTO users (username, email, password) VALUES (:username, :email, :password)", username=username, email=email, password=password)
            return jsonify({"success": True, "message": "User created successfully"})
    else:
        return jsonify({"success": False, "message": "Only POST requests allowed"})
    

@app.route("/login", methods=["GET", "POST", "OPTIONS"])
def login():
    if request.method == "POST":
        data = request.get_json()
        email = data.get("logemail")
        password = data.get("logpass")
        if not email:
            return jsonify({"success": False, "message": "Username not provided"})
        elif not password:
            return jsonify({"success": False, "message": "Password not provided"})
        elif not db.execute("SELECT * FROM users WHERE email = :email", email=email):
            return jsonify({"success": False, "message": "Username does not exist"})
        else:
            user = db.execute("SELECT * FROM users WHERE email = :email", email=email)[0]
            if check_password_hash(user["password"], password):
                return jsonify({"success": True, "message": "Login successful"})
            else:
                return jsonify({"success": False, "message": "Incorrect password"})
    else:
        return jsonify({"success": False, "message": "Only POST requests allowed"})
    

@app.route("/questions", methods=["GET", "POST", "OPTIONS"])
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

app.run(debug=False)