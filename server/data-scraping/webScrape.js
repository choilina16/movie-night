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
    const $ = cheerio.load(data);
    const filmList = $(".film-poster");
    // console.log(filmList);
    // Stores data for all countries
    const films = [];
    // Use .each method to loop through the li we selected
    filmList.each((idx, el) => {
     // Object holding data for each movie
    //  console.log(el);
      const movie = { 
        name: "", 
        slug: "", 
        year: "",
        img: ""
      };
      // Select the text content of a and span elements
      // Store the textcontent in the above object .attr('.data-film-name')
      movie.name = $(el , 'data-film-name').attr('data-film-slug');
      movie.slug = $(el).text('data-film-link');
      movie.year = $(el).attr('.data-film-release-year');
      movie.img = $( el , 'data-poster-url').attr();

     
      // Populate countries array with country data .val('data-poster-url');
      films.push(movie);
    });
    // Logs countries array to the console
    console.dir(films);
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
 