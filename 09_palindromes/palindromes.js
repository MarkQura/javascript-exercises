const palindromes = function (str) {
    
    str = str.toLowerCase();
    str = Array.from(str).filter((char) => (("a" <= char && char <= "z"))).join("");

    let reverse = str.split("").reverse().join("");
    return reverse == str
};

// Do not edit below this line
module.exports = palindromes;
