/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr = []
    let sum = 0;
    
    for(let el of nums){
        sum = sum + el
        arr.push(sum)
    }
    return arr
};