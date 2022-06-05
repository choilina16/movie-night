// write & get from database
const { Movie, User } = require('../models');
const {scrapeWatchlist, scrapeMoviePage } = require('../data-scraping/webScrape');

const resolvers = {
    Query: {
        user: async (parent, {username}) => {
          const result =  await User.find({...username});
          //console.log(result);
          const unfilteredWatchlist = result.map(e => e.savedMovies);
          
          unfilteredWatchlist.flat();
          console.log(unfilteredWatchlist);
          // const array = [];
          // for(let i = 0; i < unfilteredWatchlist.length; i++) {
          //   array.push(unfilteredWatchlist[i]);
          // }
          //console.log(array)
            return 'test';
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


// TODO: call webscrape in here. In InputBox in front end we'll call addUser mutation, 
// which will trigger this and do the webscrape on the back end. 
// 

// when adding username it will start the get right away because it takes a long time
