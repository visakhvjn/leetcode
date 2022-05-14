/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let xString = x.toString();
    return xString === xString.split("").reverse().join("");
};