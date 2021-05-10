export const topics = (parent, _args, context) => {
    return context.prisma.user.findUnique({ where: { id: parent.id } }).topics();
};
