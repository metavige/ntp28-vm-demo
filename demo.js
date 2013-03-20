var vm = require('vm'),
    fs = require('fs'),
    api = {};

// read file from local nn sdk files
// and pass parameter to api object
vm.runInNewContext(fs.readFileSync('./nn-sdk.js', 'utf-8'), api);
