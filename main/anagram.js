var readline = require('readline');
var utility = require('../utility/utility.js');

var read = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

function anagram(){

    read.question("Enter the first String : ", function(str1){
        read.question("Enter the second String : ", function(str2){

            utility.anagram(str1,str2);
            read.close();
        });
    });
}
anagram();