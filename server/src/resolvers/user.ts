export const groups = (parent, _args, context) => {
    return context.prisma.user.findUnique({ where: { id: parent.id } }).groups();
};

export const topics = (parent, _args, context) => {
    return context.prisma.user.findUnique({ where: { id: parent.id } }).topics();
};
