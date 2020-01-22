let arr = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
];

let arr2 = [
    [1, 1],
    [1, 0],
];

const riverSizes = arr => {
    let width = arr[0].length;
    let height = arr.length;
    let rivers = [];
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (arr[y][x]) {
                let river = traverse(arr, y, x);
                rivers.push(river);
            }
        }
    }

    return rivers;
};

const traverse = (arr, y, x) => {
    let length = 0;
    let stack = [];
    stack.push([y, x]);
    while (stack.length > 0) {
        let [coordY, coordX] = stack.pop();
        if (arr[coordY][coordX]) {
            length++;
            let neighbors = getNeighbors(arr, coordY, coordX);
            for (let neighbor of neighbors) stack.push(neighbor);
            arr[coordY][coordX] = 0;
        }
    }
    return length;
};

const getNeighbors = (arr, y, x) => {
    let neighbors = [];
    let width = arr[0].length;
    let height = arr.length;

    if (x < width - 1) neighbors.push([y, x + 1]);
    if (y < height - 1) neighbors.push([y + 1, x]);

    return neighbors;
};

console.log(riverSizes(arr));
console.log(riverSizes(arr2));
