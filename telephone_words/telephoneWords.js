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
    let digitString = digits.toString().split('')
    let firstDigit = digitString[0]
    let firstDigitOptions = digitsToLetters[firstDigit].split('')

    let options = []
    let stack = []
    firstDigitOptions.forEach(letter => stack.push(letter))
    
    while(stack.length > 0){
        let currentCombo = stack.pop()

        if (currentCombo.length === digits.toString().length){
            options.push(currentCombo)
        }
        else{
            let nextDigit = digitString[currentCombo.length]
            let nextOptions = digitsToLetters[nextDigit].split('')
            nextOptions.forEach(letter => {
                stack.push(`${currentCombo}${letter}`)
            })
        }
    }


    return options.sort()
}

//['AP', 'AQ', 'AR', 'AS', 'BP', 'BQ', 'BR', 'BS', 'CP', 'CQ', 'CR', 'CS']
console.log(telephoneWords(237))