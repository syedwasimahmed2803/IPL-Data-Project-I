const matches = require("..//data/matches")
const fs = require('fs');

function matchesWon(object){
let newObj={} 

for(let key of object){
    if(!newObj[key["season"]]){
        newObj[key["season"]]={}
    }

    if(!newObj[key["season"]][key["winner"]]){
        newObj[key["season"]][key["winner"]]=0
    }
    newObj[key["season"]][key["winner"]]++

}
return newObj;
}
fs.writeFileSync(
    "../public/output/2-matches-won-per-team-per-year.json",
    JSON.stringify(matchesWon(matches))
  );
