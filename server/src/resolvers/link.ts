export const postedBy = (parent, args, context) => {
    return context.prisma.link.findUnique({ where: { id: parent.id } }).postedBy();
};
