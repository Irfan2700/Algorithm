var readlineSync = require('readline-sync');
var utility = require('../utility/utility.js');

function search(){

    var start = utility.getCurrentTime();
    // console.log("Start Time : " + start / 1000);

    var length = readlineSync.question("Enter the Array elements length : ");
    
    var arr = [];
    for(var i=0; i<length; i++)
    {

        var temp = readlineSync.question(`Enter the ${(i)}th element : `);
        arr.push(temp);
    }

    var searchit = readlineSync.question("Enter the Number want to search : ");

     
    var found = utility.binarySearchNumber(arr,0,length-1,searchit);

    console.log('The Sorted Form is : '+(arr));
    if(found !== -1){
        console.log(`Found!! at ${(found+1)}th position of the sorted array..`);
        
    }else{
        console.log(`Number not found!!${(found+1)}`);
    }
    var stop = utility.getCurrentTime();
        console.log('');
        // console.log("Stop Time : " + stop / 1000);
        var diff = utility.timeDifference(start, stop);

        console.log("Time Difference : " + diff );

    //console.log(utility.mergeSort(arr));
}
search();