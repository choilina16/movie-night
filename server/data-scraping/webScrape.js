const axios = require('axios');
const cheerio = require('cheerio');
// const puppeteer = require("puppeteer");

//const testURL = "https://letterboxd.com/noahneville/watchlist/";
// WelcomeToChilis: anthony's username

async function scrapeWatchlist(username) {
  console.log(username);
  try {
    // if(username) {
    console.log(username);
    const watchlistURL = 'https://letterboxd.com/' + username + '/watchlist/';
    const { data } = await axios.get(watchlistURL);
    //let something = await axios.get(watchlistURL);
    //console.log(something);
    //  return data;
    // }

    const $ = cheerio.load(data);
    const filmList = $('.film-poster');
    // Stores data for all films in watchlist
    const watchlist = [];

    // Use .each method to loop through the li we selected
    filmList.each((idx, el) => {
      // Object holding data for each movie
      const movie = $(el, 'data-film-name').attr('data-film-slug');
      const movieURL = 'https://letterboxd.com' + movie;
      watchlist.push(movieURL);
    });

    console.log(watchlist);

    console.log('Watchlist Scrape Complete.');
    console.log(
      `Starting individual data scrape on all ${watchlist.length} films in your watchlist.`
    );
    //await axios.get(watchlistURL).then(res => {console.log("is this undefined", res)}).catch(err);
    scrapeMoviePage(username, watchlist);
    return watchlist;
  } catch (err) {
    console.log(err);
  }
}

scrapeWatchlist('jimbolikesmovie');

async function scrapeMoviePage(username, array) {
  //const singleMovieURL = "https://letterboxd.com/film/blade-runner/";

  const movieSchema = [];
  const total = array.length;

  for (let i = 0; i < array.length; i++) {
    const { data } = await axios.get(array[i]);
    const $ = cheerio.load(data);

    const movieEntry = {
      poster_url: '',
      movie_url: '',
      title: '',
      tmdb_id: '',
      year: '',
      cast: [],
      genres: [],
      language: [],
      rating: '',
      synopsis: '',
      director: '',
      runtime: '',
    };

    const cast = [];
    const genres = [];
    const languages = [];

    //movieEntry.poster_url = $('meta[property="og:image"]').attr('content');
    movieEntry.poster_url = $('img[class="image"]').first().attr('src');
    movieEntry.movie_url = $('meta[name="twitter:url"]').attr('content');
    movieEntry.title = $('meta[name="twitter:title"]').attr('content');
    movieEntry.tmdb_id = $('body').attr('data-tmdb-id');
    movieEntry.year = $('small[class="number"]').children('a').text();

    // const castList = $('#tab-cast').children(".cast-list").children('p').children('a');
    const castList = $('.cast-list').children('p').children('a');
    castList.each((idx, el) => {
      const castMember = $(el).text();
      cast.push(castMember);
    });
    movieEntry.cast = cast;

    const genreList = $('#tab-genres')
      .children('.text-sluglist')
      .first()
      .children('p')
      .children('a');
    genreList.each((idx, el) => {
      const genreEl = $(el).text();
      genres.push(genreEl);
    });
    movieEntry.genres = genres;

    const languageList = $('#tab-details')
      .children('.text-sluglist')
      .last()
      .children('p')
      .children('a');
    languageList.each((idx, el) => {
      const languageEl = $(el).text();
      languages.push(languageEl);
    });
    movieEntry.language = languages;

    movieEntry.rating = $('meta[name="twitter:data2"]')
      .attr('content')
      .substr(0, 4);
    movieEntry.synopsis = $('meta[property="og:description"]').attr('content');
    movieEntry.director = $('meta[name="twitter:data1"]').attr('content');
    movieEntry.runtime = $('.text-footer').text().trim().substr(0, 8).trimEnd();

    movieSchema.push(movieEntry);
    console.log(
      `Data scraped for ${i + 1} out ${total} films in your watchlist.`
    );
  }

  //console.log(movieSchema);

  const userModel = {
    username: username,
    savedMovies: movieSchema,
  };

  console.log(userModel);

  return userModel;
}

