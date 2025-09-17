const findTheOldest = function (arr) {
    reduced = arr.reduce((prev, current) => {
        let currentYear = 2025
        if (!prev.yearOfDeath) {
            prev.yearOfDeath = currentYear
        }
        if ((prev.yearOfDeath - prev.yearOfBirth) > (current.yearOfDeath - current.yearOfBirth)) {
            return prev
        } else {
            return current
        }
    })
    return reduced
};


// Do not edit below this line
module.exports = findTheOldest;