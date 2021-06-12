import { PrismaClient } from '@prisma/client';

export const creator = (parent, _args, context) => {
    return context.prisma.user.findUnique({ where: { id: parent.creatorId } });
};

export const topics = (parent, _args, context) => {
    const prisma: PrismaClient = context.prisma;

    return prisma.topic.findMany({ where: { groupId: parent.id } });
};

export const users = (parent, _args, context) => {
    const prisma: PrismaClient = context.prisma;

    return prisma.group.findUnique({ where: { id: parent.id } }).users();
};
