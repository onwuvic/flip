const gql = require('graphql-tag')

module.exports = gql`
  type User {
    id: ID!
    email: String!
    avatar: String!
    verified: Boolean!
    createdAt: String!
    posts: [Post]!
    # role: Role!
    # settings: Settings!
  }

  type Post {
    id: ID!
    message: String!
    author: User!
    createdAt: String!
    likes: Int!
    views: Int!
  }

  type Query {
    me: User!
    posts: [Post]!
  }
`