var groupAnagrams = function(strs) {        
    // test for anagrams of two words:
    // word = 'eat' => sorted = 'aet' ['e', 'a', 't'] => ['a', 'e', 't'] => 'aet'
    // word2 = 'tea' => sorted = 'aet'
    // word.split('').sort().join('') => will cause time complexity O(nklogk) where k is the length of the word
    // ^^ this sorted word will be my key
    // value will be an array of words that give that key
    
    let hashTable = {}
    
    for ( let word of strs ) {
        let sortedWord = word.split('').sort().join('')
        if ( sortedWord in hashTable ) {
            hashTable[sortedWord].push(word)
        }
        else {
            hashTable[sortedWord] = [word]
        }
    }
    
    let results = []
    
    for (let key in hashTable) {
        results.push(hashTable[key])
    }
    
    return results
};