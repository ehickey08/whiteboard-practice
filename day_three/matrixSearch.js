let matrix = [
    [1, 4, 7, 12, 15, 997, 999],
    [2, 5, 19, 32, 35, 1001, 1007],
    [4, 8, 24, 34, 36, 1008, 1015],
    [40, 41, 42, 44, 45, 1018, 1020],
    [98, 99, 101, 104, 190, 1021, 1025],
];

const matrixSearch = (matrix, target) => {
    let width = matrix[0].length;
    let height = matrix.length;
    let row = 0;
    while (true) {
        for (let col = 0; col < width; col++) {
            let testNum = matrix[row][col];
            if (testNum === target) return [row, col];
            if (testNum > target) break;
        }
        row++;
        if(row === height)
            break
    }

    return [-1, -1];
};

const binaryMatrixSearch = (matrix, target) => {
    let width = matrix[0].length;
    let height = matrix.length;
    let row = 0
    let col = width - 1
    while(row < height && col >= 0){
        let testNum = matrix[row][col]
        if(testNum === target)
            return[row, col]
        if(testNum < target)
            row++
        if(testNum > target)
            col--
    }
    return [-1, -1]
}

console.log(matrixSearch(matrix, 52));
console.log(matrixSearch(matrix, 45));

console.log(binaryMatrixSearch(matrix, 52));
console.log(binaryMatrixSearch(matrix, 45));

