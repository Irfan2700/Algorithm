var readlinesync = require('readline-sync');
var utility = require('../utility/utility.js');


function anagram(){

    var str1 = readlinesync.question("Enter the first String : ");
    if(isNaN(str1)){
    var str2 = readlinesync.question("Enter the second String : ");
    if(isNaN(str2)){

        utility.anagram(str1,str2);
    }else{console.log}
    }
}
anagram();