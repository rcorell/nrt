export const feed = async (_parent, _args, context) => {
    return context.prisma.link.findMany();
};

export const info = () => {
    return 'Some info';
};
