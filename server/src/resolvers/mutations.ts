import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import * as jsonwebtoken from 'jsonwebtoken';

import { APP_SECRET } from '../utils';

export const signup = async (_parent, args, context) => {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.user.create({ data: { ...args, password } });
    const token = jsonwebtoken.sign({ userId: user.id }, APP_SECRET);

    return {
        token,
        user
    };
};

export const login = async (_parent, args, context) => {
    const user = await context.prisma.user.findUnique({ where: { email: args.email } });
    if (!user) {
        throw new Error('No such user found');
    }

    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) {
        throw new Error('Invalid password');
    }

    const token = jsonwebtoken.sign({ userId: user.id }, APP_SECRET);

    return {
        token,
        user
    };
};

export const createTopic = async (_parent, args, context) => {
    const { userId } = context;

    return await context.prisma.topic.create({
        data: {
            author: { connect: { id: userId } },
            description: args.description,
            group: { connect: { id: Number(args.groupId) } },
            title: args.title
        }
    });
};

export const createGroup = async (_parent, args, context) => {
    const { userId } = context;

    return await context.prisma.group.create({
        data: {
            creator: { connect: { id: userId } },
            description: args.description,
            name: args.name
        }
    });
};

export const joinGroup = async (_parent, args, context) => {
    const prisma: PrismaClient = context.prisma;

    await prisma.user.update({
        data: {
            groups: {
                connect: [
                    {
                        id: Number(args.groupId)
                    }
                ]
            }
        },
        where: { id: context.userId }
    });

    return args.groupId;
};
