var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');

function tempConversion() {

    var temp;

    temp = readlinesync.question("Enter the Temperature wants to convert : ")
    console.log("Select the temperature Conversion : ");
    console.log("1 : Celsius to Fahrenheit ");
    console.log("2 : Fahrenheit to Celsius ");
    var r = readlinesync.question("Enter 1 or 2 : ");


    if (!(isNaN(temp) && isNaN(r))) {
        switch (parseInt(r)) {

            case 1: console.log("The Converted Temperature " + (utility.celsiusToF(temp)) + " °F"); break;

            case 2: console.log("The Converted Temperature " + (utility.fernToC(temp)) + " °C"); break;

            default: console.log("Invalid Temp. Output");

        }
    } else { console.log("Invalid Input!!"); return; };
}
tempConversion();