const matches = require("../data/matches")
const deliveries = require("../data/deliveries")
const fs = require('fs');

function economicalBowlers(matches1, deliveries1){
    let newArr=[];
    let nObj={};
    for(let index=0;index<matches1.length;index++){
        let eachMatch = matches1[index]
        if(eachMatch["season"]=='2015'){
            newArr.push(eachMatch["id"])
        }
    
    }
    for(let index=0;index<deliveries1.length;index++){
        let eachDelivery = deliveries1[index]
        for(let i=0;i<newArr.length;i++){
            let eachId=newArr[i]
            if(eachDelivery["match_id"]==eachId){
                if(!nObj[eachDelivery["bowler"]]){
                    nObj[eachDelivery["bowler"]]={runs:0, balls:0};
                }
                nObj[eachDelivery["bowler"]].runs+=parseInt(eachDelivery["total_runs"])
                nObj[eachDelivery["bowler"]].balls+=1;
                
            }
        }
    }
    let bowlerArray=[];
    for(let bowler in nObj){
        const runs =nObj[bowler].runs
        const balls = nObj[bowler].balls
        const economy = (runs/balls)*6;
        bowlerArray.push({bowler, economy})
    }

    bowlerArray.sort((a, b) => a.economy - b.economy);
    const top10Bowlers = bowlerArray.slice(0, 10);

    return top10Bowlers;
}
fs.writeFileSync("../public/output/economicalBowlers.json",JSON.stringify(economicalBowlers(matches, deliveries),null,2));
