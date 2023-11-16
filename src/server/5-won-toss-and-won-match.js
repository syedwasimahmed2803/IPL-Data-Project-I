const matches = require("../data/matches")
// const deliveries = require("../data/deliveries")
const fs = require('fs');

function wonTossWonMatch(match1){
    let newObj={}
    for(let index=0;index<match1.length;index++){
        let matchData = match1[index]
        if(matchData["toss_winner"]==matchData["winner"])
        {
            if(!newObj[matchData["winner"]]){
                newObj[matchData["winner"]]=0
            }
            newObj[matchData["winner"]]+=1;
        }
        
        
    }
    return newObj
}

fs.writeFileSync("../public/output/wonTossWonMatch.json",JSON.stringify(wonTossWonMatch(matches),null,2));
