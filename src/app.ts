import express, { NextFunction, Request, Response } from "express";
import { Config } from "./config";
import routes from "./route";

export function appFactory(config: Config) {
  const app = express();

  app.use("/", routes(config));

  // invoke next() and do not respond.
  app.use(function (req, res, next) {
    res.status(404);
    res.send({ error: "Not found" });
    // next()
  });

  //FIXME change error any to correct object
  app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    // whatever you want here, feel free to populate
    // properties on `err` to treat it differently in here.
    res.status(err.status || 500);
    res.send({ error: err.message });
  });

  return app;
}
