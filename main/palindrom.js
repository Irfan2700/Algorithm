var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');

function palindrom(){
 
    
    var n = readlinesync.question("Enter the maximum number upto wants to get pallindrom : ")
    utility.palindrom(n);
}
palindrom();