import { Resolver } from './resolverTypes';

export const author: Resolver = (parent, _args, context) => {
    return context.prisma.topic.findUnique({ where: { id: parent.id } }).author();
};

export const group: Resolver = (parent, _args, context) => {
    return context.prisma.topic.findUnique({ where: { id: parent.id } }).group();
};
