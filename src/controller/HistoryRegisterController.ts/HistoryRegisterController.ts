import axios from "axios";
import { Request, Response } from "express";
import {
  ExecuteProps,
  HistoryRegisterServices,
} from "../../services/HistoryRegisterServices/HistoryRegisterServices";

export class HistoryRegisterController {
  async handle(req: Request, res: Response) {
    // Pegando a ultima atualização das coins
    const { data: history } = await axios.get<ExecuteProps>(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
      {
        params: { start: "1", limit: "5000" },
        headers: {
          "X-CMC_PRO_API_KEY": process.env.CRIPTO_KEY,
        },
      }
    );

    try {
      const service = new HistoryRegisterServices();
      // Enviando o array para a função tratar
      await service.execute({ data: history.data });

      res.json({ register: true });
    } catch (e) {
      res.json({ error: e.message });
    }
  }
}
