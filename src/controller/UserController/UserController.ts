import { Request, Response } from "express";
import UserServices from "../../services/UserServices/UserServices";

export default class UserController {
  async handle(req: Request, res: Response) {
    const { login, password } = req.body;
    console.log({ login, password });

    try {
      const service = new UserServices();
      const result = service.execute({ login, password });

      if (result) {
        res.json({ sucess: true });
      } else {
        res.json({ error: "not authorized" });
      }
    } catch (e) {
      res.status(400).json({ sucess: false });
    }
  }
}
