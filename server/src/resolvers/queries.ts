import { PrismaClient } from '@prisma/client';

export const groups = async (_parent, _args, context) => {
    const prisma: PrismaClient = context.prisma;

    return prisma.group.findMany();
};

export const ready = () => {
    return 'top-5-daily-server';
};

export const topics = async (_parent, args, context) => {
    const prisma: PrismaClient = context.prisma;

    let where;

    if (args.groupIds) {
        where = {
            where: {
                groupId: { in: args.groupIds }
            }
        };
    }

    return prisma.topic.findMany(where);
};

export const user = async (_parent, _args, context) => {
    return context.prisma.user.findUnique({ where: { id: context.userId } });
};
