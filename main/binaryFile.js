var fs = require('fs');
var readlineSync = require('readline-sync');
var utility = require('../utility/utility.js');

// var str;

function search(){

    try {
    var string = fs.readFileSync('MyFile.txt','utf8');
    
    } catch (e) {
        console.log("File Not found... Please recheck the file location..");
    }
    var str = string.toString().split(',');
    console.log(string);
   

    var searchit = readlineSync.question("Enter the word want to search : ");

    var found = utility.binarySearchString(str,0,str.length-1,searchit);

    if(found !== -1){
        console.log(`Found!! at ${(found+1)}th position of the sorted array..`);
        
    }else{
        console.log(`Number not found!!${(found+1)}`);
    }

}
search();