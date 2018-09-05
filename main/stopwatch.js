var utility = require('../utility/utility.js');

function stopwatch() {

    var arr = [7, 6, 9, 5, 1, 2, 3, 78, 95, 354, 514, 15, 65, 32, 425, 62, 3235, 5523, 825, 323, 21, 84, 2245, 562];
    var strarr = ["abc", "apple", "was", "cat", "mom", "sasc", "bat", "wqwe", "fewq", "dad", "rat", "skyrim", "dota", "kingdom", "cartoon"];

        console.log("For Number Array Binary Search : ");
        var start = utility.getCurrentTime();
        console.log("Start Time : " + start / 1000);
        utility.binarySearchNumber(arr, 0, arr.length - 1, 9);
        var stop = utility.getCurrentTime();
        console.log("Stop Time : " + stop / 1000);
        var diff = utility.timeDifference(start, stop);

        console.log("Time Difference : " + diff );
        console.log(''+arr);
        console.log(`The found Number ${arr[utility.binarySearchNumber(arr, 0, arr.length - 1, 9)]} at position : `+(utility.binarySearchNumber(arr, 0, arr.length - 1, 9)));
        console.log('');


        var arr = [7, 6, 9, 5, 1, 2, 3, 78, 95, 354, 514, 15, 65, 32, 425, 62, 3235, 5523, 825, 323, 21, 84, 2245, 562];
        var strarr = ["abc", "apple", "was", "cat", "mom", "sasc", "bat", "wqwe", "fewq", "dad", "rat", "skyrim", "dota", "kingdom", "cartoon"];
   
        console.log("For String Array Binary Search : ");

        var start = utility.getCurrentTime();
        console.log("Start Time : " + start / 1000);
        utility.binarySearchString(strarr, 0, strarr.length - 1, "bat");
        var stop = utility.getCurrentTime();
        console.log("Stop Time : " + stop / 1000);
        var diff = utility.timeDifference(start, stop);

        console.log("Time Difference : " + diff);
        console.log(''+strarr);
        console.log(`The found the Word '${strarr[utility.binarySearchString(strarr, 0, strarr.length - 1, "bat")]}' at position  : `+(utility.binarySearchString(strarr, 0, strarr.length - 1, "bat")));
        console.log('');

    var arr = [7, 6, 9, 5, 1, 2, 3, 78, 95, 354, 514, 15, 65, 32, 425, 62, 3235, 5523, 825, 323, 21, 84, 2245, 562];
    var strarr = ["abc", "apple", "was", "cat", "mom", "sasc", "bat", "wqwe", "fewq", "dad", "rat", "skyrim", "dota", "kingdom", "cartoon"];
 
        // console.log(utility.insertionSort(strarr));
    console.log("For String Insertion sort : ");

        var start = utility.getCurrentTime();
        console.log("Start Time : " + start / 1000);
        utility.insertionSortString(arr);
        var stop = utility.getCurrentTime();
        console.log("Stop Time : " + stop / 1000);
        var diff = utility.timeDifference(start, stop);

        console.log("Time Difference : " + diff);
        console.log(''+arr);
        console.log('');
        console.log(''+strarr);
        console.log('');

        var arr = [7, 6, 9, 5, 1, 2, 3, 78, 95, 354, 514, 15, 65, 32, 425, 62, 3235, 5523, 825, 323, 21, 84, 2245, 562];
        var strarr = ["abc", "apple", "was", "cat", "mom", "sasc", "bat", "wqwe", "fewq", "dad", "rat", "skyrim", "dota", "kingdom", "cartoon"];
    
        console.log("For Number Insertion sort : ");

        var start = utility.getCurrentTime();
        console.log("Start Time : " + start / 1000);
        utility.insertionSortNum(arr);
        var stop = utility.getCurrentTime();
        console.log("Stop Time : " + stop / 1000);
        var diff = utility.timeDifference(start, stop);

        console.log("Time Difference : " + diff);
        console.log(''+arr);
        console.log('');
        console.log(''+strarr);
        console.log('');

    
        var arr = [7, 6, 9, 5, 1, 2, 3, 78, 95, 354, 514, 15, 65, 32, 425, 62, 3235, 5523, 825, 323, 21, 84, 2245, 562];
        var strarr = ["abc", "apple", "was", "cat", "mom", "sasc", "bat", "wqwe", "fewq", "dad", "rat", "skyrim", "dota", "kingdom", "cartoon"];
       
        console.log("For String Bubble sort : ");

        var start = utility.getCurrentTime();
        console.log("Start Time : " + start / 1000);
        utility.bubbleSortString(arr);
        var stop = utility.getCurrentTime();
        console.log("Stop Time : " + stop / 1000);
        var diff = utility.timeDifference(start, stop);

        console.log("Time Difference : " + diff);
        console.log(''+arr);
        console.log('');
        console.log(''+strarr);
        console.log('');
        
    
        var arr = [7, 6, 9, 5, 1, 2, 3, 78, 95, 354, 514, 15, 65, 32, 425, 62, 3235, 5523, 825, 323, 21, 84, 2245, 562];
        var strarr = ["abc", "apple", "was", "cat", "mom", "sasc", "bat", "wqwe", "fewq", "dad", "rat", "skyrim", "dota", "kingdom", "cartoon"];
    
        console.log("For Number Bubble sort : ");

        var start = utility.getCurrentTime();
        console.log("Start Time : " + start / 1000);
        utility.bubbleSortNum(arr);
        var stop = utility.getCurrentTime();
        console.log("Stop Time : " + stop / 1000);
        var diff = utility.timeDifference(start, stop);

        console.log("Time Difference : " + diff);
        console.log(''+arr);
        console.log('');
        console.log(''+strarr);

}
stopwatch();