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
    // Stores data for all films
    const films = [];
    // Use .each method to loop through the li we selected
    filmList.each((idx, el) => {
     // Object holding data for each movie
      const movie = $(el , 'data-film-name').attr('data-film-slug');
      // Populate films  array with individual movie data
      films.push(movie);
    });
    // Logs countries array to the console
    console.log(films);
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
 