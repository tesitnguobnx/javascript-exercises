const repeatString = function (str, num) {
    resultado = "";
    if (num < 0) {
        return "ERROR"
    } else {
        for (let i = 0; i < num; i++) {
            resultado += str
        }
        return resultado
    }

};

// Do not edit below this line
module.exports = repeatString;
