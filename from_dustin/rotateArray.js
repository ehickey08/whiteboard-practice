const leetCode = (nums, k) => {
    let rotations = 0
    let p1 = 0
    let p2 = 0
    
    while ( rotations < nums.length) {
        let currentValue = nums[p1]
        
        do {
            let targetIndex = (p1 + k) % nums.length
            temp = nums[targetIndex]
            nums[targetIndex] = currentValue
            currentValue = temp
            p1 = targetIndex
            rotations += 1
        } while ( p1 !== p2)
            
        p2 += 1
        p1 = p2
    }
}

let arr = [1,2,3,4,5,6]

leetCode(arr, 2)

console.log(arr)