let shifted = [19, 27, 28, 33, 39, 41, 46, 49, 2, 5, 6, 10, 13, 14, 15, 17] 
let sorted = [2, 5, 6, 10, 13, 14, 15, 17, 19, 27, 28, 33, 39, 41, 46, 49 ]
let target = 33

const binary_search = (arr, target) => {
    let low = 0
    let high = arr.length - 1
    let firstVal = arr[0]

    while(low <= high){
        let middle = Math.floor((low + high) / 2)
        let testNum = arr[middle]
        if(testNum === target)
            return middle
        else if(testNum > target && target > firstVal){
            high = middle - 1
        }
        else
            low = middle + 1
    }
}

console.log(binary_search(shifted, target))