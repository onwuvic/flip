const { ApolloServer } = require('apollo-server')
const typeDefs = require('./typedefs')
const resolvers = require('./resolvers')
const db = require('./db')
const { getUserFromToken, createToken } = require('./auth')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context({req, connection}) {
    // console.log("-------> connection", connection);
    // console.log("-------> req", req);
    const ctx = { ...db }
    // console.log("-------> ctx", ctx);
    const token = req.headers.authorization;
    const user = getUserFromToken(token);
    return { ...ctx, user, createToken };
  },
})

server.listen(4000).then(({url}) => {
  console.log(`🚀 Server ready at ${url}`)
})
