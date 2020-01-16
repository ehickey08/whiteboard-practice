
let queries = [(1,1), (2,2), (3,2), (1,1), (1,1), (2,1), (3,2)]

const updateOld = (numbers, value, frequencies) => {
    let currFreq = numbers[value]
    if(currFreq in frequencies)
        frequencies[currFreq].delete(value)
    else
        frequencies[currFreq] = new Set()
}

const updateNew = (numbers, value, frequencies) => {
    let newFreq = numbers[value]
                if(newFreq in frequencies)
                    frequencies[newFreq].add(value)
                else
                    frequencies[newFreq] = new Set(value)
}

const freqQuery = queries => {
    let numbers = {}
    let frequencies = {}
    let results = []
    for(let query of queries){
        let type = query[0]
        let value = query[1]
        switch(type){
            case 1:
                updateOld(numbers, value, frequencies)
                
                numbers[value] = (numbers[value] || 0) + 1

                updateNew(numbers, value, frequencies)
                
                break
            case 2:
                let currFreq = numbers[value]
                if(currFreq in frequencies)
                    frequencies[currFreq].delete(value)
                else
                    frequencies[currFreq] = new Set()

                numbers[value] = Math.max(numbers[value] || 1) - 1

                let newFreq = numbers[value]
                if(newFreq in frequencies)
                    frequencies[newFreq].add(value)
                else
                    frequencies[newFreq] = new Set(value)
                break
            case 3:
                if(value in frequencies && frequencies[value].size > 0)
                    results.push(1)

        }
    }
    return results
}


console.log(freqQuery(queries))