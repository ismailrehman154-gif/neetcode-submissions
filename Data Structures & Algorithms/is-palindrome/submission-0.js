class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        // a string, will split, reverse and join
        // return true if it is a palindrome false if not
        //filter alphanumerical values when reversing
        let clean = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        let reverse = clean.split('').reverse().join('')
        console.log(clean, reverse)
        if(clean === reverse){
            return true
        }else{
            return false
        }
    
    }
}
