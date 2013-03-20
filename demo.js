var vm = require('vm'),
    fs = require('fs'),
    $ = require('jquery'),
    api = {};

// read file from local nn sdk files
// and pass parameter to api object
vm.runInNewContext(fs.readFileSync('./nn-sdk.js', 'utf-8'), api);

api.nn.initialize();

var param = {
};

// then you can use nn sdk to fetch data.
// ref: http://www.catchpo.tw/dev/doku.php
