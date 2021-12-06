const { ApolloServer } = require('apollo-server')
const typeDefs = require('./typedefs')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen(4000).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`)
})
