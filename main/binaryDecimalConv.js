var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');

function binaryDecimal(){

    
    console.log("Choose the which type of conversion you need to do : ");
    console.log("1 : Decimal to Binary ");
    console.log("2 : Binary to Decimal ");
    var option = readlinesync.question("Enter 1 or 2 : ");
    var deci;
    var bin;

    if(!(isNaN(option))){

        switch(parseInt(option)){

            case 1 : deci = readlinesync.question("Enter the Decimal Number for convert it into Binary : ");
                    if(!(isNaN(deci))){
                        console.log("The Binary Converted form of Decimal Number : "+deci+" is : "+ utility.toBinary(deci));
                    }else{console.log("Please Enter a Number only!!!!");}
                    break;

            case 2 : bin = readlinesync.question("Enter the Binary Number for convert it into Decimal : ");
                    if(!(isNaN(bin))){
                        console.log("The Decimal Converted form of Binary Number : "+bin+" is : "+utility.toDecimal(bin));
                    }else{console.log("Please Enter a Number value only!!!!");}
                    break;

            default : console.log("Invalid option selection!!");
        }
    }else{console.log("Invalid Input!!");}

}
binaryDecimal();