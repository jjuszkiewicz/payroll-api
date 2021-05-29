export interface Config {
  port: number;
}

const config: Config = {
  port: Number(process.env.PORT) || 3004,
};

export default config;
