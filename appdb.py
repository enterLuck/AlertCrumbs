from datetime import datetime
import sys

from pymongo import Connection
from pymongo.errors import ConnectionFailure


def userinfo(dbh1):
	user_details = {
		"username":raw_input("\n username :"),
		"password":raw_input("\n password :"),
                "first name":raw_input("\nfirst name :"),
                "last name":raw_input("\nlast name :"),
                "age":raw_input("\nage :"),
                "email":raw_input("\nemail :"),
                "score":0
                       }
	dbh1.users.insert(user_details, safe=True)


def logininfo(dbh1,username,password):
	users = dbh1.users.find({"username":username})
	for user in users:
		if password == user.get("password"):
			print "login successful"
		else:
			print "incorrect password"

def score(dbh1):
 	score_info = {
                "first name":raw_input("\nfirst name :"),
                "score":0
                     }
	dbh2.users.insert(score_info, safe=True)
	
def cardetails(dbh):
	car_details = {
        	"numberplate":raw_input("numberplate :"),
                "make" : raw_input("\nmake :"),
                "model": raw_input("\nmodel :"),
                "color": raw_input("\ncolor :"),
                "offense" : raw_input("\noffense :")
		      }
        dbh.users.insert(car_details, safe=True)	
	"""login_details = {
		"username":raw_input("\nusername :"),
		"password":raw_input("\npassword :"),
			}

	user_details = {
		"first name":raw_input("\nfirst name :"),
		"last name":raw_input("\nlast name :"),
		"age":raw_input("\nage :"),
		"email":raw_input("\nemail :"),
		"score":0)
			}"""	
	
def find(inp,dbh):
	users = dbh.users.find({"numberplate":inp})
	for user in users:
		if user.get("offense") == "stolen":
			print "stolen"
		else:
			print "Hello"


def main():
	try:
		c = Connection(host = "localhost", port=27017)
		print "Connected successfully"
		dbh = c["policedb"]
		assert dbh.connection == c
		dbh1 = c["userdatabase"]
		assert dbh1.connection == c
		print "Successfully setup a database handle"
		print "Enter the details of the cars"
		
		a = "Start"
		while(a!= "end"):
			a = raw_input("Type yes to start and end to exit\n")
			if a == "yes":
				cardetails(dbh)	
			else:
			 	break;	
		inp = raw_input("Enter the numberplate details\n")
		find(inp,dbh)	
		print "Enter user info\n"
		userinfo(dbh1)
		print "Entered successfully\n"
		print "Check login details"
		username = raw_input("Enter username")
		password = raw_input("Enter password")
		logininfo(dbh1,username,password)

				
	except ConnectionFailure, e:
		sys.stderr.write("Could not connect to MongoDB: %s"%e)
		sys.exit(1)

if __name__ == "__main__":
	main()

	
