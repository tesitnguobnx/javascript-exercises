const removeFromArray = function (arr, ...args) {
    let newArray = [];
    arr.forEach(element => {
        if (!args.includes(element)) {
            newArray.push(element)
        }
    }
);
return newArray;
};

module.exports = removeFromArray;
