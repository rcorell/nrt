import { Resolver } from './resolverTypes';

export const creator: Resolver = (parent, _args, context) => {
    return context.prisma.user.findUnique({ where: { id: parent.creatorId } });
};

export const topics: Resolver = (parent, _args, context) => {
    return context.prisma.topic.findMany({ where: { groupId: parent.id } });
};

export const users: Resolver = (parent, _args, context) => {
    return context.prisma.group.findUnique({ where: { id: parent.id } }).users();
};
