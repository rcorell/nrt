import { Resolver } from './resolverTypes';

export const groups: Resolver = (parent, _args, context) => {
    return context.prisma.user.findUnique({ where: { id: parent.id } }).groups();
};

export const groupsCreated: Resolver = (parent, _args, context) => {
    return context.prisma.user.findUnique({ where: { id: parent.id } }).groupsCreated();
};

export const topics: Resolver = (parent, _args, context) => {
    return context.prisma.user.findUnique({ where: { id: parent.id } }).topics();
};
