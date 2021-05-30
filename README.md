# Task content

Create a small API to help a small ﬁctional company calculate the dates on which they should pay their sales staff. Company payroll is handled like so:

- Sales staff are paid a regular ﬁxed base salary each month, plus a regular monthly bonus.
- Base salaries are paid on the last day of each month unless that day is a Saturday or Sunday (a weekend), in which case they are paid on the Friday before the weekend
- On the 15th of each month, bonuses are paid for the previous month, unless that day is a weekend, in which case they are paid on the ﬁrst Wednesday after the 15th.

Your API should accept a date as a parameter, and return the payment dates for the following 12 months, including the supplied date. Results should be returned in CSV format.

# Instalation

- node veriosn v14.16.0 - if you use nvm (https://github.com/nvm-sh/nvm) the `.nvmrc` file are added

- Make command to set up project: `npm i`

- Run API on the localhost: `npm run dev`.
- API is avaliable on the address: http://localhost:3004/

# API

API returns dates for the follow 12 months of base salar and bonus dates in two format: JSON (in preview mode) and CSV (download file).

- `http://localhost:3004/payroll-dates/<YYYY-MM-DD>` get CSV file e.g: http://localhost:3004/payroll-dates/2021-05-11

- `http://localhost:3004/payroll-dates/<YYYY-MM-DD>.json` display JSON response with dates list file e.g: http://localhost:3004/payroll-dates/2021-05-11.json

**IMPORTANT:** date format `YYYY-MM-DD`. It doesn't mater with day of month you point, because only year and month are important to calculate list.

# Another useful options:

- `npm run test` to run tests
- `npm run fix` to fix code style via Prettier (https://prettier.io/)
