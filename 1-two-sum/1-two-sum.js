/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let start = 0
    let arr = []
    while(start < nums.length){
        for(let i=start + 1;i<=nums.length;i++){
            if(target == nums[i] + nums[start]){
                arr = [start , i]
            }
        }
        start++
    }
    return arr
};