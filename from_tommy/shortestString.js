const findBag = (coins) => {
    let uniqueLettersLength = new Set(coins.split('')).size
    let smallestSubString = Number.POSITIVE_INFINITY
    for(let i = 0; i <= coins.length - uniqueLettersLength; i++){
        for(let end = i + uniqueLettersLength; end <= i + smallestSubString; end++){
            let testBag = coins.substring(i, end)
            let testBagUnique = new Set(testBag)
            if(testBagUnique.size === uniqueLettersLength){
                smallestSubString = Math.min(smallestSubString, testBag.length)
                break
            }
        }
    }

    return smallestSubString
}

let testOne = "dabbcabcd"

console.log(findBag(testOne))