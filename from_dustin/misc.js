/*
Given an array nums of integers, 
return how many of them contain an even number of digits.
Example 1:
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation:
12 contains 2 digits (even number of digits).
345 contains 3 digits (odd number of digits).
2 contains 1 digit (odd number of digits).
6 contains 1 digit (odd number of digits).
7896 contains 4 digits (even number of digits).
Therefore only 12 and 7896 contain an even number of digits.
Example 2:
Input: nums = [555,901,482,1771]
Output: 1
Explanation:
Only 1771 contains an even number of digits.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    const countDigits = num => {
        count = 0
        while (num >= 1){
            num /= 10
            count += 1
        }

        return count % 2 === 0
    }

    let evenDigits = nums.filter(num => countDigits(num))
    console.log(evenDigits)
    return evenDigits.length
};
console.log(findNumbers([12, 345, 2, 607, 7896, 80718]));

/*
Given the array nums, for each nums[i] find out how many numbers 
in the array are smaller than it. That is, for each nums[i] you 
have to count the number of valid j's such that j != i and nums[j] < nums[i].
Return the answer in an array.
Example 1:
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation:
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1).
For nums[3]=2 there exist one smaller number than it (1).
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
Example 2:
Input: nums = [6,5,4,8]
Output: [2,1,0,3]
Example 3:
Input: nums = [7,7,7,7]
Output: [0,0,0,0]
*/
/**
* @param {number[]} nums
* @return {number[]}
*/
var smallerNumbersThanCurrent = function (nums) {
    let numTracker = {}
    let numsCopy = [...nums]
    numsCopy.sort((a,b) => a - b)
    numsCopy.forEach((num, i) => {
        let counter = i
        while (counter !== 0 && numsCopy[counter - 1] === num){
            counter -= 1
        }
        numTracker[num] = counter
    })
    
    return nums.map(num => numTracker[num])
};
console.log(smallerNumbersThanCurrent([8,2,1,0,5,10]));

/**
* @param {number} num
* @return {number}
*/
var numberOfSteps = function (num) {
  let steps = 0;
  return steps;
};
// console.log(numberOfSteps(14));
// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom
/*
// Given a string S, remove the vowels 'a', 'e', 'i', 'o', 
// and 'u' from it, and return the new string.
// ## Example 1:
// Input: "loremipsumdolorsitamet,consectetur"
// Output: "lrmpsmdlrstmt,cnscttr"
// ## Example 2:
// Input: "aeiou"
// Output: ""
// */
/**
* @param {string} S
* @return {string}
*/
var removeVowels = function (S) {
    let vowels = new Set('aeiou')
    return S.split('').filter(letter => !vowels.has(letter)).join('')
};
console.log(removeVowels("loremipsumdolorsitamet,consectetur"));