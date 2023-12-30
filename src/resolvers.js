const { AuthenticationError } = require("apollo-server");

module.exports = {
  Query: {
    me(_, __, { user }) {
      return user;
    },
    posts: () => {
      return [
        {
          id: "7388382dhhd",
          message: "This should be it all day",
          createdAt: "2020-01-01T00:00:00.000Z",
          likes: 6,
          views: 10,
        },
      ];
    },
  },
  Mutation: {
    signup: (_, { input }, { models, createToken }) => {
      const existing = models.User.findOne({ email: input.email });

      if (existing) {
        throw new AuthenticationError("User already exists");
      }

      const user = models.User.create({
        ...input,
        verified: true,
        avatar: "https://www.gravatar.com/avatar/d4c74594d841139328695756648b6bd6",
      });

      const token = createToken(user);
      return { user, token };
    },
  },
  User: {
    posts: (parent, args, { models }, info) => {
      return models.Post.findMany({ author: "XUYFfLuWeJWrwPr4TRajF" });
    },
    settings: (parent, args, { models }, info) => {
      return models.Setting.findOne({ user: "XUYFfLuWeJWrwPr4TRajF" });
    },
  },
  Post: {
    author: (parent, args, { models }, info) => {
      return {
        id: "1",
        email: "john.doe@we.com",
        avatar:
          "https://www.gravatar.com/avatar/d4c74594d841139328695756648b6bd6",
        verified: true,
        createdAt: "2018-04-04T18:25:43.511Z",
      };
    },
  },
};
