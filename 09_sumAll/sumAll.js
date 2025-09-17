const sumAll = function (num1, num2) {
    let numeros = [];
    if ((typeof num1 != 'number' || typeof num2 != 'number') || (num1 % 1 != 0 || num2 % 1 != 0) || (num1 < 0 || num2 < 0)) {
        return 'ERROR'
    }

    if(num1 > num2){
        return sumAll(num2,num1)
    }

    for (let i = num1; i <= num2; i ++) {
        numeros.push(i);
    }
    return numeros.reduce((numero, currentValue) => numero + currentValue)
}
console.log(sumAll(1,4))

// Do not edit below this line
module.exports = sumAll;
