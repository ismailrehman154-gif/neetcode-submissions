class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        //set a buyppoint
        //set a max profit
        //loop through array, if the current value is less than the buypoint (initialized at the zero indice) then assign that current value to the buypoint
        //then assign a new variable called profit, it subtracts the loop number by the buy price, if the profit is greater than the max profit, it will reassign profit to maxproft, then you will return profit

        let buy = prices[0]
        let max = 0
        for(let i = 0; i < prices.length; i++){
            if(prices[i] < buy){
                buy = prices[i]
            }

            let profit = prices[i] - buy
            if( profit > max){
                max = profit
            }
        }
        return max
    }
}
