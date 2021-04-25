import * as fs from 'fs';
import * as path from 'path';

import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const resolvers = {
	Query: {
		info: () => `This is the API of a Hackernews Clone`,
		feed: async (parent, args, context) => {
			return context.prisma.link.findMany()
		}
	},
	Mutation: {
		post: (parent, args, context, info) => {
			const newLink = context.prisma.link.create({
				data: {
					url: args.url,
			  		description: args.description
				}
		  	});

			return newLink
		}
	}
}

const server = new ApolloServer({
	context: {
		prisma
	},	
	resolvers,
	typeDefs: fs.readFileSync(
		path.join(__dirname, 'schema.graphql'),
		'utf8'
	),
})

server
	.listen()
	.then((response) =>
		console.log(`Server is running on ${response.url}`)
	);