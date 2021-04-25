import * as fs from 'fs';
import * as path from 'path';

import { ApolloServer } from 'apollo-server';


let links = [{
	id: 'link-0',
	url: 'www.howtographql.com',
	description: 'Fullstack tutorial for GraphQL'
}];

let idCount = links.length;
const resolvers = {
	Query: {
		info: () => `This is the API of a Hackernews Clone`,
		feed: () => links,
	},
	Mutation: {
		post: (parent, args) => {
			const link = {
				id: `link-${idCount++}`,
				description: args.description,
				url: args.url,
			};
			links.push(link);

			return link
		}
	}
}

const server = new ApolloServer({
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