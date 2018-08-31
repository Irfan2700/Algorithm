var utility = require('../utility/utility.js');

function stopwatch(){

    var arr = [1,2,9,5,7,6,3];
    var strarr = ["abc","apple","bat","cat","mom","sasc","was","wqwe","fewq"];
    
    console.log("For Number Array Binary Search : ");
    var start = utility.getCurrentTime();
    console.log("Start Time : "+start/1000);
    utility.binarySearchNumber(arr,0,arr.length-1,9);
    var stop = utility.getCurrentTime();
    console.log("Stop Time : "+stop/1000);    
    var diff = utility.timeDifference(start,stop);

    console.log("Time Difference : "+diff/1000);

    console.log("For String Array Binary Search : ");

    var start = utility.getCurrentTime();
    console.log("Start Time : "+start/1000);
    utility.binarySearchString(strarr,0,strarr.length-1,"bat");
    var stop = utility.getCurrentTime();
    console.log("Stop Time : "+stop/1000);    
    var diff = utility.timeDifference(start,stop);

    console.log("Time Difference : "+diff);

}
stopwatch();