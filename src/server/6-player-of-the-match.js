function playerOfTheMatch(matches) {
  const playerData = matches.reduce((acc, match) => {
    const { season, player_of_match } = match;
    acc[season] = acc[season] || {};
    acc[season][player_of_match] = (acc[season][player_of_match] || 0) + 1;
    return acc;
  }, {});

  const sortData = Object.entries(playerData).map(([year, data]) => {
    const sortEntry = Object.entries(data).sort(([, a], [, b]) => b - a);
    const [player] = sortEntry[0];
    return { year, player };
  });
  return sortData;
}
module.exports.playerOfTheMatch = playerOfTheMatch;
