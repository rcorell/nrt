import { PrismaClient } from '@prisma/client';

export const topics = (parent, _args, context) => {
    const prisma: PrismaClient = context.prisma;

    return prisma.topic.findMany({ where: { groupId: parent.id } });
};
