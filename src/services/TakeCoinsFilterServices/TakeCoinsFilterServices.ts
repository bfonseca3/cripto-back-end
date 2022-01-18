import { prisma } from "../../utils/prisma";

export default class TakeCoinsFilterServices {
  async execute(start: number) {
    const numberStart = start * 50 * 10;
    const numberTake = 500;

    const result = await prisma.coins.findMany({
      take: 300,
      include: {
        history: {
          orderBy: {
            date: "desc",
          },
          take: 1,
        },
      },
    });

    return { filter: result };
  }
}
