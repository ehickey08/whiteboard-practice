const countLetters = s => {
    let letterCount = {}

    for(let char of s){
        letterCount[char] = (letterCount[char] || 0)  + 1
    }

    return letterCount
}

const anagram = s => {
    if (s.length % 2) return -1;
    else {
        changes = 0;
        midpoint = s.length / 2;
        first_half = countLetters(s.slice(0, midpoint))
        second_half = countLetters(s.slice(midpoint))
        
        for(let char in first_half){
            if(char in second_half){
                changes += Math.max(first_half[char] - second_half[char], 0)
            }
            else
                changes += first_half[char]
        }

        console.log(changes)
        return changes;
    }
};

const sentences = [
    'hhpddlnnsjfoyxpciioigvjqzfbpllssuj',
    'xulkowreuowzxgnhmiqekxhzistdocbnyozmnqthhpievvlj',
    'dnqaurlplofnrtmh',
    'aujteqimwfkjoqodgqaxbrkrwykpmuimqtgulojjwtukjiqrasqejbvfbixnchzsahpnyayutsgecwvcqngzoehrmeeqlgknnb',
    'lbafwuoawkxydlfcbjjtxpzpchzrvbtievqbpedlqbktorypcjkzzkodrpvosqzxmpad',
    'drngbjuuhmwqwxrinxccsqxkpwygwcdbtriwaesjsobrntzaqbe',
    'ubulzt',
    'vxxzsqjqsnibgydzlyynqcrayvwjurfsqfrivayopgrxewwruvemzy',
    'xtnipeqhxvafqaggqoanvwkmthtfirwhmjrbphlmeluvoa',
    'gqdvlchavotcykafyjzbbgmnlajiqlnwctrnvznspiwquxxsiwuldizqkkaawpyyisnftdzklwagv',
];

sentences.forEach(sentence => anagram(sentence))

