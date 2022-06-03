//const puppeteer = require("puppeteer");
import { useMutation } from '@apollo/client';
import { ADD_USER } from './mutations';
const axios = require("axios");
const cheerio = require("cheerio");

//const testURL = "https://letterboxd.com/noahneville/watchlist/";

async function cheerioWatchlist(username) {
  const watchlistURL = "https://letterboxd.com/" + username + "/watchlist/";
  const { data } = await axios.get(watchlistURL);

  const $ = cheerio.load(data);
  const filmList = $(".film-poster");
  // Stores data for all films in watchlist
  const watchlist = [];

  // Use .each method to loop through the li we selected
  filmList.each((idx, el) => {
    // Object holding data for each movie
    const movie = $(el, "data-film-name").attr("data-film-slug");
    const movieURL = "https://letterboxd.com" + movie;
    watchlist.push(movieURL);
  });
  // Logs countries array to the console
  console.log(watchlist);

  console.log("Watchlist Scrape Complete.");
  console.log(`Starting individual data scrape on all ${watchlist.length} films in your watchlist.`);
  scrapeMoviePage(username, watchlist);

  // TODO: export
}

cheerioWatchlist("noahneville");

async function scrapeMoviePage(username, array) {
  //const singleMovieURL = "https://letterboxd.com/film/blade-runner/";

  const movieSchema = [];
  const total = array.length;

  for (let i = 0; i < array.length; i++) {
    const { data } = await axios.get(array[i]);
    const $ = cheerio.load(data);

    const movieEntry = {
      poster_url: "",
      movie_url: "",
      title: "",
      tmdb_id: "",
      year: "",
      cast: [],
      genres: [],
      language: [],
      rating: "",
      synopsis: "",
      director: "",
      runtime: "",
    };

    const cast = [];
    const genres = [];
    const languages = [];

    movieEntry.poster_url = $('meta[property="og:image"]').attr("content");
    movieEntry.movie_url = $('meta[name="twitter:url"]').attr("content");
    movieEntry.title = $('meta[name="twitter:title"]').attr("content");
    movieEntry.tmdb_id = $("body").attr("data-tmdb-id");
    movieEntry.year = $('small[class="number"]').children("a").text();

    // const castList = $('#tab-cast').children(".cast-list").children('p').children('a');
    const castList = $(".cast-list").children("p").children("a");
    castList.each((idx, el) => {
      const castMember = $(el).text();
      cast.push(castMember);
    });
    movieEntry.cast = cast;

    const genreList = $("#tab-genres").children(".text-sluglist").first().children("p").children("a");
    genreList.each((idx, el) => {
      const genreEl = $(el).text();
      genres.push(genreEl);
    });
    movieEntry.genres = genres;

    const languageList = $("#tab-details").children(".text-sluglist").last().children("p").children("a");
    languageList.each((idx, el) => {
      const languageEl = $(el).text();
      languages.push(languageEl);
    });
    movieEntry.language = languages;

    movieEntry.rating = $('meta[name="twitter:data2"]').attr("content").substr(0, 4);
    movieEntry.synopsis = $('meta[property="og:description"]').attr("content");
    movieEntry.director = $('meta[name="twitter:data1"]').attr("content");
    movieEntry.runtime = $(".text-footer").text().trim().substr(0, 8).trimEnd();

    movieSchema.push(movieEntry);
    console.log(`Data scraped for ${i + 1} out ${total} films in your watchlist.`);
  }

  //console.log(movieSchema);

  const userModel = {
    username: username,
    savedMovies: movieSchema,
  };

  // console.log(userModel);

  useMutation(ADD_USER);

  // Write countries array in countries.json file
  // fs.writeFile("films.json", JSON.stringify(films, null, 2), (err) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  // }
  //console.log("Successfully written data to file");
}

module.exports = cheerioWatchlist;