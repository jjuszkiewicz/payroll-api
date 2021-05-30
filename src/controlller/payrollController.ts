import { Request, Response } from "express";
import { Config } from "../config";
import { payrollDateService as payrollDateServiceFactory } from "../service/payrollDateService";
import { PayrollDates } from "../type/payrollDates";
import {
  addMonths,
  FormatDate,
  formatDate,
  startOfMonth,
} from "../util/dateUtil";
import { sendCsv } from "../util/responseUtil";

export default function payrollDatesController(config: Config) {
  const payrollDateServices = payrollDateServiceFactory();

  const payrollDatesToCsv = (payrollDatesList: PayrollDates[]) => {
    const header = "month;base salary date;bonus date\r\n";
    const body = payrollDatesList.reduce(
      (rows, { month, baseSalaryDate, bonusDate }) => {
        return `${rows}${formatDate(
          month,
          FormatDate.MONTH_YEAR_FORMAT
        )};${baseSalaryDate.toLocaleDateString()};${bonusDate.toLocaleDateString()}\r\n`;
      },
      ""
    );

    return header + body;
  };

  const payrollDatesToJson = (payrollDatesList: PayrollDates[]) => {
    return payrollDatesList.map(({ month, baseSalaryDate, bonusDate }) => {
      return {
        month: formatDate(month, FormatDate.MONTH_YEAR_FORMAT),
        baseSalaryDate: baseSalaryDate.toLocaleDateString(),
        bonusDate: bonusDate.toLocaleDateString(),
      };
    });
  };

  return {
    payrollDates: function (req: Request, resp: Response) {
      const date = req.params.date;
      const dates: PayrollDates[] = [];

      for (let i = 0; i < config.defaultMonthsCountPayroll; ++i) {
        const calculatedDate = addMonths(date, i);
        dates.push({
          month: startOfMonth(calculatedDate),
          baseSalaryDate: payrollDateServices.baseSalaryDate(calculatedDate),
          bonusDate: payrollDateServices.bonusSalaryDate(calculatedDate),
        });
      }

      if (req.params.ext === "json") {
        resp.json(payrollDatesToJson(dates));
      } else {
        sendCsv(resp, payrollDatesToCsv(dates));
      }
    },
  };
}
