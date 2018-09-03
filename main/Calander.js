var utility = require('../utility/utility.js');

const args = require('yargs').argv;

function calander(){

    d = parseInt(args.d);
    m = parseInt(args.m);
    y = parseInt(args.y);

    var day = utility.daysofweek(d,m,y);

    switch(day){

        case 0: console.log(" Sunday");break;

        case 1: console.log(" Monday");break;

        case 2: console.log(" Tuesday");break;

        case 3: console.log(" Wednesday");break;

        case 4: console.log(" Thrusday");break;

        case 5: console.log(" Friday");break;

        case 6: console.log(" Saturday");break;

        default : console.log("Invalid day");
    }

}
calander();