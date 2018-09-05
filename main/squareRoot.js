var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');

function sqrt() {

    var square = readlinesync.question("Enter the Number : ");

    if (!(isNaN(square))) {

        console.log("The square Root of " + square + " are : " + (utility.squareRoot(square)));

    }
}
sqrt();