class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //PREP
        //two different strings, checking if each has exactly the same number, of letters and that all those letters match
        //if the letters match return a boolean true
        //thinking this through, i would have to split each string and check if each letter is matching, but if we just make it === one another, itll return false even if the letters match, because the words dont.
        //can sort and rearrange each one alphabetticaly so that itll be exactly the same and then you can check if it matches

        //split each string
        let Split = s.split('')
        let spliT = t.split('')
        // console.log(Split, spliT)
        // now we rearrange the array we received and will later join it
        let Sort = Split.sort()
        let sorT = spliT.sort()
        // console.log(Sort, sorT)
        // now we join them and check if they match
        let joinS = Sort.join('')
        let joinT = sorT.join('')
        // console.log(joinS, joinT)
        //now we work out our conditional
        if(joinS === joinT){
            return true
        }else{
            return false
        }
    }
}
