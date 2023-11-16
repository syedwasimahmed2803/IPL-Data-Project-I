const matches = require("../data/matches")
const deliveries = require("../data/deliveries")
const fs = require('fs');


function strikeRate(matches1, deliveries1){
    let newArr=[];
    let seasonObj={};
    let nObj={};
    for(let index=0;index<matches1.length;index++){
        let eachMatch = matches1[index]
        if(!seasonObj[eachMatch["season"]]){
            seasonObj[eachMatch["season"]]={}
        }
    }
return seasonObj
    // for(let index=0;index<deliveries1.length;index++){
    //     let eachDelivery = deliveries1[index]
    //     for(let i=0;i<newArr.length;i++){
    //         let eachId=newArr[i]
    //         if(eachDelivery["match_id"]==eachId){
    //         if(eachDelivery["batsman"]=="GJ Maxwell"){
    //             if(!nObj[eachDelivery["batsman"]]){
    //                 nObj[eachDelivery["batsman"]]={runs:0, balls:0};
    //             }
    //             nObj[eachDelivery["batsman"]].runs+=parseInt(eachDelivery["total_runs"])
    //             nObj[eachDelivery["batsman"]].balls+=1;
    //         }
    //         }
    //     }
    // }
    // let strikeRateArray =0
    // for(let batsman in nObj){

    // }
    // return nObj
}
    
console.log(strikeRate(matches, deliveries))
    

// fs.writeFileSync("../public/output/strikeRate.json",JSON.stringify(strikeRate(matches, deliveries),null,2));
