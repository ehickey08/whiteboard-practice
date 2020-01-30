const input = [
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
    'veronica',
    'mary',
    'alex',
    'mary',
];

const countVotes = votes => {
    let count = {};
    for (let vote of votes)
        count[vote] = (count[vote] || 0) + 1;

    let voteTotals = Object.entries(count);
    voteTotals.sort((a, b) =>
        a[1] !== b[1] ? b[1] - a[1] : a[0] - b[0] ? 1 : -1
    );
    return voteTotals[0][0];
};

const countVotesTwo = names => {
    const votes = {};
    let mostVotes = 0;
    let winner = '';
    names.forEach(name => {
        if (!votes[name]) votes[name] = 0;
        votes[name]++;
        if (votes[name] > mostVotes) {
            winner = name;
            mostVotes = votes[name];
        } else if (votes[name] === mostVotes) {
            if (name > winner) winner = name;
        }
    });
    return winner;
};

function countVotesThree(names) {
    const votes = {};
    const winners = [];
    names.forEach(name =>
        votes[name] ? (votes[name] += 1) : (votes[name] = 1)
    );

    let values = Object.values(votes);
    let max = Math.max(...values);

    keys = Object.keys(votes);
    keys.forEach(key => {
        if (votes[key] === max) {
            winners.push(key);
        }
    });

    winners.sort();
    return winners[winners.length - 1];
}

let trials = 1000000
console.time('ethan code');
for (let i = 0; i < trials; i++) {
    countVotes(input);
}
console.timeEnd('ethan code');

console.time('TL code');
for (let i = 0; i < trials; i++) {
    countVotesTwo(input);
}
console.timeEnd('TL code');

console.time('may code');
for (let i = 0; i < trials; i++) {
    countVotesThree(input);
}
console.timeEnd('may code');


console.log(input.length)