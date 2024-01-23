const prices = [7,1,5,3,6,4];

var maxProfit = function(prices) {
    let lowest = prices[0]; // 7

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < lowest) {
            lowest = prices[i]
        }
    }
    // return lowest
};

const result = maxProfit(prices)
console.log(result);