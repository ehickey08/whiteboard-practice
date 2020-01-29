const sampleInput = [1,2,3,4,1,13,3] // [13,3,2,1,1,1,1]
const sampleInputTwo = [2, 6, 1, 12] //12, 2, 1, 1

function riddle(arr) {
    let maximums = []
    let largestWindow = arr.length
    let windowSize = 1
    
    while (windowSize <= largestWindow) {
        let storage = arr.slice(0, windowSize)
        let minimum = Math.min(...storage)
        let maximum = minimum

        for(let i = windowSize; i < arr.length; i++){
            let newValue = arr[i]
            let oldValue = storage.shift()
            storage.push(newValue)
            
            if(oldValue === minimum)
                minimum = Math.min(...storage)
            else
                minimum = newValue < minimum ? newValue : minimum
            

            if(minimum > maximum)
                maximum = minimum

        }
        
        maximums.push(maximum)
        windowSize++
    }

    return maximums
}

console.log(riddle(sampleInput))