const wallPositions = [1, 2, 4, 7];
const wallHeights = [4, 6, 8, 11];

const damDesign = (wallPos, wallHeights) => {
    let previous = wallPos[wallPos.length - 1];
    let maxMud = 0;
    for (let i = wallPos.length - 2; i >= 0; i--) {
        let current = wallPos[i];
        if (current === previous - 1) {
            previous = current;
            continue;
        } else {
            let localMax = buildMud(current, previous, wallHeights, i);

            if (localMax > maxMud) maxMud = localMax;
        }
    }

    return maxMud;
};

const buildMud = (current, previous, wallHeights,  i) => {
    let localMax;
    let prevHeight = wallHeights[i + 1];
    let currHeight = wallHeights[i];
    let totalGaps = previous - current;
    let neededSteps = prevHeight - currHeight;

    if (neededSteps > totalGaps) return 0;
    else if (neededSteps === totalGaps) localMax = prevHeight - 1;
    else localMax = Math.floor((totalGaps - neededSteps) / 2) + prevHeight;

    return localMax
};

console.log(damDesign(wallPositions, wallHeights));
