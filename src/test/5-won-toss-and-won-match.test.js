const { wonTossWonMatch } = require("../server/5-won-toss-and-won-match");

describe("wonTossWonMatch", () => {
  test("it should return an empty object for an empty input array", () => {
    const result = wonTossWonMatch([]);
    expect(result).toEqual({});
  });

  test("it should correctly calculate winner of toss and match based on the data provided", () => {
    const sampleMatches = [
      { toss_winner: "TeamA", winner: "TeamA" },
      { toss_winner: "2019", winner: "TeamB" },
    ];

    const result = wonTossWonMatch(sampleMatches);

    expect(result).toEqual({
      TeamA: 1,
    });
  });

  test("it should correctly calculate winner of toss and match based on the data provided", () => {
    const sampleMatches = [
      { toss_winner: "TeamA", winner: "TeamA" },
      { toss_winner: "TeamA", winner: "TeamA" },
    ];

    const result = wonTossWonMatch(sampleMatches);

    expect(result).toEqual({
      TeamA: 2,
    });
  });

  test("it should correctly calculate winner of toss and match based on the data provided", () => {
    const sampleMatches = [
      { toss_winner: "TeamA", winner: "TeamA" },
      { toss_winner: "TeamA", winner: "TeamA" },
      { toss_winner: "TeamB", winner: "TeamB" },
      { toss_winner: "TeamA", winner: "TeamA" },
    ];

    const result = wonTossWonMatch(sampleMatches);

    expect(result).toEqual({
      TeamA: 3,
      TeamB: 1,
    });
  });

  test("it should correctly calculate winner of toss and match based on the data provided", () => {
    const sampleMatches = [
      { toss_winner: "TeamA", winner: "TeamA" },
      { toss_winner: "TeamA", winner: "TeamA" },
      { toss_winner: "TeamB", winner: "TeamB" },
      { toss_winner: "TeamB", winner: "TeamA" },
    ];

    const result = wonTossWonMatch(sampleMatches);

    expect(result).toEqual({
      TeamA: 2,
      TeamB: 1,
    });
  });
});
