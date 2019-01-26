let lineNb;

// Reading the line state file
let fs = require('fs');
fs.readFile('state.txt', 'utf8', function (err, contents) {
  console.log(contents);
  if (contents) lineNb = contents
  else lineNb = 0

  // Reading the dictionnary based on the state line
  let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('dictionaries/test.txt')
  });

  let i = 0;

  // Displays all lines
  lineReader.on('line', function (line) {

    //Displays the word on the line defined in state file
    if (i >= lineNb) {
      console.log(line);
      lineNb++;
      console.log(lineNb)

      return process.exit(22);

    } else {
      i++;
    }

     //Write new state
      
     fs.writeFile('state.txt', i, (err) => {
      if (err) throw err;
      console.log('state file updated');
    });

  })

});