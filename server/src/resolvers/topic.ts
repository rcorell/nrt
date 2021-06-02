import { PrismaClient } from '@prisma/client';

export const author = (parent, _args, context) => {
    return context.prisma.topic.findUnique({ where: { id: parent.id } }).author();
};

export const group = (parent, _args, context) => {
    const prisma: PrismaClient = context.prisma;

    return prisma.topic.findUnique({ where: { id: parent.id } }).group();
};
