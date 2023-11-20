function superOverEconomy(deliveries) {
  const bowlerData = deliveries
    .filter((deliveries) => deliveries.is_super_over == "1")
    .reduce((acc, delivery) => {
      acc[delivery.bowler] = acc[delivery.bowler] ?? { runs: 0, balls: 0 };
      acc[delivery.bowler].runs += parseInt(delivery.total_runs);
      acc[delivery.bowler].balls += 1;
      return acc;
    }, {});
  let ecobowler = Object.entries(bowlerData).map(([bowler, data]) => {
    let run = data.runs;
    let ball = data.balls;
    let economy = (run / ball) * 6;
    return { bowler, economy: economy.toFixed(2) };
  });
  ecobowler.sort((a, b) => a.economy - b.economy);
  return ecobowler.slice(0, 1);
}
module.exports.superOverEconomy = superOverEconomy;
