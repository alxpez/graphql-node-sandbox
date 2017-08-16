const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema');
const PORT = 3300;


var app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(PORT, () => {
	console.log(`GraphQL server listening on port ${PORT}`);
});