var maxProfit = function(prices) {
    let munafa = 0;
    
    for(let i  = 0; i<prices.length; i++) {
        if (prices [i]>prices[i-1]){
            munafa += prices[i]- prices[i-1]
        }
    }
    return munafa;
};

//TC O(n)
//sc O(1)
