const sumAll = function (num1, num2) {
    let result = 0;

    let result2 = 0;

    if (num1 < 0 || num2 < 0 || typeof num1 != "number" || typeof num2 != "number" || (num1 % 1 != 0) || (num2 % 1 != 0)) {
        return "ERROR"

    } else if (num1 > num2) {

        for (let i = num2; i <= num1; i++) {
            result2 += i
        }
        return result2

    } else {
        for (let i = num1; i <= num2; i++) {
            result += i
        }
        return result
    }

}
// Do not edit below this line
module.exports = sumAll;
