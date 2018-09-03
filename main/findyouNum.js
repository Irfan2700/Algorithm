var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');

const args = require('yargs').argv;

function findtheNum() {

    var N = parseInt(args.N);

    if(!(isNaN(N))){
    utility.guessing(N,readlinesync);
    }else{console.log("Invalid Input!!!")}
}
findtheNum();