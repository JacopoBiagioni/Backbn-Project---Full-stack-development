from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

@app.route('/')
def ping_server():
    return "Welcome to the world of animals."

@app.route('/simple_json')
def simple_json():
    return jsonify('{nome : jacopo}')

if __name__=='__main__':
    app.run(host="0.0.0.0", port=5000)