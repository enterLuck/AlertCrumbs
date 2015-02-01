from flask import Flask
from flask import jsonify

from pymongo import Connection, MongoClient
from pymongo.errors import ConnectionFailure

from bson import json_util

import os

app = Flask(__name__, static_url_path='/')

#DB MODELING
client = MongoClient('mongodb://user:user@ds045679.mongolab.com:45679/openhack')
DB = client.get_default_database()
carCollection = DB.cars
userCollection = DB.users
user =  {
    'username': "",
    'password': "",
    'score': ""
}
car = {
    'plate': "",
    'make': "",
    'model': "",
    'color': "",
    'wanted': ""
}

testCars = [
{
    'plate': "1234",
    'make': "toyota",
    'model': "camry",
    'color': "blue",
    'wanted': True
},
{
    'plate': "1234567",
    'make': "asdf",
    'model': "asdf",
    'color': "asdf",
    'wanted': False
},
{
    'plate': "2222222",
    'make': "aaa",
    'model': "aaa",
    'color': "aaa",
    'wanted': True
},
{
    'plate': "5554422",
    'make': "asdf",
    'model': "asdf",
    'color': "asdf",
    'wanted': False
},
{
    'plate': "asdfasd",
    'make': "123",
    'model': "123",
    'color': "123",
    'wanted': False
},
{
    'plate': "1233211",
    'make': "asdf",
    'model': "sadf",
    'color': "asdf",
    'wanted': True
}
]

carCollection.insert(doc_or_docs=testCars,continue_on_error=True)


# REOURCES
@app.route('/')
def root():
	return app.send_static_file('index.html')

@app.route('/index.html')
def root_index():
    return app.send_static_file('index.html')

@app.route('/css/<path:path>')
def css_static_proxy(path):
    # send_static_file will guess the correct MIME type
    return app.send_static_file(os.path.join('css', path))

@app.route('/partials/<path:path>')
def partials_static_proxy(path):
    # send_static_file will guess the correct MIME type
    return app.send_static_file(os.path.join('partials', path))

@app.route('/js/<path:path>')
def js_static_proxy(path):
    # send_static_file will guess the correct MIME type
    return app.send_static_file(os.path.join('js', path))

@app.route('/bower_components/<path:path>')
def bower_static_proxy(path):
    # send_static_file will guess the correct MIME type
    return app.send_static_file(os.path.join('bower_components', path))


# API CALLS
@app.route("/users", methods=['POST'])
def users():
    return "You called Users"

@app.route("/users/<username>", methods=['GET'])
def users_username(username):
    userCollection.findOne({'username': username})
    return username

@app.route("/cars/<plate>", methods=['GET'])
def cars(plate):
    car = carCollection.find_one({'plate': plate})
    app.logger.info(json_util.dumps(car, sort_keys=True, indent=4, default=json_util.default))
    return json_util.dumps(car, sort_keys=True, indent=4, default=json_util.default)

#@app.route("/cars/<plate>", methods=['POST'])
#def cars(plate):
#    car = { 'name': '1234', 'crime': 'stolen'}
#    app.logger.info(jsonify(result=car))
#    return jsonify(result=car)


if __name__ == "__main__":
    app.debug = True;
    app.run(host='127.0.0.1', port=3000)