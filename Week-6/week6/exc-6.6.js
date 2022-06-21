// Problem 6.4 : Best time to buy and sell stock

/*  -6 4-2 3 -2
     ^ ^ ^ ^ ^
   [7,1,5,3,6,4]

price[i] > price[i-1] 
so to make good profit we will try to do as 
 i.e 1st day - rest , 2nd day-buy, 3rd -sell, 4th-buy, 5th- sell,  6th- rest.
 we don’t have any restrictions on the number of transactions
  So every time we will buy a stock at a minimum price and sell it at a maximum price.
*/


var maxProfit = function(prices) {
    let munafa = 0;
    
    for(let i  = 1; i<prices.length; i++) {
        if (prices [i]>prices[i-1]){
            munafa += prices[i]- prices[i-1]
        }
    }
    return munafa;
};

// output 7

// Time Complexity = O(n)
// Space Complexity = O(1)
