export function addDays(date: Date | string, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function addMonths(date: Date | string, months: number) {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

export function clearTime(date: Date | string) {
  const result = new Date(date);
  result.setHours(0);
  result.setMinutes(0);
  result.setSeconds(0);
  result.setMilliseconds(0);
  return result;
}

export function countDays(firstDate: Date | string, secondDate: Date | string) {
  const oneDay = 24 * 60 * 60 * 1000;
  const dateOne = new Date(firstDate);
  const dateTow = new Date(secondDate);
  return Math.round(Math.abs((dateOne.getTime() - dateTow.getTime()) / oneDay));
}

export function formatDate(date: Date, format: FormatDate) {
  const month = date.getMonth() + 1;
  let monthString = `${month}`;
  if (month < 10) {
    monthString = `0${month}`;
  }
  let dayString = `${date.getDate()}`;
  if (date.getDate() < 10) {
    dayString = `0${date.getDate()}`;
  }
  let minutesString = `${date.getMinutes()}`;
  if (date.getMinutes() < 10) {
    minutesString = `0${minutesString}`;
  }
  if (format === FormatDate.DB_FORMAT) {
    return `${date.getFullYear()}-${monthString}-${dayString}`;
  } else if (format === FormatDate.CLIENT_FORMAT) {
    return `${date.getDate()}.${monthString}.${date.getFullYear()}`;
  } else if (format === FormatDate.CLIENT_WITH_TIME_FORMAT) {
    return `${date.getDate()}.${monthString}.${date.getFullYear()} ${date.getHours()}:${minutesString}`;
  } else if (format === FormatDate.MONTH_YEAR_FORMAT) {
    return `${monthString}.${date.getFullYear()}`;
  }
}

export function startOfMonth(date) {
  const startMonth = new Date(date);
  startMonth.setDate(1);
  return clearTime(startMonth);
}

export function endOfMonth(date) {
  const startNextMonth = startOfMonth(date);
  startNextMonth.setMonth(startNextMonth.getMonth() + 1);
  return clearTime(addDays(startNextMonth, -1));
}

export enum FormatDate {
  DB_FORMAT = "YYYY-MM-DD",
  CLIENT_FORMAT = "DD.MM.YYYY",
  CLIENT_WITH_TIME_FORMAT = "DD.MM.YYYY HH:ii",
  MONTH_YEAR_FORMAT = "MM.YYYY",
}
