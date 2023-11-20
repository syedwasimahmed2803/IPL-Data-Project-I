const { superOverEconomy } = require("../server/9-economy-super-overs");

describe("superOverEconomy", () => {
  test("it should return an empty object for an empty input array", () => {
    const result = superOverEconomy([]);
    expect(result).toEqual([]);
  });

  test("it should return an empty array since the first condition is not satisfied", () => {
    const sampleMatches = [
      { is_super_over: "0", bowler: "TeamA" },
      { is_super_over: "0", bowler: "TeamB" },
    ];

    const result = superOverEconomy(sampleMatches);

    expect(result).toEqual([]);
  });

  test("it should return the player's economy based on the data provided", () => {
    const sampleMatches = [
      { is_super_over: "0", bowler: "TeamA" },
      { is_super_over: "1", bowler: "VK", total_runs: 1 },
    ];

    const result = superOverEconomy(sampleMatches);

    expect(result).toEqual([
      {
        bowler: "VK",
        economy: "6.00",
      },
    ]);
  });

  test("it should return the player's economy based on the data provided", () => {
    const sampleMatches = [
      { is_super_over: "0", bowler: "TeamA" },
      { is_super_over: "1", bowler: "VK", total_runs: 1 },
      { is_super_over: "1", bowler: "VK", total_runs: 2 },
    ];

    const result = superOverEconomy(sampleMatches);

    expect(result).toEqual([
      {
        bowler: "VK",
        economy: "9.00",
      },
    ]);
  });

  test("it should return the player's economy based on the data provided", () => {
    const sampleMatches = [
      { is_super_over: "1", bowler: "MSD", total_runs: 1 },
      { is_super_over: "1", bowler: "VK", total_runs: 1 },
      { is_super_over: "1", bowler: "VK", total_runs: 1 },
      { is_super_over: "1", bowler: "VK", total_runs: 0 },
      { is_super_over: "1", bowler: "MSD", total_runs: 0 },
    ];

    const result = superOverEconomy(sampleMatches);

    expect(result).toEqual([
      {
        bowler: "MSD",
        economy: "3.00",
      },
    ]);
  });
});
