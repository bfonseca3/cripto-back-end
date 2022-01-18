import { prisma } from "../../utils/prisma";

export default class TakeCoinsFilterServices {
  async execute(start: number) {
    const numberStart = start * 50 * 10;
    const numberTake = 500;

    const result = await prisma.coins.findMany({
      skip: numberStart,
      take: numberTake,
    });

    return { filter: result };
  }
}
