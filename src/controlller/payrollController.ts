import { Request, Response } from "express";
import { Config } from "../config";
import { payrollDateService as payrollDateServiceFactory } from "../service/payrollDateService";
import { addMonths, FormatDate, formatDate } from "../util/dateUtil";

export default function payrollDatesController(config: Config) {
  const payrollDateServices = payrollDateServiceFactory();

  return {
    payrollDates: function (req: Request, resp: Response) {
      const dates = [];
      const date = req.params.date; //todo validation

      for (let i = 0; i < config.defaultMonthsCountPayroll; ++i) {
        const calculatedDate = addMonths(date, i);
        dates.push({
          month: formatDate(calculatedDate, FormatDate.MONTH_YEAR_FORMAT),
          baseSalaryDate: payrollDateServices
            .baseSalaryDate(calculatedDate)
            .toLocaleDateString(),
          bonusDate: payrollDateServices
            .bonusSalaryDate(calculatedDate)
            .toLocaleDateString(),
        });
      }
      resp.send(dates);//todo conver to CSV
    },
  };
}
