var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');

function vending(){

    var amount = readlinesync.question("Enter the amount : ");

    if(!(isNaN(amount))){
    newFunction(amount);
    }
}
vending();

function newFunction(amount) {
    utility.vendingmachine(amount, 0);
}
