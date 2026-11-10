class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        //PREP
    // if a single number appears more than once in an array (nums) then return true
    // tha parameter is an array, which we will loops through
    //the return is a boolean
    // english logic, if num[i] is repeated, then return true
    // if num[i] does not repeat a single time, then return false
    // maybe if num[i] is included in num more than once, return true
    // if not then return false
    for(let i = 0; i < nums.length; i++){
        let current = nums[i]
       for(let j = i + 1; j < nums.length; j++){
        let next = nums[j]
        if(current === next){
            return true
        }
       }

    
    }
    return false
}
}
