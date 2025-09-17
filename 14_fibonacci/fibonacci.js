const fibonacci = function(fibo) {
    let a = 0;
    let b = 1;
    if (parseInt(fibo) === 0){
        return 0;
    }
    if (parseInt(fibo) === 1){
        return 1;
    }
    if (fibo < 0){
        return "OOPS"
    }
    for(let i = 1; i < fibo; i++){
        first = a + b;
        a = b
        b = first
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;