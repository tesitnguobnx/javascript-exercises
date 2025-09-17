const removeFromArray = function (arr, ...args) {
    return arr.filter((item) => !args.includes(item))
}

console.log(removeFromArray([1,2,3,4,5], 4))

module.exports = removeFromArray;