module.exports = { scrapeWatchlist, scrapeMoviePage };

// Code Graveyard:

// function to get page length
// const browser = await puppeteer.launch({headless: false});
//   const page = await browser.newPage();
//   await page.goto(url);

//   const [el] = page.$x('*[@id="content"]/div/div[1]/section/div[2]/div[3]/ul/li[5]/a');
//   console.log(el);
//   return el.innerHTML;

// const filmList = $(".film-poster");
// // Stores data for all films in watchlist
// const watchlist = [];
// const movieModel = {};
// // Use .each method to loop through the li we selected
// filmList.each((idx, el) => {
//  // Object holding data for each movie
//   const movie = $(el , 'data-film-name').attr('data-film-slug');

// async function scrapeWatchlist(url) {
//   const browser = await puppeteer.launch({
//     headless: false,
//     defaultViewport: false,
//   });
//   const page = await browser.newPage();
//   await page.goto(url, { waitUntil: "networkidle2" });
//   //console.log(page)

//   //const watchlistLinks = await page.$(".film-poster");

//   // const watchlistLinks = await page.$$eval('.film-poster > .react-component .poster', (watchlistLinks) =>
//   //   watchlistLinks.map((watchlistLink) => watchlistLink.getAttribute('data-film-link')));

//   //*[@id="content"]/div/div[1]/section/ul/li[1]/div/div/a

//   // const watchlistLinks = await Promise.all((await page.$$('.has-menu')).map(async a => {
//   //   return await (await a.getProperty('href')).jsonValue();
//   // }));

//   // const watchlistLinks = await Promise.all((await page.$$('.has-menu')).map(async a => {
//   //   return await (await a.getProperty('href')).jsonValue();
//   // }));

//   // let watchlistLinks = await page.$$eval('a.has-menu', (titleLinkEls) => {
//   //   return titleLinkEls.map((titleLinkEl) => {
//   //       let link = titleLinkEl.getAttribute('href')
//   //       return link;
//   //   });
//   // });

//   const watchlistLinks = await page.evaluate(() => {
//     let el = document.querySelector(".has-menu");
//     console.log(el);
//     let linkEl = el.getAttribute("href");

//     return linkEl;
//   });

//   console.log(watchlistLinks);

//   // const getWatchList = await page.evaluate(() => {
//   //   const entry = page.$$('.data-film-link');
//   //   console.log(entry);
//   //   return entry.value;
//   // })

//   // console.log(getWatchList);
//   await browser.close();
// }

//scrapeWatchlist(testURL);

//*[@id="content"]/div/div[1]/section/ul/li[96]/div

// autoscroll code i found here: https://stackoverflow.com/questions/51529332/puppeteer-scroll-down-until-you-cant-anymore
// (async () => {
//   const browser = await puppeteer.launch({
//       headless: false
//   });
//   const page = await browser.newPage();
//   await page.goto('https://www.yoursite.com');
//   await page.setViewport({
//       width: 1200,
//       height: 800
//   });

//   await autoScroll(page);

//   await page.screenshot({
//       path: 'yoursite.png',
//       fullPage: true
//   });

//   await browser.close();
// })();

// async function autoScroll(page) {
//   await page.evaluate(async () => {
//     await new Promise((resolve, reject) => {
//       var totalHeight = 0;
//       var distance = 100;
//       var timer = setInterval(() => {
//         var scrollHeight = document.body.scrollHeight;
//         window.scrollBy(0, distance);
//         totalHeight += distance;

//         if (totalHeight >= scrollHeight - window.innerHeight) {
//           clearInterval(timer);
//           resolve();
//         }
//       }, 100);
//     });
//   });
// }
