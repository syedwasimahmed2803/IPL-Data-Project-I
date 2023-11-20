function playerDismissed(deliveries) {
  const dismissalCounts = deliveries.reduce((acc, delivery) => {
    const { player_dismissed, dismissal_kind, batsman, bowler, fielder } =
      delivery;

    if (player_dismissed !== "") {
      acc[player_dismissed] = acc[player_dismissed] || {};

      let dismissalBowler;
      if (dismissal_kind === "run out" || dismissal_kind === "retired hurt") {
        dismissalBowler = fielder; // assuming the fielder is the bowler in run-out cases
      } else {
        dismissalBowler = bowler;
      }

      acc[player_dismissed][dismissalBowler] =
        (acc[player_dismissed][dismissalBowler] || 0) + 1;
    }

    return acc;
  }, {});

  const mostFrequentDismissal = Object.entries(dismissalCounts).reduce(
    (mostFrequent, data) => {
      const [player, bowlerCounts] = data;
      const [bowler, count] = Object.entries(bowlerCounts).reduce(
        (max, [currentBowler, currentCount]) => {
          return currentCount > max[1] ? [currentBowler, currentCount] : max;
        },
        ["", 0]
      );

      if (count > mostFrequent.count) {
        return { batsman: player, bowler, count };
      } else {
        return mostFrequent;
      }
    },
    { batsman: null, bowler: null, count: 0 }
  );

  return mostFrequentDismissal;
}

module.exports.playerDismissed = playerDismissed;
