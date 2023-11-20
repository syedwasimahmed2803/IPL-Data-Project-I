function topTenEconomicalBowlers(matches, deliveries) {
  const matchId = matches
    .filter((match) => match.season === "2015")
    .map((match) => match.id);

  const bowlerData = deliveries
    .filter((delivery) => matchId.includes(delivery.match_id))
    .reduce((acc, delivery) => {
      const bowler = delivery.bowler;
      acc[bowler] = acc[bowler] ?? { runs: 0, balls: 0 };
      acc[bowler].runs += parseInt(delivery.total_runs) || 0;
      acc[bowler].balls += 1 + parseInt(delivery.legbye_runs);
      return acc;
    }, {});
  let ecobowler = Object.entries(bowlerData).map(([bowler, data]) => {
    let run = data.runs;
    let ball = data.balls;
    let economy = (run / ball) * 6;
    return { bowler, economy: economy.toFixed(2, 0) };
  });
  ecobowler.sort((a, b) => a.economy - b.economy);
  return ecobowler.slice(0, 10);
}
module.exports.topTenEconomicalBowlers = topTenEconomicalBowlers;
