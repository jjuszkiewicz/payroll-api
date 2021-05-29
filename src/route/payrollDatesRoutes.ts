import { Router } from "express";
import payrollDatesController from "../controlller/payrollController";
import { Config } from "../config";

export function payrollDatesRoutes(config: Config) {
  const router = Router();
  const controller = payrollDatesController(config);

  router.get("/:date", controller.payrollDates);

  return router;
}
