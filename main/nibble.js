var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');

function nibble() {


    var deci = readlinesync.question("Enter the decimal Number : ");
    console.log(" ");

    if (!(isNaN(deci))) {
        var binval = (utility.toBinary(deci));
        
       var a = 8 - binval.length;
        var s1 = '';

        switch (parseInt(a)) {

            case 1: s1 = '0' + binval; break;

            case 2: s1 = '0' + '0' + binval;break;

            case 3: s1 = '0' + '0' + '0' + binval;break;

            case 4: s1 = '0' + '0' + '0' + '0' + binval;break;

            case 5: s1 = '0' + '0' + '0' + '0' + '0' + binval;break;

            case 6: s1 = '0' + '0' + '0' + '0' + '0' + '0' + binval;break;

            case 7: s1 = '0' + '0' + '0' + '0' + '0' + '0' + '0' + binval;break;

            default: s1 = binval;
        }

        console.log("Binary Converted value is : " +s1);
        console.log(" ");

        var s = s1.split('');

        var p1 = [];
        var p2 = [];
        var i;
        for (i = 0; i < s.length / 2; i++) {

            p1[i] = s[i];
        }
        for (var j = 0; j < s.length / 2; j++ , i++) {

            p2[j] = s[i];
        }

        var p = '' + (p2.join()) + ',' + (p1.join());
        var p1 = p.split(',');
        var str = '';

        for (var k = 0; k < p1.length; k++) {
            str += p1[k];
        }
        console.log("Swaping the nibble : " + str);
        // console.log(str);
        console.log(" ");

        console.log("Converting the nibbled binary value into Decimal after Swaping : ");
        
        console.log(" ");
        var nib = parseInt(str);
        console.log(utility.toDecimal(nib));
        var res = utility.toDecimal(nib);

        console.log(`The ${res} have power of 2 is : ${utility.power(res)}`);
    }
    else {
        console.log("Invalid Input!!");
    }

}
nibble();