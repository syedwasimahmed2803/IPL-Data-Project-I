const matches = require("../data/matches")
const fs = require("fs")

function playerOfTheMatch(match1){
   const playerOfMatch = match1.reduce((acc,curr)=>{
    const{season, player_of_match} = curr;
    if(!acc[season]){
        acc[season]={}
    }
    if(!acc[season][player_of_match]){
        acc[season][player_of_match]=0;
    }
    acc[season][player_of_match]++
    return acc
   },{})
   const years = Object.keys(playerOfMatch);
   const sortedData = [];
   for (const year of years) {
     const sortedEntry = Object.entries(playerOfMatch[year]).sort(([,a],[,b])=>b-a)
     const [player] = sortedEntry[0]
     sortedData.push({year, player})
}
return sortedData;
}
console.log(playerOfTheMatch(matches))
fs.writeFileSync("../public/output/playerOfTheGame.json",JSON.stringify(playerOfTheMatch(matches),null,2));
