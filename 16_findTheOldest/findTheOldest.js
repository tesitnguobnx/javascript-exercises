const findTheOldest = function(arr) {
    let oldestName = null;
    let maxAge = 0;
    const actualYear = 2025;

    arr.forEach(element => {
        const muere = element.yearOfDeath ? element.yearOfDeath : actualYear;

        const nace = element.yearOfBirth;

        const edad = muere - nace;

        if(edad > maxAge) {
            maxAge = edad;
            oldestName = element
        }

    });
    return oldestName;
};

// Do not edit below this line
module.exports = findTheOldest;
