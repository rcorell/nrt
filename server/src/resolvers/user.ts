export const topics = (parent, args, context) => {
    return context.prisma.user.findUnique({ where: { id: parent.id } }).topics();
};
