var readlineSync = require('readline-sync');;
var utility = require('../utility/utility.js');

function searchstring(){

    var start = utility.getCurrentTime();

    var length = readlineSync.question("Enter the Array elements length : ");
    
    var arr = [];
    for(var i=0; i<length; i++)
    {
        var flag = false;

       
        var temp = readlineSync.question(`Enter the ${(i)}th element : `);
        
        if(isNaN(temp)){
            flag = true;
        arr.push(temp);
        }else{console.log("Please Enter the String value ...");i--;}
    
}

    var searchit = readlineSync.question("Enter the String want to search : ");

    var found = utility.binarySearchString(arr,0,length-1,searchit);

    console.log('The Sorted Form is : '+(arr));
    if(found !== -1){
        console.log(`Found!! at ${(found+1)}th position of the sorted array..`);
        
    }else{
        console.log(`String not found!!${(found+1)}`);
    }

    var stop = utility.getCurrentTime();
        console.log('');
        // console.log("Stop Time : " + stop / 1000);
        var diff = utility.timeDifference(start, stop);

        console.log("Time Difference : " + diff );
}
searchstring();