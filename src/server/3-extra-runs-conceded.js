function extraRunsConceded(matches, deliveries) {
  const matchId = matches
    .filter((match) => match.season === "2016")
    .map((match) => match.id);

  const extraRuns = deliveries
    .filter((delivery) => matchId.includes(delivery.match_id))
    .reduce((acc, delivery) => {
      const team = delivery.bowling_team;
      acc[team] = (acc[team] || 0) + parseInt(delivery.extra_runs);
      return acc;
    }, {});
  return extraRuns;
}
module.exports.extraRunsConceded = extraRunsConceded;
