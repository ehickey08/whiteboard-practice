const wallPositions = [1, 2, 4, 7];
const wallHeights = [4, 6, 8, 11];

const damDesign = (wallPos, wallHeights) => {
    let previous = wallPos[wallPos.length - 1];
    for (let i = wallPos.length - 2; i >= 0; i--) {
        let current = wallPos[i];
        if (current === previous - 1) {
            previous = current;
            continue;
        } else {
            let maxMud = wallHeights[i];
            for (let i = current + 1; i < previous; i++) {
                maxMud++;
            }
            return maxMud;
        }
    }

    return 0;
};

console.log(damDesign(wallPositions, wallHeights));
