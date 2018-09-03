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

    anagram: function (str1, str2) {

        var s1 = str1.split('');
        var s2 = str2.split('');


        if (((s1.sort()).join()) === ((s2.sort()).join())) {

            console.log("It is an Anagram!!");
        } else { console.log("Not an Anagram!!"); }
    },

    primecheck: function () {

        // var count = 0;
        var arr = [];
        for (var i = 2; i <= 1000; i++) {

            //if(i===1){continue;}
            var flag = false;
            for (var j = 2; j <= i / 2; j++) {

                if (i % j === 0) {
                    flag = true;
                }

            }
            if (flag === false) {
                arr.push(i);
            }
        }
        return arr;
        // console.log("the total prime numbers are : "+count);
    },

    palindrom: function () {

        var arr = [];
        var count = 0;
        //arr.push(this.primecheck());
        for (var i = 0; i <= 1000; i++) {

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

        var arr1 = [];
        console.log("The Anagrams are : ");
        // console.log(arr.length-1);

        for (var i = 0; i <= arr.length - 1; i++) {
            for (var j = i + 1; j <= arr.length; j++) {
                var s1 = '' + parseInt(arr[i]);
                var s2 = '' + parseInt(arr[j]);
                if ((((s1.split('')).sort()).join()) === (((s2.split('')).sort()).join())) {

                    console.log(s1 + " and " + s2 + " are Anagram!!");
                    arr1.push(parseInt(s1));

                }


            }
        }


        console.log("The Pallendroms are : ");

        for (var i = 0; i < arr1.length; i++) {

            var sum = 0, r;
            //var a = new Array(arr);
            var temp = arr1[i];
            var show = arr1[i];

            // if(arr1[i]>10){
            while (arr1[i] > 0) {

                r = arr1[i] % 10;
                sum = (sum * 10) + r;
                arr1[i] = parseInt(arr1[i] / 10);
            }

            if (temp === sum) {
                console.log(show + " is Pallindrom!!");
            }

        }
    },

    binarySearchNumber: function (arr, first, last, num) {

        var mid = 0;
        if (!(isNaN(arr[0]))) {
            if (last >= first) {

                mid = Math.floor((last + first) / 2);

                if (arr[mid] == num) return (parseInt(mid));

                if (arr[mid] > num) {
                    return this.binarySearchNumber(arr, first, mid - 1, num);

                } else {
                    return this.binarySearchNumber(arr, mid + 1, last, num);
                }


            }
            return -1;
        }

    },

    binarySearchString: function (arr, first, last, string) {

        if (isNaN(arr[0])) {
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




    insertionSortNum: function (arr) {

        for (var i = 1; i < arr.length; i++) {
            var key = parseInt(arr[i]);
            var j = i - 1;

            while (j > -1 && parseInt(arr[j]) > key) {

                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key;
        }
        return arr;
    },

    insertionSortString: function (arr) {

        for (var i = 1; i < arr.length; i++) {
            var key = (arr[i]);
            var j = i - 1;

            while (j > -1 && (arr[j]) > key) {

                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key;
        }
        return arr;
    },

    bubbleSortNum: function (arr) {

        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {

                if (parseInt(arr[j]) > parseInt(arr[j + 1])) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    },

    bubbleSortString: function (arr) {

        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {

                if ((arr[j]) > (arr[j + 1])) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    },

    mergeSort: function (arr) {

        if (arr.length === 1) { return; }


        var m = Math.floor(arr.length / 2);
        var a1 = new Array(m);
        var a2 = new Array(arr.length - m);

        var i;

        for (var i = 0; i < a1.length; i++) {

            a1[i] = arr[i];
        }
        for (var j = 0; j < a2.length; j++ , i++) {

            a2[j] = arr[i];
        }

        this.mergeSort(a1);
        this.mergeSort(a2);

        if (isNaN(arr[0])) {
            this.sortingString(a1, a2, arr);
        } else {
            this.sortingNum(a1, a2, arr);
        }
        return arr;
    },

    sortingNum: function (a, b, c) {

        var i = 0, j = 0, k = 0;

        while (i < a.length && j < b.length) {

            if (parseInt(a[i]) < parseInt(b[j])) {

                c[k] = a[i];
                k++; i++;
            }
            else {
                c[k] = b[j];
                k++; j++;
            }
        }

        while (i < a.length) {

            c[k] = a[i];
            k++; i++;
        }

        while (j < b.length) {

            c[k] = b[j];
            k++; j++;
        }

        return c;
    },

    sortingString: function (a, b, c) {

        var i = 0, j = 0, k = 0;

        while (i < a.length && j < b.length) {

            if ((a[i]) < (b[j])) {

                c[k] = a[i];
                k++; i++;
            }
            else {
                c[k] = b[j];
                k++; j++;
            }
        }

        while (i < a.length) {

            c[k] = a[i];
            k++; i++;
        }

        while (j < b.length) {

            c[k] = b[j];
            k++; j++;
        }

        return c;
    },

    daysofweek: function (d, m, y) {

        y0 = (y - Math.floor((14 - m) / 12));
        x = Math.floor(y0 + y0 / 4 - y0 / 100 + y0 / 400);
        m0 = (m + 12 * Math.floor((14 - m) / 12) - 2);
        d0 = (d + x + 31 * Math.floor(m0 / 12)) % 7;

        return d0;
    },

    celsiusToF: function (temp) {

        var fer = Math.floor((temp * 9 / 5) + 32);

        return parseInt(fer);

    },

    fernToC: function (temp) {

        var cel = Math.floor((temp - 32) * 5 / 9);

        return parseInt(cel);
    },

    monthlyPayment: function (p, y, r) {

        var a = 1 + (r / 100);
        var b = Math.pow(a, (y));
        var payment = p * (b - 1);

        return payment;
    },

    squareRoot: function (num) {

        c = parseInt(num);

        var epsilon = 1e-15;
        var t = c;

        while (Math.abs(t - c / t) > epsilon * t) {
            t = (c / t + t) / 2.0;
        }
        return t;
    },

    toBinary: function (n) {

        var str = '';
        while (n > 1) {

            var a = parseInt(n % 2);
            n = Math.floor(n / 2);
            str += a;
        }
        str += 1;
        var s1 = '';

        var s = ((str.split('')).reverse());
        for (var i = 0; i < s.length; i++) {
            s1 += s[i];
        }
        // console.log(s);
        //var s2 = s1.join();
        // console.log(s1);
        // var s2 = (s1.split(",")).join();
        //console.log(s2);

        return s1;

    },

    toDecimal: function (n) {

        var s1 = '' + n;
        var str = (s1.split('')).reverse();
        var sum = 0;
        for (var i = 0; i < str.length; i++) {

            sum += Math.pow(2, i) * parseInt(str[i]);

        }

        return sum;
    },

    vendingmachine: function (amount, mNote) {

        if (amount == 0) return;


        //calculate 1000 rupess notes
        if (amount >= 1000) {
            mNote += Math.floor(amount / 1000);
            console.log("1000 Rupes Notes is: " + Math.floor(amount / 1000));
            if (amount % 1000 == 0) {
                console.log("min note required:" + (mNote))
                return;
            }
            else
                this.calculateMinNoNote(amount % 1000, mNote);
        }

        //calculate 500 rupess notes
        else if (amount >= 500) {
            mNote += Math.floor(amount / 500);
            console.log("500 Rupes Notes is: " + Math.floor(amount / 500));
            if (amount % 500 == 0) {
                console.log("min note required:" + (mNote))
                return;
            }
            else {
                this.calculateMinNoNote(amount % 500, mNote);
            }
        }

        //calculate 100 rupess notes
        else if (amount >= 100) {
            mNote += Math.floor(amount / 100);
            console.log("100 Rupes Notes is: " + Math.floor(amount / 100));
            if (amount % 100 == 0) {
                console.log("min note required:" + (mNote))
                return;
            }
            else
                this.calculateMinNoNote(amount % 100, mNote);
        }

        //calculate 50 rupess notes
        else if (amount >= 50) {
            mNote += Math.floor(amount / 50);
            console.log("50 Rupes Notes is: " + Math.floor(amount / 50));
            if (amount % 50 == 0) {
                console.log("min note required:" + (mNote))
                return;
            }
            else
                this.calculateMinNoNote(amount % 50, mNote);
        }

        //calculate 10 rupess notes
        else if (amount >= 10) {
            mNote += Math.floor(amount / 10);
            console.log("10 Rupes Notes is: " + (amount / 10));
            if (amount % 10 == 0) {

                console.log("min note required:" + (mNote))
                return;
            }
            else
                this.calculateMinNoNote(amount % 10, mNote);
        }

        //calculate 5 rupess notes
        else if (amount >= 5) {
            mNote += Math.floor(amount / 5);
            console.log("5 Rupes Notes is: " + Math.floor(amount / 5));
            if (amount % 5 == 0) {
                console.log("min note required:" + (mNote))
                return;
            }
            else
                this.calculateMinNoNote(amount % 5, mNote);
        }

        //calculate 2 rupess notes
        else if (amount >= 2) {
            mNote += Math.floor(amount / 2);
            console.log("2 Rupes Notes is: " + Math.floor(amount / 2));
            if (amount % 2 == 0) {
                console.log("min note required:" + (mNote));
                return;
            }
            else {
                this.calculateMinNoNote(amount % 2, mNote);
            }
        }

        //calculate 1 rupess notes
        else if (amount >= 1) {
            mNote += Math.floor(amount / 1);
            console.log("1 Rupes Notes is: " + Math.floor(amount / 1));
            if (amount % 1 == 0) {
                console.log("min note required:" + (mNote));
                return;
            }
            else
                this.calculateMinNoNote(amount % 1, mNote);
        }

    },

    guessing: function (N, readlinesync) {

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

                    case 1: f = mid + 1; break;     //if the number is more than mid number

                    case 2: l = mid - 1; break;     //if the 

                    case 3: console.log("The Number is " + arr[mid]); return;

                    default: console.log("Invalid Input!!!"); console.log(" "); break;

                }

            }

        }
    }

}