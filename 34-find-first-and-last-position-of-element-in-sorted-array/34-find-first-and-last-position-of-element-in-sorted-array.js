/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start=0
    let arr =[]
    if(nums.length == 0) return [-1,-1]
  for(let i = 0;i<nums.length;i++){
        if(nums[i] == target){
            if(arr.length == 0){
                 arr[0] = i
            }else{
                arr[1] = i
            }
           }
        }
    if(arr.length == 0){
         arr[0] = -1
         arr[1] = -1
    }
    if(arr.length == 1){
        arr[1] = arr[0]
    }
    
    return arr
};