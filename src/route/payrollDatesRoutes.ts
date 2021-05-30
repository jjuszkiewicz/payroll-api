import { Router } from "express";
import payrollDatesController from "../controlller/payrollController";
import { Config } from "../config";

export function payrollDatesRoutes(config: Config) {
  const router = Router();
  const controller = payrollDatesController(config);

  router.get("/:date([0-9]{4}-[0-9]{2}-[0-9]{2})", controller.payrollDates);
  router.get(
    "/:date([0-9]{4}-[0-9]{2}-[0-9]{2}).:ext(json|csv)",
    controller.payrollDates
  );

  return router;
}
