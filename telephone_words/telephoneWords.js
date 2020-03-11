//limit of 4 digits
const digitsToLetters = {
    0: '0',
    1: '1',
    2: 'ABC',
    3: 'DEF',
    4: 'GHI',
    5: 'JKL',
    6: 'MNO',
    7: 'PQRS',
    8: 'TUV',
    9: 'WXYZ'
  }

const telephoneWords = digits => {
    let digitQueue = digits.toString().split('')
    let options = []

    while(digitQueue.length > 0){
        let newDigit = digitQueue.shift()
        let newDigitOptions = digitsToLetters[newDigit]
        if()
    }

    return options
}

//['AP', 'AQ', 'AR', 'AS', 'BP', 'BQ', 'BR', 'BS', 'CP', 'CQ', 'CR', 'CS']
console.log(telephoneWords(27))