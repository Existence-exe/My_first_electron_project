import json
from flask import Flask

app = Flask(__name__)


@app.route('/')
def main():
    return {'status': 'success'}


@app.route("/<data>/")
def api(data):
    array = data.split(',')
    print(array)
    with open('./backEnd/data.json', 'r') as f:
        dB = json.load(f)
    arrayB = array[0].split('+')
    key = str(arrayB[0])
    print(len(arrayB))
    value = str(arrayB[1])
    dB[key] = value
    with open('./backEnd/data.json', 'w') as f:
        json.dump(dB, f)
    return 'successful'
    


if __name__ == '__main__':
    print("RAJU")
    app.run()
