from flask import Flask
from flask import jsonify

import socket

app = Flask(__name__)

@app.route("/")
def hello():
    response = {"value": "Hello World!", "ip": getIp(getHost()), "host": getHost()}
    return jsonify(response)

def getIp(hostname):
    return socket.gethostbyname(hostname)

def getHost():
    return socket.gethostname()

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
