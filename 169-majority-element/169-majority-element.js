/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) { 
          let count = {};
         for(let n of nums) {
              count[n] ? count[n]++ : count[n] = 1;
             if(count[n] > nums.length / 2 ) return n;
          }
        return -1;
};

majorityElement([3,2,3])

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2