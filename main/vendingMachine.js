var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');

function vending(){

    var amount = readlinesync.question("Enter the amount : ");

    if(!(isNaN(amount))){
    console.log("The Minimum No. of notes to  Return the change by Machine is : " + (utility.vendingmachine(amount,0)));
    }
}
vending();