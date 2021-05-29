import { addDays, endOfMonth } from "../util/dateUtil";

export function payrollDateService() {
  return {
    baseSalaryDate: function (date: Date) {
      const lastMontDay = endOfMonth(date);
      if (lastMontDay.getDay() == 0) {
        return addDays(lastMontDay, -2);
      } else if (lastMontDay.getDay() == 6) {
        return addDays(lastMontDay, -1);
      } else {
        return lastMontDay;
      }
    },

    bonusSalaryDate: function (date: Date) {
      const bonusDate = new Date(date);
      bonusDate.setDate(15);

      if (bonusDate.getDay() == 0) {
        return addDays(bonusDate, 3);
      } else if (bonusDate.getDay() == 6) {
        return addDays(bonusDate, 4);
      } else {
        return bonusDate;
      }
    },
  };
}
