/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
//    let countI = Math.floor(nums.length/2)
   
//    let sum1 = 0;
//     let sum2 = 0;
//    for(let i=0;i< countI;i++){
//        sum1 = sum1 + nums[i]
//    }
//     for(let i=countI + 1 ; i< nums.length;i++){
//        sum2 = sum2 + nums[i]
//    }
//    if(sum1 == sum2) {return countI}
//     else return -1
     let sum = nums.reduce((a, c, i, nums) => (a += nums[i]));
  let left = 0,
    right = 0;
  for (let i = 0; i < nums.length; i++) {
    right = sum - left - nums[i];
    if (left === right) return i;
    left += nums[i];
  }
  return -1;
};