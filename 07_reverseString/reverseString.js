const reverseString = function(str) {
    resultado = "";
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i]
    }
    return resultado
};

// Do not edit below this line
module.exports = reverseString;
