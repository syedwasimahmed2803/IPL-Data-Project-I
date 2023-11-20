// const csvtojson = require('csvtojson');
const fs = require("fs");
// csvtojson()
//   .fromFile(__dirname + '/deliveries.csv')
//   .then((jsonArrayObj) => {
//     const jsonFilePath = __dirname + '/JSON/deliveries.json';
//     fs.writeFileSync(jsonFilePath, JSON.stringify(jsonArrayObj, null, 2));
//   })
//   .catch((err) => console.error(err));
//   csvtojson()
//   .fromFile(__dirname + '/matches.csv')
//   .then((jsonArrayObj) => {
//     const jsonFilePath = __dirname + '/JSON/matches.json';
//     fs.writeFileSync(jsonFilePath, JSON.stringify(jsonArrayObj, null, 2));
//   })
//   .catch((err) => console.error(err));

const matches = require("./src/data/matches.json");
const deliveries = require("./src/data/deliveries.json");
const { matchesPerYear } = require("./src/server/1-matches-per-year");
const {
  matchesWonPerTeam,
} = require("./src/server/2-matches-won-per-team-per-year");
const { extraRunsConceded } = require("./src/server/3-extra-runs-conceded");
const {
  topTenEconomicalBowlers,
} = require("./src/server/4-top-ten-economical-bowlers");
const { wonTossWonMatch } = require("./src/server/5-won-toss-and-won-match");
const { superOverEconomy } = require("./src/server/9-economy-super-overs");
const { strikeRate } = require("./src/server/7-strike-rate");
const { playerOfTheMatch } = require("./src/server/6-player-of-the-match");
const { playerDismissed } = require("./src/server/8-player-dismissed");

fs.writeFileSync(
  "./src/public/output/matchesPerYear.json",
  JSON.stringify(matchesPerYear(matches), null, 2)
);

fs.writeFileSync(
  "./src/public/output/matchesWonPerTeam.json",
  JSON.stringify(matchesWonPerTeam(matches), null, 2)
);

fs.writeFileSync(
  "./src/public/output/extraRunsConceded.json",
  JSON.stringify(extraRunsConceded(matches, deliveries), null, 2)
);

fs.writeFileSync(
  "./src/public/output/topTenEconomicalBowlers.json",
  JSON.stringify(topTenEconomicalBowlers(matches, deliveries), null, 2)
);

fs.writeFileSync(
  "./src/public/output/wonTossWonMatch.json",
  JSON.stringify(wonTossWonMatch(matches), null, 2)
);

fs.writeFileSync(
  "./src/public/output/superOverEconomy.json",
  JSON.stringify(superOverEconomy(deliveries), null, 2)
);

fs.writeFileSync(
  "./src/public/output/strikeRate.json",
  JSON.stringify(strikeRate(matches, deliveries), null, 2)
);

fs.writeFileSync(
  "./src/public/output/playerDismissed.json",
  JSON.stringify(playerDismissed(deliveries), null, 2)
);

fs.writeFileSync(
  "./src/public/output/playerOfTheMatch.json",
  JSON.stringify(playerOfTheMatch(matches), null, 2)
);
