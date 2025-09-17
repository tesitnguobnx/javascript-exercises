const palindromes = function (txt) {
    let reversed = "";
    let replaced = txt.replace(/[, !.]/g, "").toLowerCase()

    for(let i = replaced.length - 1; i >= 0; i--){
        reversed+= replaced[i]
    }
    return reversed === replaced
};

module.exports = palindromes;