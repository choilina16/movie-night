// write & get from database
const { Movie, User } = require('../models');
const {scrapeWatchlist, scrapeMoviePage } = require('../data-scraping/webScrape');

const resolvers = {
    Query: {
        user: async (parent, {username}) => {
          return  User.findOne({username});
        },
      },
    
    Mutation: {
        addUser: async (parent, args) => {
          const username = args.username;
          const data = await scrapeWatchlist(username);
          console.log("what is this", args);
          console.log(data);
          const userModel = await scrapeMoviePage(username, data)
          const user = await User.create(userModel);
          return user;
        }
    },

};

module.exports = resolvers;


// TODO: call webscrape in here. In InputBox in front end we'll call addUser mutation, 
// which will trigger this and do the webscrape on the back end. 
// 

// when adding username it will start the get right away because it takes a long time
