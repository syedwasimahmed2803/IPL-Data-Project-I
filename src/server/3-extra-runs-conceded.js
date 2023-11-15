const matches = require("../data/matches")
const deliveries = require("../data/deliveries")
let newArr=[];
let nObj={};
for(let index=0;index<matches.length;index++){
    let eachMatch = matches[index]
    if(eachMatch["season"]=='2016'){
        newArr.push(eachMatch["id"])
    }

}
for(let index=0;index<deliveries.length;index++){
    let eachDelivery = deliveries[index]
    for(let i=0;i<newArr.length;i++){
        let eachId=newArr[i]
        if(eachDelivery["match_id"]==eachId){
            if(!nObj[eachDelivery["bowling_team"]]){
                nObj[eachDelivery["bowling_team"]]=0
            }   
            nObj[eachDelivery["bowling_team"]]+= parseInt(eachDelivery["extra_runs"])
        }
    }
}

console.log(nObj)