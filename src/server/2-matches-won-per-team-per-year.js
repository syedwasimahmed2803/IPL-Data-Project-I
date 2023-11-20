function matchesWonPerTeam(matches) {
  return matches.reduce((wins, match) => {
    const { season, winner } = match;
    if (winner != "") {
      wins[season] = wins[season] || {};
      wins[season][winner] = (wins[season][winner] || 0) + 1;
    }
    return wins;
  }, {});
}
module.exports.matchesWonPerTeam = matchesWonPerTeam;
