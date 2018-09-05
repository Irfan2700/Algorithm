var utility = require('../utility/utility.js');

const args = require('yargs').argv;

function calander(){

    try{
    d = parseInt(args.d);
    m = parseInt(args.m);
    y = parseInt(args.y);
   // c = parseInt(args.c);

    if(!(d === 0 || m === 0 || y === 0)){

    var day = utility.daysofweek(d,m,y);


console.log(day);
    switch(parseInt(day)){

        case 0: console.log(" Sunday");break;

        case 1: console.log(" Monday");break;

        case 2: console.log(" Tuesday");break;

        case 3: console.log(" Wednesday");break;

        case 4: console.log(" Thrusday");break;

        case 5: console.log(" Friday");break;

        case 6: console.log(" Saturday");break;

        default : console.log("Invalid day");
    }
}else{console.log("Please enter the value of d(day), m(month) and y(year) which greater than 0 ...");}
    }catch(e)
    {console.log("Unexpected Error Occur.. please retry again!!..");
        }

}
calander();