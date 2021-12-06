module.exports = {
  Query: {
    me() {
      return {
        id: '1',
        email: 'john.doe@we.com',
        avatar: 'https://www.gravatar.com/avatar/d4c74594d841139328695756648b6bd6',
        verified: true,
        createdAt: '2018-04-04T18:25:43.511Z'
      };
    },
    posts: () => {
      return [{
        id: '7388382dhhd',
        message: 'This should be it all day',
        createdAt: '2020-01-01T00:00:00.000Z',
        likes: 6,
        views: 10,
      }]
    }
  },
  User: {
    posts: (parent, args, ctx, info) => {
      return [
        {
          id: '7388382dhhd',
          message: 'This should be it all day 2 6',
          author: 'John Doe',
          createdAt: '2020-01-01T00:00:00.000Z',
          likes: 6,
          views: 10,
        }
      ]
    }
  },
  Post: {
    author: (parent, args, ctx, info) => {
      return {
        id: '1',
        email: 'john.doe@we.com',
        avatar: 'https://www.gravatar.com/avatar/d4c74594d841139328695756648b6bd6',
        verified: true,
        createdAt: '2018-04-04T18:25:43.511Z',
      }
    }
  }
}