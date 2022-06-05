// write & get from database
const { Movie, User } = require('../models');
const {scrapeWatchlist, scrapeMoviePage } = require('../data-scraping/webScrape');

const resolvers = {
    Query: {
        user: async (parent, {username}) => {
          const result =  await User.find({username});
          console.log(result);
          const array = result.map(e => e.savedMovies);
          
          const unfilteredWatchlist = array.flat(3);
          console.log(unfilteredWatchlist);
          // const array = [];
          // for(let i = 0; i < unfilteredWatchlist.length; i++) {
          //   array.push(unfilteredWatchlist[i]);
          // }
          //console.log(array)
            return unfilteredWatchlist;
        },
      },
    
    Mutation: {
        addUser: async (parent, args) => {
          const username = args.username;
          const data = await scrapeWatchlist(username);
          console.log("what is this", args);
          console.log(data);
          const userModel = await scrapeMoviePage(username, data)
          console.log(userModel);
          const user = await User.create(userModel);
          return user;
        }
    },

};

module.exports = resolvers;



// when adding username it will start the get right away because it takes a long time
