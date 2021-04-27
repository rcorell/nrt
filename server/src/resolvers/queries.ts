export const topics = async (_parent, _args, context) => {
    return context.prisma.topic.findMany();
};

export const info = () => {
    return 'Some info';
};
