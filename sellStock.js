// const prices = [7,1,5,3,6,4]
// const pricesTwo = [7,6,4,3,1]

// const maxProfit = (prices) => {
//     let minPrice = prices[0]
//     let maxProfit = 0;

//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] < minPrice) {
//             minPrice = prices[i]
//         } else {
//             const potentialProfit = prices[i] - minPrice;
//             maxProfit = Math.max(maxProfit, potentialProfit)
//         }
//     }
//     return maxProfit
// }


// const result = maxProfit(pricesTwo)
// console.log(result);











// var maxProfit = function(prices) {
//     let maxval = 0;
//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i+1; j < prices.length; j++) {
//             maxval = Math.max(maxval, prices[j] - prices[i])
//         }
//     }
//     return maxval
// };

// const result = maxProfit(prices)
// console.log(result);



const prices = [7,1,5,3,6,4];

const buySell = (prices) => {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i+1]) {
            potential = prices[i+1] - prices[i]
            maxProfit += potential
        }
    }
    return maxProfit;
}

const result = buySell(prices) 
console.log(result);