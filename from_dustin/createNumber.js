/* 
Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:
Input: [10,2]
Output: "210"

Example 2:
Input: [3,30,34,5,9]
Output: "9534330"

Note: The result may be very large, so you need to return a string instead of an integer.

*/

var largestNumber = function(nums) {
    let noZeros = nums.filter(num => num !== 0)
    if ( noZeros.length === 0 ) {
        return "0"
    }
    
    nums.sort((a, b) => {
        let testA = `${a}${b}`
        let testB = `${b}${a}`
        
        if (Number(testA) > Number(testB)) {
            return 1
        }
        else {
            return -1
        }
    });
    
    return nums.reverse().join('');

    
};