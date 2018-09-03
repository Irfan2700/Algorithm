var readlinesync = require('readline-sync');

function atm(){

    var amount = readlinesync.question("Enter the amount : ");
    //var denominations = readlinnsync.question("Enter the value of  you Want : ");

    var arr = [1,2,5,10,50,100,500,1000];
    var result = change(arr,amount,arr.length-1,0);

    console.log(result);

}

function change(arr, amount, index, numCoins) {
    
    if (amount == 0)
        {
            return numCoins;
        }
        if (amount < arr[0])
        {
            return -1;
        }
        if (amount >= arr[index])
        {
            if(amount)
            var tempCoins = parseInt(amount / arr[index]);
            var tempAmount = amount - (tempCoins * arr[index]);
            if (tempAmount == 0 || tempAmount >= arr[0])
            {
                amount = tempAmount;
                numCoins += tempCoins;
            }
        }
        index--;

        return change(arr, amount, index, numCoins);
    
}
atm();