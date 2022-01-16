import { prisma } from "../../utils/prisma";

export class TakeCoinsServices {
  async execute() {
    const coins = await prisma.coins.findMany({
      include: { history: true },
    });

    return coins;
  }
}
