class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // string of bracket characters
        // return is a boolean
        // if the bracket is opened and closed in the proper locations then return t
        // check if the string contains each pair, if it does then remove it
        //once removed return the string, if it is empty then it is true, because
        //each full pair was removed, it would only not replace the pair if the pair 
        //is incomplete

        while(s.includes('()') || s.includes('{}') || s.includes('[]')){
            s = s.replace('()', '')
            s = s.replace('{}', '')
            s = s.replace('[]', '')
        }
        return s === ''
    }
}
