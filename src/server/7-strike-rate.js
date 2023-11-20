function strikeRate(matches, deliveries) {
  const matchId = matches.reduce((acc, match) => {
    acc[match.id] = match;
    return acc;
  }, {});
  const playerData = deliveries.reduce((acc, delivery) => {
    const { batsman, batsman_runs, wide_runs, noball_runs, match_id } =
      delivery;
    const isWide = parseInt(wide_runs > 0);
    const isNoBall = parseInt(noball_runs > 0);

    if (batsman === "KL Rahul" && matchId[match_id]) {
      const season = matchId[match_id].season;
      acc[season] = acc[season] || { runs: 0, balls: 0 };
      if (!isNoBall && !isWide) {
        acc[season].runs += parseInt(batsman_runs);
        acc[season].balls += 1;
      }
    }
    return acc;
  }, {});

  const playerStrikeRateData = Object.entries(playerData).reduce(
    (acc, [season, { runs, balls }]) => {
      const strikeRate = ((runs / balls) * 100).toFixed(2);
      acc[season] = parseFloat(strikeRate);
      return acc;
    },
    {}
  );
  return playerStrikeRateData;
}

module.exports.strikeRate = strikeRate;
