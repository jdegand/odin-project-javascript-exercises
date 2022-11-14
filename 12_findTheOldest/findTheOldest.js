const findTheOldest = (arr) => {

    // new Date for yearOfDeath undefined

    arr.forEach((obj) => {
        if (obj['yearOfDeath'] === undefined) {
          obj['yearOfDeath'] = (new Date()).getFullYear()
        }
    });

    let sorted = arr.sort((a,b) => {
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    })
    return sorted[0]
}

// Do not edit below this line
module.exports = findTheOldest;
