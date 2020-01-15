let shifted = [33, 39, 41, 46, 49, 2, 5, 6, 10, 13, 14, 15, 17, 19, 27, 28];

let shiftedTwo = [13, 14, 15, 17, 19, 27, 28, 33, 39, 41, 46, 49, 2, 5, 6, 10];

let sorted = [2, 5, 6, 10, 13, 14, 15, 17, 19, 27, 28, 33, 39, 41, 46, 49];

const binary_search = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let firstVal = arr[low];
        let lastVal = arr[high];
        let middleIndex = Math.floor((low + high) / 2);
        let middleNum = arr[middleIndex];
        if (middleNum === target) return middleIndex;
        else if (target < middleNum) {
            if (target <= lastVal && lastVal < middleNum) 
                low = middleIndex + 1;
            else 
                high = middleIndex - 1;
        } else if (target > middleNum) {
            if (target >= firstVal && firstVal > middleNum)
                high = middleIndex - 1;
            else 
                low = middleIndex + 1;
        }
    }
};


sorted.forEach(num => console.log(num, binary_search(shifted, num)));
