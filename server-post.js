var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

//Accès vers twitter
var T = new Twit(config);

var motBrot = getMotBrot();
tweetUnMot(motBrot);

function tweetUnMot(mot) {
	T.post('statuses/update', { status: mot }, function(err, data, response) {
	  console.log(data)
	});
}

function getMotBrot() {
	//Fonction externe de génération de brot
}