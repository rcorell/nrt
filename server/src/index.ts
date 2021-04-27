import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
import * as fs from 'fs';
import * as path from 'path';

import * as Mutation from './resolvers/mutations';
import * as Query from './resolvers/queries';
import * as Topic from './resolvers/topic';
import * as User from './resolvers/user';
import { DateTimeScalar, getUserId } from './utils';

const prisma = new PrismaClient();

const resolvers = {
    DateTime: DateTimeScalar,
    Mutation,
    Query,
    Topic,
    User
};

const server = new ApolloServer({
    context: ({ req }) => {
        return {
            ...req,
            prisma,
            userId: req && req.headers.authorization ? getUserId(req) : null
        };
    },
    resolvers,
    typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8')
});

server.listen().then((response) => console.log(`Server is running on ${response.url}\n`, JSON.stringify(response)));
