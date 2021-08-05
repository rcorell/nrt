import { Resolver } from './resolverTypes';

export const groups: Resolver = (_parent, _args, context) => {
    return context.prisma.group.findMany();
};

export const ready = () => {
    return 'top-5-daily-server';
};

export const topics: Resolver = (_parent, args, context) => {
    let where;

    if (args.groupIds) {
        where = {
            where: {
                groupId: { in: args.groupIds }
            }
        };
    }

    return context.prisma.topic.findMany(where);
};

export const user: Resolver = (_parent, _args, context) => {
    return context.prisma.user.findUnique({ where: { id: Number(context.userId) } });
};
