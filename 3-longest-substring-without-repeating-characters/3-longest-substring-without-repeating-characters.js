/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let maxLength = 0
   let end= 0
   let start = 0
   if(!s) return 0
   //sliding window algorithm
   
   let uniquechar = new Set()
   while(end < s.length){
         if(!uniquechar.has(s[end])){
             uniquechar.add(s[end]);
             end++
             maxLength = Math.max(maxLength,uniquechar.size)
         }else{
             uniquechar.delete(s[start])
             start++
         }
   }
    return maxLength
};