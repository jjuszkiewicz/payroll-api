export interface Config {
  port: number;
  defaultMonthsCountPayroll: number;
}

const config: Config = {
  port: Number(process.env.PORT) || 3004,
  defaultMonthsCountPayroll: 12,
};

export default config;
