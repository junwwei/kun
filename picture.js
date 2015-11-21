#!/usr/bin/env node

var pictureTube = require('picture-tube');
var tube = pictureTube();
var url = process.argv[2] ||  process.argv[1];
tube.pipe(process.stdout);
 
//var fs = require('fs');
//fs.createReadStream('Random-random-34188247-2439-2844.png').pipe(tube);

var request = require("request");
request.get(url).pipe(tube);
