// content of index.js
const http = require('http')
const port = 3000

// TODO Unusefull
const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)

})


let lineNb;

// Reading the line state file
let fs = require('fs'); 
fs.readFile('state.txt', 'utf8', function(err, contents) {
    console.log(contents);
    if(contents) lineNb = contents
    else lineNb = 0

    // Reading the dictionnary based on the state line
    let lineReader = require('readline').createInterface({
      input: require('fs').createReadStream('dictionaries/test.txt')
    });

    let i=0;

    // Displays all lines
    lineReader.on('line', function (line) {

      //Displays the word on the line defined in state file
      if(i >= lineNb ) {
        console.log('Line from file:', line);
        lineNb++;
        console.log(lineNb)
      }

      else { i++; }
      
      
    });

});
 
console.log('after calling readFile');
