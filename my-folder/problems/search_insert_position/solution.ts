function searchInsert(nums: number[], target: number): number {
    let i = 0;
    
    for (i; i < nums.length; i++) {
        if (nums[i] === target || nums[i] > target) {
            return i;
        }
    }

    return i;
};