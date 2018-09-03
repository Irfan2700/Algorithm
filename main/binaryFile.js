var fs = require('fs');
var readlineSync = require('readline-sync');
var utility = require('../utility/utility.js');

// var str;

function search(){

    var string = fs.readFileSync('MyFile.txt','utf8');
    
    
    var str = string.toString().split(' ');
    console.log(string);
   

    var searchit = readlineSync.question("Enter the Number want to search : ");

    var found = utility.binarySearchString(str,0,str.length-1,searchit);

    if(found !== -1){
        console.log(`Found!! at ${(found)}th position of the sorted array..`);
        
    }else{
        console.log(`Number not found!!${(found)}`);
    }

}
search();