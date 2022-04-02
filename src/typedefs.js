const gql = require('graphql-tag')

module.exports = gql`
  enum Role {
    ADMIN
    MEMBER
    GUEST
  }

  type User {
    id: ID!
    email: String!
    avatar: String!
    verified: Boolean!
    createdAt: String!
    posts: [Post]!
    role: Role!
    settings: Settings!
  }

  type Post {
    id: ID!
    message: String!
    author: User!
    createdAt: String!
    likes: Int!
    views: Int!
  }

  type Settings {
    id: ID!
    user: User!
    # theme: Theme
    emailNotifications: Boolean!
    pushNotifications: Boolean!
  }

  type Query {
    me: User!
    posts: [Post]!
  }
`