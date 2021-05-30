import { Response } from "express";

export function sendCsv(resp: Response, data: string) {
  resp.header("Content-Type", "text/csv");
  resp.send(data);
}
