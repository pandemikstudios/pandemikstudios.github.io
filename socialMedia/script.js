var database = [
{
	username: "leif",
	password: "notapassword",
},
];

var newsFeed = [{
	username: "Link",
	timeline: "Hold up guys, Im going to say something racist but funny"
},
{
	username: "Jeremy",
	timeline: "ahhahaha dude...but seriously stop"
},
];
var userNamePrompt = prompt("What's your Username?");
var passwordPrompt = prompt("what's your Password");

function signIn(user, pass) {
	if (user === database[0].username && 
		pass === database[0].password) {
		console.log("Logged in")
	}
	else {
		console.log("Log In failed")
	}
}
signIn(userNamePrompt, passwordPrompt);