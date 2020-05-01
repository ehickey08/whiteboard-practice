/*
Print out all of the strings in the following array that represent a number divisible by 3:

[
  "five",
  "twenty six",
  "nine hundred ninety nine,
  "twelve",
  "eighteen",
  "one hundred one",
  "fifty two",
  "forty one",
  "seventy seven",
  "six",
  "twelve",
  "four",
  "sixteen"
]
The expected output for the above input is:

nine hundred ninety nine
twelve
eighteen
six
twelve
*/

const stringtoInt = str => {
    //  
}

const divisibleByThree = arr => {
    // convert strings into numbers in order to perform mathematical operations
    let nums = arr.map(num => stringToInt(arr))
    // test each number to see if divisible by 3
    let results = nums.filter(num => num % 3 === 0)
    return results
}






//test