/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    let romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    const length = s.length;
    let sum = 0;
    
    for (let i = 0; i < length; i++) {
        
        if (i == length - 1) {
            sum += romanToIntMap[s[i]];
        } else if (romanToIntMap[s[i]] < romanToIntMap[s[i+1]]) {
            sum += romanToIntMap[s[i+1]] - romanToIntMap[s[i]];
            i++;
        } else {
            sum += romanToIntMap[s[i]];
        }
    }
    
    return sum;
};