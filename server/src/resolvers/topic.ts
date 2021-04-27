export const author = (parent, _args, context) => {
    return context.prisma.topic.findUnique({ where: { id: parent.id } }).author();
};
