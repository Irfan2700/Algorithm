/**DEPENDENCIES & PACKAGES - Expect the nodejs, npm, vargs, readline, lodash to be installed
 */

/*********************************************************************************************************************
*  Execution       :   1. default node         cmd> node utility.js 
*                      2. if nodemon installed cmd> nodemon utility.js
* 
*  Purpose         : Logic for all functional programs.
* 
*  @description    : This file contains all the logic for many different programs and all logic is converted to public 
*                    (export) as its can be accessed.
* 
*  @file           : utility.js
*  @overview       : utility module which contains logic of all algorithms codes.
*  @module         : utility - This is optional if expeclictly its an npm or local package
*  @author         : Irfan2700 <https://github.com/Irfan2700>
*  @version        : 1.0
*  @since          : 23-08-2018
*
**********************************************************************************************************************
**********************************************************************************************************************/

module.exports = {

    anagram : function(str1,str2){

        var s1 = str1.split('');
        var s2 = str2.split('');
        

        if(((s1.sort()).join()) === ((s2.sort()).join())){

            console.log("It is an Anagram!!");
        }else{console.log("Not an Anagram!!");}
    },

    primecheck : function(){

       // var count = 0;
        var arr=[];
        for(var i=2; i<=1000; i++){

            //if(i===1){continue;}
            var flag = false;
            for(var j=2; j<=i/2; j++){

                if(i%j===0){
                    flag = true;
                }
                
            }
            if(flag === false)
            {
                arr.push(i);
            }
        }
        return arr;
        // console.log("the total prime numbers are : "+count);
    },

    palindrom : function(){

        var arr = [];
        var count = 0;
        //arr.push(this.primecheck());
        for(var i=0; i<=1000; i++){

            var flag = false;
            for(var j=2; j<=i/2; j++){

                if(i%j===0){
                    flag = true;
                }
                
            }
            if(flag === false)
            {//console.log(i);
            arr.push(i);
            }
        }
       // console.log(arr);
        
        var arr1 = [];
        console.log("The Anagrams are : ");
       // console.log(arr.length-1);
        
        for(var i=0; i<=arr.length-1; i++){
            for(var j=i+1; j<=arr.length; j++){
                var s1 = '' + parseInt(arr[i]);
                var s2 = '' + parseInt(arr[j]);
                if((((s1.split('')).sort()).join()) === (((s2.split('')).sort()).join())){

                    console.log(s1 +" and "+ s2 +" are Anagram!!");
                    arr1.push(parseInt(s1));
                    
                }

                
            }
        }

        
         console.log("The Pallendroms are : ");
         
         for(var i=0; i<arr1.length; i++){
             
            var sum=0,r;
            //var a = new Array(arr);
            var temp = arr1[i];
            var show = arr1[i];
           
            // if(arr1[i]>10){
            while(arr1[i]>0){
               
                r = arr1[i]%10;
                sum = (sum*10)+r;
                arr1[i] = parseInt(arr1[i]/ 10);
            }

            if(temp === sum){
                console.log(show+" is Pallindrom!!");
            }
        
        }
     },

     binarySearchNumber : function(arr,first,last,num){

        var mid=0;
        if(!(isNaN(arr[0]))){
        if(last>=first){

             mid = Math.floor((last+first)/2);

            if(arr[mid] == num) return (parseInt(mid));

            if(arr[mid] > num) {return this.binarySearchNumber(arr,first,mid-1,num);
            
            }else{return this.binarySearchNumber(arr,mid+1,last,num);
            }
        
           
          }
         return -1;
        }
        
     },

      binarySearchString : function(arr,first,last,string){

        if(isNaN(arr[0])){
        var n = arr.indexOf(string);
        return n;
        }
     },

     getCurrentTime: function () {
        var obj = new Date();
        var start = obj.getTime();
        return start;
    },

    timeDifference: function (startTime, stopTime) {

        var r = (stopTime - startTime) / 1000;
        return r;
    },

    
}

