const axios = require('axios');
const cheerio = require('cheerio');

const testURL = 'https://letterboxd.com/noahneville/watchlist/';

// axios(testURL)
//   .then(response => {
//     const html = response.data;
//     console.log(html);
//     const cheer = cheerio.load(html);
//     const movies = [];

//      cheer('.data-film-name', html).each(function() {
//       const filmName = cheer(this).text();
//       // const filmId = cheer('.data-film-id').text();
//       movies.push({filmName, filmId})
//     })
//   });

async function scrapeData() {

    const {data} = await axios.get(testURL);
    //console.log(data);
    const $ = cheerio.load(data);
    const filmList = $(".film-poster");
    // Stores data for all films in watchlist
    const watchlist = [];
    const movieModel = {};
    // Use .each method to loop through the li we selected
    filmList.each((idx, el) => {
     // Object holding data for each movie
      const movie = $(el , 'data-film-name').attr('data-film-slug');
      // Populate films  array with individual movie data
      watchlist.push(movie);
    });
    // Logs countries array to the console
    console.log(watchlist);

    for(let i = 0; i < watchlist.length; i++) {
      console.log(watchlist[i]);

      const singleMovieURL = "https://letterboxd.com" + watchlist[i];
      console.log(singleMovieURL);
      
      const movieData =  await axios.get(singleMovieURL);
      // console.log(movieData);

      const $$ = cheerio.load(movieData);

      const movieEntry = {
        title: "",
        year: ""
      }

      movieEntry.title = $$("h1 .headline-1");
      // movieEntry.year = $$('h1 .headline-1', 'small .number').attr(a);

      console.log(movieEntry);



    }
    // Write countries array in countries.json file
    // fs.writeFile("films.json", JSON.stringify(films, null, 2), (err) => {
    //   if (err) {
    //     console.error(err);
    //     return;
      // }
      console.log("Successfully written data to file");
    }
 
// Invoke the above function
scrapeData();
 