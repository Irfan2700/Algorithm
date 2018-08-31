var utility = require('../utility/utility.js');

function primecheck(){
 
    var arr = [];
    arr = Array.from(utility.primecheck()); 
    console.log(arr); 
}
primecheck();