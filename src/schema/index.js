const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');

//Schema types
const typeDefs = `
	type Link {
		id: ID!
		url: String!
		description: String!
	}

	type Query {
		allLinks: [Link!]!
	}

	type Mutation {
		createLink(url: String!, description: String!): Link
	}
`;

//Generates the schema object (GraphQLSchema) from typeDefs definitions
module.exports = makeExecutableSchema({typeDefs, resolvers});