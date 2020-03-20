var numberToWords = function(num) {
    let standard = {
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine',
    };

    let tens = {
        2: 'Twenty',
        3: 'Thirty',
        4: 'Forty',
        5: 'Fifty',
        6: 'Sixty',
        7: 'Seventy',
        8: 'Eighty',
        9: 'Ninety',
    };

    let teens = {
        10: 'Ten',
        11: 'Eleven',
        12: 'Twelve',
        13: 'Thirteen',
        14: 'Fourteen',
        15: 'Fifteen',
        16: 'Sixteen',
        17: 'Seventeen',
        18: 'Eighteen',
        19: 'Nineteen',
    };

    const digitToWords = n => {
        let modulo = 100;
        let place = 1;
        let answer = '';

        while (n > 0) {
            if (n % modulo !== n) {
                let digit = Math.floor(n / modulo);
                let digitWord = standard[digit];
                if (place === 2) {
                    if (digit === 1) {
                        digitWord = teens[n];
                        n = 0;
                    } else {
                        digitWord = tens[digit];
                    }
                }

                answer += `${digitWord} `;

                if (place === 1) {
                    answer += 'Hundred ';
                }

                n %= modulo;
            }

            place += 1;
            modulo /= 10;
        }

        return answer;
    };

    const segmentDigits = n => {
        let digitStr = n.toString();
        let splitEnd = digitStr.length;
        let splitStart = Math.max(0, digitStr.length - 3);
        let segments = [];

        while (splitEnd > 0) {
            let digitSegment = digitStr.slice(splitStart, splitEnd);
            segments.push(Number(digitSegment));
            splitEnd = splitStart;
            splitStart = Math.max(0, splitStart - 3);
        }

        return segments;
    };

    let digitSegments = segmentDigits(num);

    let wordSegments = digitSegments.map(num => digitToWords(num));

    let placeHolders = ['', 'Thousand', 'Million', 'Billion'];

    let fullSegments = wordSegments.map((seg, i) => {
        if (seg.length > 0) {
            return `${seg}${placeHolders[i]} `;
        }
        else {
            return seg
        }
    });

    return fullSegments.reverse().join('');
};

console.log(numberToWords(1034534));
