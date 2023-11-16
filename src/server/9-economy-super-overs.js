const deliveries = require('../data/deliveries')
const fs = require("fs")

function economySuperOvers(deliveries1){
    let nObj={}
    deliveries1.forEach(element => {
        if(element["is_super_over"]=="1"){
            if(!nObj[element["bowler"]]){
            nObj[element["bowler"]]={runs:0,balls:0}
        }
        nObj[element["bowler"]].runs+=parseInt(element["total_runs"])
        nObj[element["bowler"]].balls+=1
    }
    });

let bowlerArray = []
for(let Bowler in nObj){
    let runs = nObj[Bowler].runs;
    let balls = nObj[Bowler].balls;
    let economy = (runs/balls)*6;
    bowlerArray.push({Bowler, economy})
}
bowlerArray.sort((a, b) => a.economy - b.economy);
const topBowler = bowlerArray.slice(0, 1);

console.log(topBowler);
}
fs.writeFileSync("../public/output/economySuperOvers.json",JSON.stringify(economySuperOvers(deliveries),null,2));
