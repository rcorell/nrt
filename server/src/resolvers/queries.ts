import { Context } from 'prisma';

export const groups = async (_parent, _args, context: Context) => {
    return context.prisma.group.findMany();
};

export const ready = () => {
    return 'top-5-daily-server';
};

export const topics = async (_parent, args, context: Context) => {
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

export const user = async (_parent, _args, context: Context) => {
    return context.prisma.user.findUnique({ where: { id: context.userId } });
};
