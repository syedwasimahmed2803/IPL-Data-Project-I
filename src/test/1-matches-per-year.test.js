const { matchesPerYear } = require("../server/1-matches-per-year");

describe("matchesPerYear", () => {
  test("should return an empty object for an empty array", () => {
    const result = matchesPerYear([]);
    expect(result).toEqual({});
  });

  test("should count matches per year correctly", () => {
    const matches = [{ season: "2019" }, { season: "2020" }];
    const result = matchesPerYear(matches);

    expect(result).toEqual({
      2019: 1,
      2020: 1,
    });
  });

  test("should count matches per year correctly", () => {
    const matches = [
      { season: "2019" },
      { season: "2020" },
      { season: "2020" },
    ];
    const result = matchesPerYear(matches);

    expect(result).toEqual({
      2019: 1,
      2020: 2,
    });
  });

  test("should handle an array of matches with a single season", () => {
    const matches = [
      { season: "2021" },
      { season: "2021" },
      { season: "2021" },
    ];
    const result = matchesPerYear(matches);

    expect(result).toEqual({
      2021: 3,
    });
  });
  test("should handle matches with undefined season property", () => {
    const matches = [
      { season: "2023" },
      { season: undefined },
      { season: "2023" },
    ];
    const result = matchesPerYear(matches);

    expect(result).toEqual({
      2023: 2,
      undefined: 1,
    });
  });
});
