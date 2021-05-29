import { addDays, addMonths, endOfMonth } from "./dateUtil";

describe("dataUtil test", () => {
  test("last day", () => {
    expect(endOfMonth(new Date(2021, 0, 1)).toISOString()).toBe(
      new Date(2021, 0, 31).toISOString()
    );
  });

  test("add month", () => {
    expect(addMonths(new Date(2021, 1, 5), 2).toISOString()).toBe(
      new Date(2021, 3, 5).toISOString()
    );
  });

  test("add day", () => {
    expect(addDays(new Date(2021, 1, 5), 2).toISOString()).toBe(
      new Date(2021, 1, 7).toISOString()
    );
  });

  test("add day in end of month", () => {
    expect(addDays(new Date(2021, 2, 31), 2).toISOString()).toBe(
      new Date(2021, 3, 2).toISOString()
    );
  });

  test("sub day", () => {
    expect(addDays(new Date(2021, 1, 5), -2).toISOString()).toBe(
      new Date(2021, 1, 3).toISOString()
    );
  });
});
