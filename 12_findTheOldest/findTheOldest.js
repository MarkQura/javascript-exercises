const findTheOldest = function(arr) {
    let result = arr.sort((first, second) => {
        let date = new Date().getFullYear();
        let age1 = (first.yearOfDeath == null ? date :  first.yearOfDeath) - first.yearOfBirth;
        let age2 = (second.yearOfDeath == null ? date :  second.yearOfDeath) - second.yearOfBirth;
        return age1 < age2 ? 1 : -1;
    });

    return result[0];
};

// Do not edit below this line
module.exports = findTheOldest;
