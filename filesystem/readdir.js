const fs = require('fs');

fs.readdir(__dirname, function(err, files){
    if (err) return console.error('Error reading this directory!');
    console.log(`Contents of ${__dirname}:`);
    console.log(files.map(f => '\t' + f).join('\n'));
})