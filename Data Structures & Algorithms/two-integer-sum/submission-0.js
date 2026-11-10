class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // two seperate params again, similar pattern as the last couple solutions
        //check if num[i] + num[j] === target
        //nested for loops is a pain for the time complexity but i think i can use it
        // return is the index placement, so no need to return the value of i & j
        // i can just return i & j because it represents the indice

        for(let i = 0; i < nums.length; i++){
            for(let j = i + 1; j < nums.length; j++){

                if (nums[i] + nums[j] === target){
                    return [i, j]
                }
            }
        }
    }
}
