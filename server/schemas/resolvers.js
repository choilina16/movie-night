// write & get from database
const { Movie, User } = require('../models');
const scrapeWatchlist = require('../data-scraping/webScrape');

const resolvers = {
    Query: {
        user: async () => {
          return await User.findOne({username: username});
        },
      },
    
    Mutation: {
        addUser: async (parent, args) => {
            const data = await scrapeWatchlist(args);

            const user = await User.create(data);
            return user;
        }
    },

};

module.exports = resolvers;


// TODO: call webscrape in here. In InputBox in front end we'll call addUser mutation, 
// which will trigger this and do the webscrape on the back end. 
// 

// when adding username it will start the get right away because it takes a long time
