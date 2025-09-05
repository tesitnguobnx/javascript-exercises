const fibonacci = function(num) {
    let a = 0;
    let b = 1;
    if (num < 0) {
        return "OOPS"
    }
    for(let i = 0; i < num; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return a
};

// Do not edit below this line
module.exports = fibonacci;
