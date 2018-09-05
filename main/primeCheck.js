var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');

function primecheck(){
 
    var arr = [];
    var n = readlinesync.question("Enter the Maximum Number upto which wants to get all peime Number : ");
    arr = Array.from(utility.primecheck(n)); 
    console.log(arr); 
}
primecheck();