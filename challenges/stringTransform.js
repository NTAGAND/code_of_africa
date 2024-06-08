function transformString(str) {
    const length = str.length;
    
    if (length % 15 === 0) {
        // Length divisible by 15: reverse the string, then replace each character with its ASCII code
        const reversedStr = str.split('').reverse().join('');
        return reversedStr.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 5 === 0) {
        // Length divisible by 5: replace each character with its ASCII code
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // Length divisible by 3: reverse the string
        return str.split('').reverse().join('');
    } else {
        // None of the conditions met: return the string unchanged
        return str;
    }
}

// Example usage:
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
