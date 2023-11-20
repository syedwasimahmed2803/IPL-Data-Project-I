const { extraRunsConceded } = require("../server/3-extra-runs-conceded");

describe("extraRunsConceded", () => {
  test("it should return an empty object for an empty input array", () => {
    const result = extraRunsConceded([], []);
    expect(result).toEqual({});
  });

  test("it should correctly calculate extra runs conceded per team for a given array", () => {
    const sampleMatches = [
      { season: "2016", id: "1" },
      { season: "2019", id: "2" },
    ];
    const sampleDeliveries = [
      { match_id: "1", extra_runs: "3", bowling_team: "RCB" },
      { match_id: "2", extra_runs: "2", Bowling_team: "RCB" },
    ];

    const result = extraRunsConceded(sampleMatches, sampleDeliveries);

    expect(result).toEqual({
      RCB: 3,
    });
  });

  test("it should correctly calculate extra runs conceded per team for 2016", () => {
    const sampleMatches = [
      { season: "2016", id: "1" },
      { season: "2016", id: "2" },
    ];
    const sampleDeliveries = [
      { match_id: "1", extra_runs: "3", bowling_team: "RCB" },
      { match_id: "2", extra_runs: "2", bowling_team: "RCB" },
    ];

    const result = extraRunsConceded(sampleMatches, sampleDeliveries);

    expect(result).toEqual({
      RCB: 5,
    });
  });

  test("it should correctly calculate extra runs conceded per team for 2016", () => {
    const sampleMatches = [
      { season: "2016", id: "1" },
      { season: "2016", id: "2" },
    ];
    const sampleDeliveries = [
      { match_id: "1", extra_runs: "3", bowling_team: "RCB" },
      { match_id: "2", extra_runs: "2", bowling_team: "CSK" },
    ];

    const result = extraRunsConceded(sampleMatches, sampleDeliveries);

    expect(result).toEqual({
      RCB: 3,
      CSK: 2,
    });
  });

  test("it should correctly calculate extra runs conceded per team for 2016", () => {
    const sampleMatches = [
      { season: "2016", id: "1" },
      { season: "2016", id: "2" },
      { season: "2016", id: "3" },
      { season: "2016", id: "4" },
      { season: "2018", id: "5" },
    ];
    const sampleDeliveries = [
      { match_id: "1", extra_runs: "3", bowling_team: "RCB" },
      { match_id: "2", extra_runs: "2", bowling_team: "KKR" },
      { match_id: "3", extra_runs: "3", bowling_team: "RCB" },
      { match_id: "5", extra_runs: "2", bowling_team: "CSK" },
      { match_id: "4", extra_runs: "3", bowling_team: "RCB" },
    ];

    const result = extraRunsConceded(sampleMatches, sampleDeliveries);

    expect(result).toEqual({
      KKR: 2,
      RCB: 9,
    });
  });
});
