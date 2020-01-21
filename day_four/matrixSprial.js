const matrixSpiral = arr => {
    let top = left = 0
    let right = arr[0].length - 1
    let bottom = arr.length - 1
    let result = []

    while(left <= right && top <= bottom){
        for(let i = left; i < right; i++){
            result.push(arr[top][i])
        }

        for(let i = top; i < bottom; i++){
            result.push(arr[i][right])
        }

        for(let i = right; i > left; i--){
            result.push(arr[bottom][i])
        }

        for(let i = bottom; i > top; i--){
            result.push(arr[i][left])
        }
        left++
        right--
        top++
        bottom--
    }

    return result
};

let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
];

console.log(matrixSpiral(arr))
