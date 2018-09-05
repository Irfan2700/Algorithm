/**DEPENDENCIES & PACKAGES - Expect the nodejs, npm, vargs, readline, readline-sync, lodash to be installed
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
*  @since          : 31-08-2018
*
**********************************************************************************************************************
**********************************************************************************************************************/

module.exports = {

    anagram: function (str1, str2) 
    /**
     * @description : If a Characters used to make single word then same character is used to make other word
     *                then the they called anagrams.
     * @param {string} str1 first word
     * @param {string} str2 second word
     * @function anagram : logic to find that two input string are Anagram or not by first converting both string into
     *                      string array and then sort it and after that join and then compare with ewach other.
     */
    
    {
        var s1 = str1.split('');        //converting string 
        var s2 = str2.split('');        //into string array


        if (((s1.sort()).join()) === ((s2.sort()).join())) {    //comparing by sorting and join the string arrays

            console.log("It is an Anagram!!");
        } else { console.log("Not an Anagram!!"); }
    },

    primecheck: function (n) {

        /**
         * @description : To finding all Prime Numbers from 0 to n-1
         * @param {Number} n is the user input upto which the prime Number required
         * @function primecheck logic to get all prime number
         */

        // var count = 0;
        var arr = [];
        for (var i = 2; i <= n; i++) {

            //if(i===1){continue;}
            var flag = false;           //flag varoable for identification purpose
            for (var j = 2; j <= i / 2; j++) {

                if (i % j === 0) {      //composite number checking
                    flag = true;
                }

            }
            if (flag === false) {       
                arr.push(i);            //pushing all prime number into an array
            }
        }
        return arr;         //all prime number
        
    },

    
    palindrom: function (n) {

    /**
     * @description : In this by extending the output of prime Number to check that Number are Anagram and Pallendrome
     * @param {Number} n is any number which is User Input
     * @function palindrom logic for the checking pallendrome and anagram of prime number set by taking the output of the
     *                      prime number and then check for anagram and pallendrom
     */

     /**
     * prime Number logic
     */
        var arr = [];
        var count = 0;
        //arr.push(this.primecheck());
        for (var i = 0; i <= n ; i++) {

            var flag = false;
            for (var j = 2; j <= i / 2; j++) {

                if (i % j === 0) {
                    flag = true;
                }

            }
            if (flag === false) {//console.log(i);
                arr.push(i);
            }
        }
        // console.log(arr);

        var a1 = [];
        var arr1 = [];
        console.log("The Anagrams are : ");
        // console.log(arr.length-1);

        for (var i = 0; i <= arr.length - 1; i++) {            //nested for loop
            for (var j = i + 1; j <= arr.length; j++) {        //i+1 to avoid the avoid comparision with number it self
                var s1 = '' + parseInt(arr[i]);                //converting each element into string  
                var s2 = '' + parseInt(arr[j]);
                if ((((s1.split('')).sort()).join()) === (((s2.split('')).sort()).join())) {   //check for anagram

                    arr1.push(parseInt(s1)); 
                    a1.push(parseInt(s1));
                    a1.push(parseInt(s2));       //pushing all anagram element into an array


                }
                

            }
        }

        console.log("The Anagram are..."+a1);
        console.log('');
        console.log('');

        console.log("The Pallendroms are : ");  
        var a = [];
        for (var i = 0; i < arr1.length; i++) {     //checking for pallendrom

            var sum = 0, r;
            //var a = new Array(arr);
            var temp = arr1[i];
            var show = arr1[i];

            // if(arr1[i]>10){
            while (arr1[i] > 0) {           //reversing logic

                r = arr1[i] % 10;
                sum = (sum * 10) + r;
                arr1[i] = parseInt(arr1[i] / 10);
            }

            if (temp === sum) {             //compare original and reverse number
                //console.log(show + " is Pallindrom!!");
                a.push(parseInt(show));
            }
            
        }
        console.log("the Pallendrom are :.. "+a);
    },

    
    binarySearchNumber: function (a, first, last, num) {

        /**
     * @description : To find the number from an list of array which contain the number.
     * @param {Number} a is array contain any number
     * @param {Number} first is any number which is the 0 at initial function call
     * @param {Number} last is any number which is the last number in initial call
     * @param {Number} num is number which present in the array for searching this number
     * @function binarySearchNumber logic to find a particular number in the given array
     */

        var arr = this.bubbleSortNum(a);     //sorthing the array before apply any logic
        var mid = 0;
        if (!(isNaN(arr[0]))) {             //checking that only Number is enter
            if (last >= first) {           

                mid = Math.floor((last + first) / 2);   //mid of the particular iteration array

                if (arr[mid] == num) return (parseInt(mid));    //number found

                if (arr[mid] > num) {
                    return this.binarySearchNumber(arr, first, mid - 1, num); //number is in part of array greater than mid

                } else {
                    return this.binarySearchNumber(arr, mid + 1, last, num); //number is in part of array less than mid
                }


            }
            return -1;
        }

    },

    binarySearchString: function (a, first, last, string) {

        /**
         * @description : To find a string from a given array of string and return its index position
         * @param {string} arr is a string array contain any string
         * @param {Number} first is any number which is the 0 at initial function call
         * @param {Number} last is any number which is the last string in initial call
         * @param {string} string is string which present in the array which need to be search
         * @function binarySearchString logic to find a particular string in the given array
         */

        //var arr = this.binarySearchString(a);
        var arr = this.bubbleSortString(a);     //sorting the array before apply any logic
        var mid = 0;
        if ((isNaN(arr[0]))) {             //checking that only string is enter
            if (last >= first) {           

                mid = Math.floor((last + first) / 2);   //mid of the particular iteration array

                if (arr[mid] == string) return (mid);    //word found

                if (arr[mid] > string) {
                    return this.binarySearchString(arr, first, mid - 1, string); //string is in part of array greater than mid

                } else {
                    return this.binarySearchString(arr, mid + 1, last, string); //string is in part of array less than mid
                }


            }
            return -1;
        }

    },

    getCurrentTime: function () {

    /**
     * @description : Get the current time using the getTime() function
     */

        var obj = new Date();
        var start = obj.getTime();
        return start;
    },

    timeDifference: function (startTime, stopTime) {

    /**
     * @description : Get the time Difference
     */

        var r = (stopTime - startTime) / 1000;
        return r;
    },




    insertionSortNum: function (arr) {

        /**
         * @description : To Sort the given array with respect to Number using the Insertion Sort Algorithm
         * @param {Number} arr is an array have any Number
         */

        for (var i = 1; i < arr.length; i++) {
            var key = parseInt(arr[i]);
            var j = i - 1;

            while (j > -1 && parseInt(arr[j]) > key) {   //shifting the small number into the left most

                arr[j + 1] = arr[j];        //puting the larger number in place of smaller one
                j--;
            }

            arr[j + 1] = key;       //puting the smaller in the left most postion
        }
        return arr;
    },

    insertionSortString: function (arr) {

        /**
         * @description : To Sort the given array with respect to string using the Insertion Sort Algorithm
         * @param {string} arr is a string array contain any string
         */

        for (var i = 1; i < arr.length; i++) {  
            var key = (arr[i]);
            var j = i - 1;

            while (j > -1 && (arr[j]) > key) {      //shifting the small number into the left most

                arr[j + 1] = arr[j];        //puting the larger number in place of smaller one
                j--;
            }

            arr[j + 1] = key;           //puting the smaller in the left most postion
        }
        return arr;
    },

    bubbleSortNum: function (arr) {

        /**
         * @description : To Sort the given array with respect to Number using the Bubble Sort Algorithm
         * @param {Number} arr is an array contain any number
         */

        for (var i = 0; i < arr.length - 1; i++) {      
            for (var j = 0; j < arr.length - i - 1; j++) {

                if (parseInt(arr[j]) > parseInt(arr[j + 1])) {  //compare consecutive element of the array
                    var temp = arr[j];                  //swaping
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    },

    bubbleSortString: function (arr) {

        /**
         * @description : To Sort the given array with respect to string using the Bubble Sort Algorithm
         * @param {string} arr is an array contain any string
         */

        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {

                if ((arr[j]) > (arr[j + 1])) {      //compare consecutive element of the array
                    var temp = arr[j];          //swaping
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    },

    mergeSort: function (arr) {

        /**
         * @description : To Sort the given array using the Merge Sort Algorithm
         * @param {array} arr is an array contain any either Number or string
         */

        if (arr.length === 1) { return; }   //controlling point of recursive call


        var m = Math.floor(arr.length / 2);
        var a1 = new Array(m);              //dividing arr into two part and storing into two different arrays
        var a2 = new Array(arr.length - m);

        var i;

        for (var i = 0; i < a1.length; i++) {  //inserting first half of arr into a1

            a1[i] = arr[i];
        }
        for (var j = 0; j < a2.length; j++ , i++) {  //inserting the remaining half into a2

            a2[j] = arr[i];
        }

        this.mergeSort(a1);     //recursive call
        this.mergeSort(a2);     //recursive call

        if (isNaN(arr[0])) {  //condition to identify the given array is string or Number
            this.sortingString(a1, a2, arr);    //for string
        } else {
            this.sortingNum(a1, a2, arr);       //for Number
        }
        return arr;
    },

    sortingNum: function (a, b, c) {    //for merge the above a1 and a2 arrays into c array

        var i = 0, j = 0, k = 0;

        while (i < a.length && j < b.length) {

            if (parseInt(a[i]) < parseInt(b[j])) {  //check for small number which insert first

                c[k] = a[i];
                k++; i++;
            }
            else {
                c[k] = b[j];
                k++; j++;
            }
        }

        while (i < a.length) {  //condition for inserting the remaining element of a array when b array is empty

            c[k] = a[i];
            k++; i++;
        }

        while (j < b.length) {  //condition for inserting the remaining element of b array when a array is empty

            c[k] = b[j];
            k++; j++;
        }

        return c;
    },

    sortingString: function (a, b, c) {     //for merge the above a1 and a2 arrays into c array

        var i = 0, j = 0, k = 0;

        while (i < a.length && j < b.length) {  //check for small number which insert first


            if ((a[i]) < (b[j])) {

                c[k] = a[i];
                k++; i++;
            }
            else {
                c[k] = b[j];
                k++; j++;
            }
        }

        while (i < a.length) {  //condition for inserting the remaining element of a array when b array is empty

            c[k] = a[i];
            k++; i++;
        }

        while (j < b.length) {  //condition for inserting the remaining element of b array when a array is empty


            c[k] = b[j];
            k++; j++;
        }

        return c;
    },

    daysofweek: function (d, m, y) {

        /**
         * @description : To get the day of a week of particular Date with date , month & year as input
         * @param {Number} d date 
         * @param {Number} m month
         * @param {Number} y year in 'YYYY' format
         */

         //formula to find day of week

        y0 = y - Math.round((14 - m) / 12);             
        x = (y0 + Math.round(y0 / 4) - Math.round(y0 / 100) + Math.round(y0 / 400));
        m0 = m + (12 *x* (Math.round(14 - m) / 12)) - 2;
        d0 = (d + x + Math.round((31 * m0) / 12)) % 7;

        return d0;
         
    },

    celsiusToF: function (temp) {

        /**
         * @description : To convert the Celsius Temperator into fahrenheit using formula
         * @param {Number} temp is temperature in celsius need to be converted
         */

        var fer = Math.floor((temp * 9 / 5) + 32); //formula

        return parseInt(fer);

    },

    fernToC: function (temp) {

        /**
         * @description : To convert the fahrenheit Temperator into Celsius using formula
         * @param {Number} temp is temperature in fahrenheit need to be converted
         */


        var cel = Math.floor((temp - 32) * 5 / 9); //formula

        return parseInt(cel);
    },

    monthlyPayment: function (p, y, r) {

        /**
         * @description : to calculate monthlyPayment that reads in three command­line arguments p, y, and r and
         *                 calculates the monthly payments you would have to make over y years to pay off a 
         *                 p principal loan amount at r per cent interest compounded monthly.
         * @param {Number} p is principle value
         * @param {Number} y is year (Time period)
         * @param {Number} r is rate
         */

        var a = 1 + (r / 100); // formula
        var b = Math.pow(a, (y));
        var payment = p * (b - 1);

        return payment;
    },

    squareRoot: function (num) {

        /**
         * @description : to compute the square root of a nonnegative number c given in the input using Newton's method
         * @param {Number} num is any number 
         */

        c = parseInt(num);

        var epsilon = 1e-15;
        var t = c;

        while (Math.abs(t - c / t) > epsilon * t) {     //condition
            t = (c / t + t) / 2.0;
        }
        return t;
    },

    toBinary: function (n) {

        /**
         * @description : To converting the Decimal Number into Binary Number using factorisation method
         * @param {Number} n any Number
         */

        var str = '';
        while (n > 1) {

            var a = parseInt(n % 2); //taking remainder of n
            n = Math.floor(n / 2);  //reducing the number n
            str += a;
        }
        str += 1;  //adding the last 1 in string form
        var s1 = '';

        var s = ((str.split('')).reverse()); //reverse the string to get the output
        for (var i = 0; i < s.length; i++) {
            s1 += s[i];
        }

        return s1;

    },

    toDecimal: function (n) {

        /**
         * @description : To converting the Binary Number into Decimal Number using sum of power of 2 method
         * @param {Number} n any Number
         */

        var s1 = '' + n;
        var str = (s1.split('')).reverse();
        var sum = 0;
        for (var i = 0; i < str.length; i++) {

            sum += Math.pow(2, i) * parseInt(str[i]); //multiply each number digit with power of 2 and add

        }

        return sum;
    },

    power : function(n){

        var pow = 0;
        while(n>1){
            if(n%2==0){
                pow++;
            }else {
                return -1;
            }
            n /= 2;
        }
        return pow;
    },

    vendingmachine: function (amount, mNote) {

        /**
         * @description : to calculate the minimum number of Notes as well as the Notes
         *                to be returned by the Vending Machine as a Change
         * @param {Number} ammount is any number
         * @param {Number} mNote is any number
         */

        if (amount == 0) return;            //checking is the amount is become or enter is zero or not


                                            
        if (amount >= 1000) {               //calculate 1000 rupess notes
            mNote += Math.floor(amount / 1000);
            console.log("1000 Rupes Notes is: " + Math.floor(amount / 1000));
            if (amount % 1000 == 0) {
                console.log("min note required:" + (mNote))
                return;
            }
            else
                this.vendingmachine(amount % 1000, mNote);      //recursion call
        }

        
        else if (amount >= 500) {           //calculate 500 rupess notes
            mNote += Math.floor(amount / 500);
            console.log("500 Rupes Notes is: " + Math.floor(amount / 500));
            if (amount % 500 == 0) {
                console.log("min note required:" + (mNote))
                return;
            }
            else {
                this.vendingmachine(amount % 500, mNote);       //recursion call
            }
        }

        
        else if (amount >= 100) {           //calculate 100 rupess notes
            mNote += Math.floor(amount / 100);
            console.log("100 Rupes Notes is: " + Math.floor(amount / 100));
            if (amount % 100 == 0) {
                console.log("min note required:" + (mNote))
                return;
            }
            else
                this.vendingmachine(amount % 100, mNote);       //recursion call
        }

        
        else if (amount >= 50) {            //calculate 50 rupess notes
            mNote += Math.floor(amount / 50);
            console.log("50 Rupes Notes is: " + Math.floor(amount / 50));
            if (amount % 50 == 0) {
                console.log("min note required:" + (mNote))
                return;
            }
            else
                this.vendingmachine(amount % 50, mNote);        //recursion call
        }

        
        else if (amount >= 10) {            //calculate 10 rupess notes
            mNote += Math.floor(amount / 10);
            console.log("10 Rupes Notes is: " + Math.floor(amount / 10));
            if (amount % 10 == 0) {

                console.log("min note required:" + (mNote))
                return;
            }
            else
                this.vendingmachine(amount % 10, mNote);        //recursion call
        }

        
        else if (amount >= 5) {         //calculate 5 rupess notes
            mNote += Math.floor(amount / 5);
            console.log("5 Rupes Notes is: " + Math.floor(amount / 5));
            if (amount % 5 == 0) {
                console.log("min note required:" + (mNote))
                return;
            }
            else
                this.vendingmachine(amount % 5, mNote);         //recursion call
        }

        
        else if (amount >= 2) {         //calculate 2 rupess notes
            mNote += Math.floor(amount / 2);
            console.log("2 Rupes Notes is: " + Math.floor(amount / 2));
            if (amount % 2 == 0) {
                console.log("min note required:" + (mNote));
                return;
            }
            else {
                this.vendingmachine(amount % 2, mNote);         //recursion call
            }
        }

        
        else if (amount >= 1) {         //calculate 1 rupess notes
            mNote += Math.floor(amount / 1);
            console.log("1 Rupes Notes is: " + Math.floor(amount / 1));
            if (amount % 1 == 0) {
                console.log("min note required:" + (mNote));        //printing
                return;
            }
            else
                this.vendingmachine(amount % 1, mNote);         //recursion call
        }

    },

    guessing: function (N, readlinesync) {

        /**
         * @description : to think of a number between 0 and N­-1, and always guesses the answer with n questions
         * @param {Number} N any Number as user input
         * @param {obj} readlinesync is the object of readline-sync module use for taking the user input
         */

        var arr = [];

        for (var i = 0; i < N; i++) {

            arr.push(i);               //pushing the each number from 0 to N-1 into arr array
        }
        console.log('' + arr);
        console.log(" ");

        var f = 0;                      //declaring first number (f) 
        var l = arr.length;             //declaring last number (l)


        while (l >= f) {                //while loop for get inside the Searching range

            var mid = Math.floor((f + l) / 2);      //declaring mid value as average of first and last
            console.log(`Is your Number is ${arr[mid]}. If Not then specify that it is More Than or Less Than ${(arr[mid])} `);
            console.log(`1: for More than ${(arr[mid])} `);
            console.log(`2: for Less than ${(arr[mid])} `);
            console.log(`3: equal to ${(arr[mid])} `)
            var ask = readlinesync.question("Enter 1, 2 or 3 : ");
            console.log(" ");
            if (!(isNaN(ask))) {                //checking for only number value should be enter
                switch (parseInt(ask)) {

                    case 1: f = mid + 1; break;     //if the number is m|| m == 2ore than mid number

                    case 2: l = mid - 1; break;     //if the number is less than mid number

                    case 3: console.log("The Number is " + arr[mid]); return;

                    default: console.log("Invalid Input!!!"); console.log(" "); break;

                }

            }

        }
    }

}