const checkForSquare = (matrix, row, col, height, width) => {
    let squareSide = 1;
    let isSquare = true;

    while (isSquare) {
        if (row === 0 && col === 9 && squareSide === 3) console.log(row, col);
        for (let i = 0; i <= squareSide; i += 1) {
            if (row + i >= height || col + squareSide >= width) {
                isSquare = false;
                break;
            }
            if (matrix[row + i][col + squareSide] === '0') {
                isSquare = false;
                break;
            }
        }

        for (let j = 0; j <= squareSide; j += 1) {
            if (row + j >= height) {
                isSquare = false;
                break;
            }
            if (matrix[row + j][col] === '0') {
                isSquare = false;
                break;
            }
        }

        for (let k = 1; k < squareSide; k += 1) {
            if (row + squareSide >= height || col + k >= width) {
                isSquare = false;
                break;
            }
            if (matrix[row + squareSide][col + k] === '0') {
                isSquare = false;
                break;
            }
        }

        if (isSquare) {
            squareSide += 1;
        }
    }

    let squareArea = squareSide * squareSide;
    return squareArea;
};

var maximalSquare = function(matrix) {
    if (matrix.length === 0) {
        return 0;
    }
    let largestSquare = 0;
    let height = matrix.length;
    let width = matrix[0].length;
    for (let i = 0; i < height; i += 1) {
        for (let j = 0; j < width; j += 1) {
            if (matrix[i][j] === '1') {
                let localSquare = checkForSquare(matrix, i, j, height, width);
                if (localSquare > largestSquare) {
                    largestSquare = localSquare;
                }
            }
        }
    }

    return largestSquare;
};

const testArr = [
    ['1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', '0', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['0', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '0', '1', '1', '1'],
    ['1', '0', '0', '1', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '0', '0', '0', '1', '1', '1', '1', '1', '0', '1', '0'],
    ['1', '0', '1', '1', '0', '0', '0', '1', '1', '1', '1', '0', '1', '0', '1'],
    ['1', '0', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '0', '1', '1'],
    ['1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '0', '0', '0', '1', '0', '1', '1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '1', '1', '1', '0', '1'],
];

const edgeCase = [['1']];

console.log(maximalSquare(testArr));
