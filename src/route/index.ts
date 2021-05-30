import { Router } from "express";
import { payrollDatesRoutes } from "./payrollDatesRoutes";
import { Config } from "../config";

export default function routes(config: Config) {
  const router = Router();

  router.get("/", function (req, res) {
    res.send(
      "Payroll dates API. Let's read README file to find out what endpoints are available."
    );
  });
  router.use("/payroll-dates", payrollDatesRoutes(config));

  return router;
}
