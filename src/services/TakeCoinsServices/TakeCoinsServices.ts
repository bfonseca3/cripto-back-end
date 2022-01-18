import { prisma } from "../../utils/prisma";

export class TakeCoinsServices {
  async execute() {
    const result1 = await prisma.coins.findMany({
      take: 4000,
      include: {
        history: {
          orderBy: {
            date: "desc",
          },
          take: 1,
        },
      },
    });

    // const result2 = await prisma.coins.findMany({
    //   skip: 3001,
    //   take: 3000,
    //   include: {
    //     history: {
    //       orderBy: {
    //         date: "desc",
    //       },
    //       take: 1,
    //     },
    //   },
    // });
    // const result3 = await prisma.coins.findMany({
    //   skip: 6000,
    //   take: 3200,
    //   include: {
    //     history: {
    //       orderBy: {
    //         date: "desc",
    //       },
    //       take: 1,
    //     },
    //   },
    // });

    const result = [...result1];

    return result;
  }
}
