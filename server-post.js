var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
	config = require(path.join(__dirname, 'config.js'));

//Accès vers twitter
var T = new Twit(config);
var motBrot = getMotBrot();
console.log(motBrot);

function tweetUnMot(mot) {
	T.post('statuses/update', { status: mot }, function(err, data, response) {
	  console.log(data)
	  process.exit(22);
	});
}


function getMotBrot() {
	let lineNb;
	let i = 0;
	let loop = 'true';
	// Reading the line state file
	let fs = require('fs');
	fs.readFile('state.txt', 'utf8', function (err, contents) {
	  console.log(contents);
	  if (contents) lineNb = contents
	  else lineNb = 0
  
	  // Reading the dictionnary based on the state line
	  let lineReader = require('readline').createInterface({
		input: require('fs').createReadStream('dictionaries/brotDb.txt')
	  });
	  lineNb++;
  
  
	  fs.writeFile('state.txt', lineNb, (err) => {
		if (err) throw err;
		//console.log('state file updated');
	  });
  
	  // Displays all lines
	  lineReader.on('line', function (line) {
  
		//Displays the word on the line defined in state file
		if (i == lineNb && loop == 'true') {
		  //console.log(line);
		  lineNb++;
		  //console.log(lineNb)
		  loop = 'false';
		  //return(line);
		  tweetUnMot(line);
  
		} else {
		  i++;
		}
	  })
  
	});
  }

