import 'reflect-metadata';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
// import * as fs from 'fs';
// import { typeDefs as scalarTypeDefs, resolvers as scalarResolvers } from 'graphql-scalars';
// import * as path from 'path';
import * as tq from 'type-graphql';

import { resolvers } from './generated';
import { SignupResolver } from './resolvers/mutations';
// import * as Query from './resolvers/queries';
// import * as Topic from './resolvers/topic';
// import * as User from './resolvers/user';
import { getUserId } from './utils';

const runServer = async () => {
    const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });
    const schema = await tq.buildSchema({ emitSchemaFile: true, resolvers: [...resolvers, SignupResolver] });

    const server = new ApolloServer({
        context: ({ req }) => {
            return {
                ...req,
                prisma,
                userId: req && req.headers.authorization ? getUserId(req) : null
            };
        },
        schema
    });

    server
        .listen()
        .then((response) => console.log(`Server is running on ${response.url}\n`, JSON.stringify(response)));
};

runServer();

// const coreTypeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8');

// const server = new ApolloServer({
//     context: ({ req }) => {
//         return {
//             ...req,
//             prisma,
//             userId: req && req.headers.authorization ? getUserId(req) : null
//         };
//     },
//     resolvers: {
//         Mutation,
//         Query,
//         Topic,
//         User,
//         ...scalarResolvers
//     },
//     typeDefs: [coreTypeDefs].concat(scalarTypeDefs)
// });
