import { Router } from "express";

export function payrollDatesRoutes() {
  const router = Router();

  router.get("/", (req, resp) => {
    resp.send("OK");
  });

  return router;
}
