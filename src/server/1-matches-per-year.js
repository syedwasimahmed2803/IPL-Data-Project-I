const matches = require('../data/matches')
const fs = require('fs');
function matchesPerYear(object){
    newObj = {};

    for(let val of object){
        if(!newObj[val["season"]]){
            newObj[val["season"]] = 0;
        }
        newObj[val["season"]]++;
    }
    return newObj;
}
fs.writeFileSync(
    "../public/output/1-matches-per-year.json",
    JSON.stringify(matchesPerYear(matches))
  );
// console.log(matchesPerYear(obj));