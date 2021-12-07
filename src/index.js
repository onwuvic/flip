const { ApolloServer } = require('apollo-server')
const typeDefs = require('./typedefs')
const resolvers = require('./resolvers')
const db = require('./db')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context({ req, connection }) {
    const context = { ...db }
    return { ...context }
  },
})

server.listen(4000).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`)
})
