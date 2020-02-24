//Produce a spiral array from n.

const spiralMatrix = n => {
    let top = 0;
    let left = 0;
    let bottom = n - 1;
    let right = n - 1;
    let matrix = Array(n)
        .fill(0)
        .map(num => Array(n).fill(0));
    let tally = 0;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = tally;
            tally++;
        }

        for (let i = top + 1; i <= bottom; i++) {
            matrix[i][right] = tally;
            tally++;
        }

        for (let i = right - 1; i >= left; i--) {
            matrix[bottom][i] = tally;
            tally++;
        }

        for (let i = bottom - 1; i > top; i--) {
            matrix[i][left] = tally;
            tally++;
        }

        left++;
        top++;
        right--;
        bottom--;
    }

    return matrix;
};

console.log(spiralMatrix(5));
