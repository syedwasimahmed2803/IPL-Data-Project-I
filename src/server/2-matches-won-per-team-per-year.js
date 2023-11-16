const matches = require("../data/matches")
const fs = require('fs');

function matchesWon(object){
let newObj={} 

for(let key of object){
    if(!newObj[key["season"]]){
        newObj[key["season"]]={}
    }
    if(!newObj[key["season"]][key["winner"]]){
        if(key["winner"]=="")
        continue
        newObj[key["season"]][key["winner"]]=0
    }
    newObj[key["season"]][key["winner"]]++

}
return newObj;
}
fs.writeFileSync(
    "../public/output/matchesWonPerYearPerTeam.json",
    JSON.stringify(matchesWon(matches),null,2)
  );
