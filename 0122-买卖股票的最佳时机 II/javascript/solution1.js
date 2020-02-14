/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let peak = prices[0]
  let valley = prices[0]
  let profit = 0
  let i = 0

  while (i < prices.length - 1) {
    // 找谷底：当前天比后一天低则为谷底
    while(i < prices.length - 1 && prices[i] >= prices[i + 1]) {
      i++
    }
    valley = prices[i]
    // 找谷峰：当前天比后一天高则为谷峰
    while(i < prices.length - 1 && prices[i] <= prices[i + 1]) {
      i++
    }
    peak = prices[i]
    profit += peak - valley
  }
  
  return profit
};

module.exports = maxProfit
