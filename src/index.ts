import { appFactory } from "./app";
import config from "./config";

(async function main() {
  const app = await appFactory(config);

  app.listen(config.port, function () {
    console.log(`API listening on port ${config.port}!`);
  });
})();
