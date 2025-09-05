const palindromes = function (str) {
    result = "";

    for (let i = str.length - 1; i >= 0; i-- ){
        result += str[i]
    }
    mejorado = result.replace(/[,\.\!\s]/g, "");
    strMejorado = str.replace(/[,\.\!\s]/g, "");

    if (mejorado.toLowerCase() === strMejorado.toLowerCase()) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
