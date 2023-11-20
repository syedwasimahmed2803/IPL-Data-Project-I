// function matchesWonPerTeam(matches) {
//   return matches.reduce((wins, match) => {
//     const { season, winner } = match;
//     if (winner != "") {
//       wins[season] = wins[season] || {};
//       wins[season][winner] = (wins[season][winner] || 0) + 1;
//     }
//     return wins;
//   }, {});
// }

function matchesWonPerTeam(matches) {
  return matches.reduce((acc, curr) => {
    const { winner, season } = curr;
    if (winner != "") {
      if (!acc[winner]) {
        acc[winner] = {};
      }

      if (!acc[winner][season]) {
        acc[winner][season] = 1;
      }
      acc[winner][season] += 1;
    }
    return acc;
  }, {});
}

module.exports.matchesWonPerTeam = matchesWonPerTeam;
