var fs = require("fs");
var fileName = process.argv[2];

var callback = function(err, data) {
  if (err) throw err;
  console.log(data);
}

fs.readFile(fileName, 'utf8', callback);
