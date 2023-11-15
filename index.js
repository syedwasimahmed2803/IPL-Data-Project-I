const csvtojson = require('csvtojson');
const fs = require('fs');
csvtojson()
  .fromFile(__dirname + '/deliveries.csv')
  .then((jsonArrayObj) => {
    const jsonFilePath = __dirname + '/JSON/deliveries.json';
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonArrayObj, null, 2));
  })
  .catch((err) => console.error(err));
  csvtojson()
  .fromFile(__dirname + '/matches.csv')
  .then((jsonArrayObj) => {
    const jsonFilePath = __dirname + '/JSON/matches.json';
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonArrayObj, null, 2));
  })
  .catch((err) => console.error(err));
