var utility = require('../utility/utility.js');

const args = require('yargs').argv;

function payment(){

    var p = args.p;
    var y = args.y;
    var r = args.r;

    console.log("the Interest on "+p+" principle are : "+(utility.monthlyPayment(p,y,r)));
}
payment();