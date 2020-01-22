let arr = [
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 0],
];

const riverSizes = arr => {
    let width = arr[0].length;
    let height = arr.length;
    let visited = Array(height)
        .fill(false)
        .map(row => Array(width).fill(false));
    let rivers = [];
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (arr[y][x]) {
                let results = traverse(visited, arr, y, x);
                visited = results[1];
                if(results[0])
                    rivers.push(results[0]);
            }
        }
    }

    return rivers;
};

const traverse = (visited, arr, y, x) => {
    let length = 0;
    let stack = [];
    stack.push([y, x]);
    while (stack.length > 0) {
        let [coordY, coordX] = stack.pop();
        if (!visited[coordY][coordX]) {
            visited[coordY][coordX] = true;
            if (arr[coordY][coordX]) {
                length++;
                let neighbors = getNeighbors(arr, coordY, coordX);
                for (let neighbor of neighbors) stack.push(neighbor);
            }
        }
    }
    return [length, visited];
};

const getNeighbors = (arr, y, x) => {
    let neighbors = [];
    let width = arr[0].length;
    let height = arr.length;

    if (x > 0) neighbors.push([y, x - 1]);
    if (x < width) neighbors.push([y, x + 1]);
    if (y > 0) neighbors.push([y - 1, x]);
    if (y < height - 1) neighbors.push([y + 1, x]);
    
    return neighbors;
};

console.log(riverSizes(arr));
