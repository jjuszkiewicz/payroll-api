import { payrollDateService } from "./payrollDateService";

describe("base salary", () => {
  const payrollDateServiceObject = payrollDateService();

  test("payoff when last day is sunday", () => {
    expect(
      payrollDateServiceObject
        .baseSalaryDate(new Date(2021, 0, 1))
        .toISOString()
    ).toBe(new Date(2021, 0, 29).toISOString());
  });

  test("payoff when last day is saturday", () => {
    expect(
      payrollDateServiceObject
        .baseSalaryDate(new Date(2021, 6, 1))
        .toISOString()
    ).toBe(new Date(2021, 6, 30).toISOString());
  });

  test("payoff when last day is day week", () => {
    expect(
      payrollDateServiceObject
        .baseSalaryDate(new Date(2021, 2, 1))
        .toISOString()
    ).toBe(new Date(2021, 2, 31).toISOString());
  });
});

describe("bonus payoff", () => {
  const payrollDateServiceObject = payrollDateService();

  test("payoff when last day is sunday", () => {
    expect(
      payrollDateServiceObject
        .bonusSalaryDate(new Date(2021, 7, 1))
        .toISOString()
    ).toBe(new Date(2021, 7, 18).toISOString());
  });

  test("payoff when last day is saturday", () => {
    expect(
      payrollDateServiceObject
        .bonusSalaryDate(new Date(2021, 4, 1))
        .toISOString()
    ).toBe(new Date(2021, 4, 19).toISOString());
  });

  test("payoff when last day is day week", () => {
    expect(
      payrollDateServiceObject
        .bonusSalaryDate(new Date(2021, 5, 1))
        .toISOString()
    ).toBe(new Date(2021, 5, 15).toISOString());
  });
});
