export const groups = async (_parent, _args, context) => {
    return context.prisma.group.findMany();
};

export const ready = () => {
    return 'top-5-daily-server';
};

export const topics = async (_parent, _args, context) => {
    return context.prisma.topic.findMany();
};

export const user = async (_parent, _args, context) => {
    return context.prisma.user.findUnique({ where: { id: context.userId } });
};
