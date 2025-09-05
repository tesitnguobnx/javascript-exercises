const getTheTitles = function(arr) {
    let newArray = [];
    arr.forEach(element => {
        newArray.push(element.title)
    });
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
