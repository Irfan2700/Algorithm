var readlineSync = require('readline-sync');
var utility = require('../utility/utility.js');

function search() {

    console.log('');
    console.log('Binary Search for Number.....');

    var start = utility.getCurrentTime();
    // console.log("Start Time : " + start / 1000);

    var length = readlineSync.question("Enter the Array elements length : ");

    if (!(isNaN(length))) {
        var arr = [];
        for (var i = 0; i < length; i++) {

            var temp = readlineSync.question(`Enter the ${(i)}th element : `);
            arr.push(temp);
        }

        var searchit = readlineSync.question("Enter the Number want to search : ");


        var found = utility.binarySearchNumber(arr, 0, length - 1, searchit);

        console.log('The Sorted Form is : ' + (arr));
        if (found !== -1) {
            console.log(`Found!! at ${(found+1)}th position of the sorted array..`);

        } else {
            console.log(`Number not found!!${(found+1)}`);
        }
        var stop = utility.getCurrentTime();
        console.log('');
        // console.log("Stop Time : " + stop / 1000);
        var diff = utility.timeDifference(start, stop);

        console.log("Time Difference : " + diff);

        //console.log(utility.mergeSort(arr));
    } else {
        console.log("Invalid Array length ...");
    }
}
search();

function searchstring() {

    console.log('');
    console.log('');
    console.log('Binary Search for String.....');
    var start = utility.getCurrentTime();

    var length = readlineSync.question("Enter the Array elements length : ");

    if (!(isNaN(length))) {
        var arr = [];
        for (var i = 0; i < length; i++) {
            var flag = false;


            var temp = readlineSync.question(`Enter the ${(i)}th element : `);

            if (isNaN(temp)) {
                flag = true;
                arr.push(temp);
            } else {
                console.log("Please Enter the String value ...");
                i--;
            }

        }

        var searchit = readlineSync.question("Enter the String want to search : ");

        var found = utility.binarySearchString(arr, 0, length - 1, searchit);

        console.log('The Sorted Form is : ' + (arr));
        if (found !== -1) {
            console.log(`Found!! at ${(found+1)}th position of the sorted array..`);

        } else {
            console.log(`String not found!!${(found+1)}`);
        }

        var stop = utility.getCurrentTime();
        console.log('');

        var diff = utility.timeDifference(start, stop);

        console.log("Time Difference : " + diff);
    } else {
        console.log("Invalid Array length ...");
    }
}
searchstring();


function InsertionsortString() {

    console.log('');
    console.log('');
    console.log('Insertion Sort ');

    if (!(isNaN(length))) {
        var length = readlineSync.question("Enter the Array elements length : ");

        var arr = [];
        for (var i = 0; i < length; i++) {
            var flag = false;

            var temp = readlineSync.question(`Enter the ${(i)}th element : `);

            if (!(isNaN(temp))) {
                flag = true;
                arr.push(temp);
            } else {
                console.log("Please Enter the String value ...");
                i--;
            }

        }

        console.log(utility.insertionSortString(arr));

        // }else
        // {console.log(utility.insertionSortNum(arr));}

        var stop = utility.getCurrentTime();
        console.log('');

        var diff = utility.timeDifference(start, stop);

        console.log("Time Difference : " + diff);
    } else {
        console.log("Invalid Array length ...");
    }

}
InsertionsortString();


function InsertionsortNum() {

    console.log('');
    console.log('');
    console.log('Insertion Sort for Number ... ');

    if (!(isNaN(length))) {
        var length = readlineSync.question("Enter the Array elements length : ");

        var arr = [];
        for (var i = 0; i < length; i++) {
            var flag = false;

            var temp = readlineSync.question(`Enter the ${(i)}th element : `);

            if (!(isNaN(temp))) {
                flag = true;
                arr.push(temp);
            } else {
                console.log("Please Enter the Number value ...");
                i--;
            }

        }

        console.log(utility.insertionSortNum(arr));

        // }else
        // {console.log(utility.insertionSortNum(arr));}

        var stop = utility.getCurrentTime();
        console.log('');

        var diff = utility.timeDifference(start, stop);

        console.log("Time Difference : " + diff);

    } else {
        console.log("Invalid Array length ...");
    }
}
InsertionsortNum();


function bubblesortNum() {

    console.log('');
    console.log('');
    console.log('Bubble Sort for Number ... ');

    if (!(isNaN(length))) {
        var length = readlineSync.question("Enter the Array elements length : ");

        var arr = [];
        for (var i = 0; i < length; i++) {
            var flag = false;

            var temp = readlineSync.question(`Enter the ${(i)}th element : `);

            if (!(isNaN(temp))) {
                flag = true;
                arr.push(temp);
            } else {
                console.log("Please Enter the Number value ...");
                i--;
            }

        }

        console.log(utility.bubbleSortNum(arr));

        // }else
        // {console.log(utility.insertionSortNum(arr));}

        var stop = utility.getCurrentTime();
        console.log('');

        var diff = utility.timeDifference(start, stop);

        console.log("Time Difference : " + diff);

    } else {
        console.log("Invalid Array length ...");
    }
}
bubblesortNum();


function bubblesortString() {

    console.log('');
    console.log('');
    console.log('Bubble Sort for String ... ');

    if (!(isNaN(length))) {
        var length = readlineSync.question("Enter the Array elements length : ");

        var arr = [];
        for (var i = 0; i < length; i++) {
            var flag = false;

            var temp = readlineSync.question(`Enter the ${(i)}th element : `);

            if (isNaN(temp)) {
                flag = true;
                arr.push(temp);
            } else {
                console.log("Please Enter the String value ...");
                i--;
            }

        }

        console.log(utility.bubbleSortString(arr));

        // }else
        // {console.log(utility.insertionSortNum(arr));}

        var stop = utility.getCurrentTime();
        console.log('');

        var diff = utility.timeDifference(start, stop);

        console.log("Time Difference : " + diff);
        
    } else {
        console.log("Invalid Array length ...");
    }

}
bubblesortString();