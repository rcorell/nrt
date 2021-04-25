import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

const resolvers = {
    Mutation: {
        post: (_parent, args, context) => {
            const newLink = context.prisma.link.create({
                data: {
                    description: args.description,
                    url: args.url
                }
            });

            return newLink;
        }
    },
    Query: {
        feed: async (_parent, _args, context) => {
            return context.prisma.link.findMany();
        },
        info: () => `This is the API of a Hackernews Clone`
    }
};

const server = new ApolloServer({
    context: {
        prisma
    },
    resolvers,
    typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8')
});

server.listen().then((response) => console.log(`Server is running on ${response.url}`));
