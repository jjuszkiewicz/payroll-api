import { Router } from "express";
import { payrollDatesRoutes } from "./payrollDatesRoutes";
import { Config } from "../config";

export default function routes(config: Config) {
  const router = Router();

  router.get("/", function (req, res) {
    res.send("Payroll dates API");
  });
  router.use("/payroll-dates", payrollDatesRoutes(config));

  return router;
}
