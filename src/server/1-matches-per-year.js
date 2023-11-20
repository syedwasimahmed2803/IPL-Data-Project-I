function matchesPerYear(matches){
    let newObj = {}
    matches.map((match)=>{
        if(!newObj[match["season"]]){
            newObj[match["season"]] = 0;
        }
        newObj[match["season"]]++;
    })
    return newObj
}

module.exports.matchesPerYear = matchesPerYear