const {
  matchesWonPerTeam,
} = require("../server/2-matches-won-per-team-per-year.js");

describe("matchesWonPerTeam", () => {
  test("it should return an empty object for an empty input array", () => {
    const result = matchesWonPerTeam([]);
    expect(result).toEqual({});
  });

  test("it should correctly calculate matches won per team for a given array", () => {
    const sampleMatches = [
      { season: "2019", winner: "TeamA" },
      { season: "2019", winner: "TeamB" },
      { season: "2020", winner: "TeamA" },
      { season: "2020", winner: "TeamC" },
    ];

    const result = matchesWonPerTeam(sampleMatches);

    expect(result).toEqual({
      2019: { TeamA: 1, TeamB: 1 },
      2020: { TeamA: 1, TeamC: 1 },
    });
  });

  test("it should correctly calculate matches even if the team is same", () => {
    const sampleMatches = [
      { season: "2019", winner: "TeamA" },
      { season: "2019", winner: "TeamA" },
      { season: "2020", winner: "TeamA" },
      { season: "2020", winner: "TeamA" },
    ];

    const result = matchesWonPerTeam(sampleMatches);

    expect(result).toEqual({
      2019: { TeamA: 2 },
      2020: { TeamA: 2 },
    });
  });

  test("it should not consider the case where winner is an empty string", () => {
    const sampleMatches = [
      { season: "2019", winner: "" },
      { season: "2019", winner: "TeamB" },
      { season: "2020", winner: "" },
      { season: "2020", winner: "TeamC" },
    ];

    const result = matchesWonPerTeam(sampleMatches);

    expect(result).toEqual({
      2019: { TeamB: 1 },
      2020: { TeamC: 1 },
    });
  });

  test("it should handle cases with no winners", () => {
    const matchesWithNoWinners = [
      { season: "2019", winner: "" },
      { season: "2019", winner: "" },
      { season: "2020", winner: "" },
    ];

    const result = matchesWonPerTeam(matchesWithNoWinners);

    expect(result).toEqual({});
  });
});
