var countAndSay = function(n) {
    if ( n === 1 ) {
        return "1"
    }
    
    else {
        let smallerString = countAndSay(n-1)
        
        let count = 1
        let prevChar = smallerString[0]
        let newString = ""
        
        for ( let i = 1; i < smallerString.length; i += 1 ) {
            let currChar = smallerString[i]
            
            if ( prevChar === currChar ) {
                count += 1
            }
            
            else {
                newString += `${count}${prevChar}`
                count = 1
                prevChar = currChar
            }
        }
        
        newString += `${count}${prevChar}`
        
        return newString
   
    }
};

countAndSay(4)