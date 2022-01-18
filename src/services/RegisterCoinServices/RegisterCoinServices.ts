import { prisma } from "../../utils/prisma";

interface CoinProps {
  name: string;
  symbol: string;
  id: number;
}

interface ExecuteProps {
  data: CoinProps[];
}

export class RegisterCoinServices {
  async execute({ data }: ExecuteProps) {
    const response = await prisma.coins.createMany({
      data: data.map((element) => {
        return {
          name: element.name,
          id_coin: element.id,
          symbol: element.symbol,
        };
      }),
    });

    if (response) {
      console.log("cadastrou");
    }
    return { success: true };
  }
}
