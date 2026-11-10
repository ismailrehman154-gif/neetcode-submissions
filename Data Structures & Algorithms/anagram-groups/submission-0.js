class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
// unlike the other anagram one, this has an array of strings, not just two strings
// i have to use the same solution style, but find a way to split,sort and join every element/item in the array,
//i can possibly use a for loop, and split the strs[i], but lets see
// oof, i also have to return a solution that has an array of arrays that contain seperate anaagrams for each word set that matches, and if it has no matches then that is 1 item in the array by itself
//it will always contain a string within an array, within a second array
//so i have to 
const res = {}
for(let i = 0; i < strs.length; i++){
    const sorted = strs[i].split('').sort().join('')
    if(!res[sorted]){
        res[sorted] = []
    }
    res[sorted].push(strs[i])
}
return Object.values(res)

    }
}
