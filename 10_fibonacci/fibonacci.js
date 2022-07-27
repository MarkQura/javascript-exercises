const fibonacci = function(index) {
    if (typeof(index) != "number") index = +index;
    if (index < 0) return "OOPS";

    let prev = 0;
    let current = 1;
    let temp;

    for (let i = 1; i < index; ++i) {
        temp = current;
        current += prev;
        prev = temp;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
