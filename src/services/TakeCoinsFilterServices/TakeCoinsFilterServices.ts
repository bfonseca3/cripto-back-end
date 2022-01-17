import { prisma } from "../../utils/prisma";

export default class TakeCoinsFilterServices {
  async execute(start: number) {
    const result = await prisma.coins.findMany({
      include: {
        history: {
          orderBy: {
            date: "desc",
          },
          take: 1,
        },
      },
    });
    const startNumber = start * 100 * 10;
    const finishNumber = startNumber + 1000;
    const filter = result.slice(startNumber, finishNumber);

    const totalValuePages = result.length / 100 - 1;

    return { count: totalValuePages, filter };
  }
}
