import { Request, Response } from "express";
import { TakeCoinsServices } from "../../services/TakeCoinsServices/TakeCoinsServices";

export class TageCoinsController {
  async handle(req: Request, res: Response) {
    try {
      const services = new TakeCoinsServices();
      const result = await services.execute();

      res.json(result);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  }
}
