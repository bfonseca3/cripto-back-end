import { prisma } from "../../utils/prisma";

export class TakeCoinsServices {
  async execute() {
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

    return result;
  }
}
