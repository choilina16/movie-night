// write & get from database

const { Movie, User } = require('../models');

const resolvers = {
    Query: {
        user: async (parent, { username }) => {
            return await User.findById(username).populate('movies');
          },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        }
    },

};

module.exports = resolvers;


// when adding username it will start the get right away because it takes a long time