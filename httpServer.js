'use strict';

const { fstat } = require('fs');

var http = require('http');
var port = process.env.PORT || 8000;



var server = http.createServer(function(req, res) {
if(req.url === '/pets'){
    res.setHeader('Content-Type', 'application/JSON');
fs.readFile("pets.json",function (err, data){
    var index = process.argv[3];

    letdataArr =JSON.parse(data);
    if(data){
        res.end(JSON.stringify(dataArr));
    }
});
}else if(req.url === `/pets/${index}`){
   let dataArr = JSON.parse(data);
   if(data){
    res.end(JSON.stringify(dataArr[index]));
   }
}




server.listen(port, function() {
console.log('Listening on port', port);
});