/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let total = 0;
    nums.reduce((total, num, i) => {
        nums[i] = total + num;
        return total + num;
    });
    
    return nums;
};