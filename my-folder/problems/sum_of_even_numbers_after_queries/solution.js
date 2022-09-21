/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
  
    const outPutArray = [];
    
    for (const query of queries) {
        nums[query[1]] += query[0];
        outPutArray.push(sumEvenNumbers(nums));
    }
    
    return outPutArray;
};

var sumEvenNumbers = (nums) => {
    
    return nums.reduce((total, num) => {
        return num % 2 === 0 ? total + num : total;
    }, 0);    
}