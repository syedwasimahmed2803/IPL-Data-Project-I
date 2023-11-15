const matches = require("../data/matches")
const deliveries = require("../data/deliveries")
const fs = require('fs');
function extraRunsConceded(matches1, deliveries1){
let newArr=[];
let nObj={};
for(let index=0;index<matches1.length;index++){
    let eachMatch = matches1[index]
    if(eachMatch["season"]=='2016'){
        newArr.push(eachMatch["id"])
    }

}
for(let index=0;index<deliveries1.length;index++){
    let eachDelivery = deliveries1[index]
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
return nObj
}
fs.writeFileSync("../public/output/extraRunsConceded.json",JSON.stringify(extraRunsConceded(matches, deliveries),null,2));
