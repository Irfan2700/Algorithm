var readlineSync = require('readline-sync');;
var utility = require('../utility/utility.js');

function sort(){

    var length = readlineSync.question("Enter the Array elements length : ");
    
    var arr = [];
    for(var i=0; i<length; i++)
    {

        var temp = readlineSync.question(`Enter the ${(i)}th element : `);
        
        arr.push(temp);
    }

    console.log("Choose from which method you want for Sorting : ");
    console.log("1 : Bubble Sort");
    console.log("2 : Insertion Sort");
    console.log("3 : Merge Sort");
    var option = readlineSync.question("Enter 1, 2 or 3: ");
    if(!(isNaN(option))){

        switch(parseInt(option)){

            case 1: {   if(isNaN(arr[0])){
                        console.log(utility.bubbleSortString(arr));break;
                        }else{console.log(utility.bubbleSortNum(arr));break;}
                    }

            case 2: {   if(isNaN(arr[0])){
                        console.log(utility.insertionSortString(arr));break;
                        }else{console.log(utility.insertionSortNum(arr));break;}
                    }

            case 3: console.log(utility.mergeSort(arr));break;

            default : console.log("Invalid option Entry!!!");
        }
    }else{
        console.log("Invalid Input!!");
    }

}
sort();
