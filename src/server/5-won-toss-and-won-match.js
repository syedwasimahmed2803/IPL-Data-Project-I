function wonTossWonMatch(matches) {
  return matches
    .filter((match) => match.toss_winner === match.winner)
    .reduce((acc, match) => {
      acc[match.winner] = (acc[match.winner] || 0) + 1;
      return acc;
    }, {});
}

module.exports.wonTossWonMatch = wonTossWonMatch;
