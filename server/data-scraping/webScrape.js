const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer')

const testURL = 'https://letterboxd.com/noahneville/watchlist/';


async function scrapeData() {

    // const {data} = await axios.get(testURL);
    // //console.log(data);
    // const $ = cheerio.load(data);
    // const filmList = $(".film-poster");
    // // Stores data for all films in watchlist
    // const watchlist = [];
    // const movieModel = {};
    // // Use .each method to loop through the li we selected
    // filmList.each((idx, el) => {
    //  // Object holding data for each movie
    //   const movie = $(el , 'data-film-name').attr('data-film-slug');
    //   // Populate films  array with individual movie data
    //   watchlist.push(movie);
    // });
    // // Logs countries array to the console
    // console.log(watchlist);

    // for(let i = 0; i < watchlist.length; i++) {
      
    //   const singleMovieURL = "https://letterboxd.com" + watchlist[i];
      
      const singleMovieURL = 'https://letterboxd.com/film/blade-runner/';
      const {data} =  await axios.get(singleMovieURL);
      //console.log(data);

      const $ = cheerio.load(data);
      // console.log($)
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
      }

      const cast = [];
      const genres = [];
      const languages = [];
      
      movieEntry.poster_url = $('meta[property="og:image"]').attr('content');
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

      
      const genreList = $('#tab-genres').children(".text-sluglist").first().children('p').children('a');
      genreList.each((idx, el) => {
        const genreEl = $(el).text();
        genres.push(genreEl);
      });
      movieEntry.genres = genres;

      const languageList = $('#tab-details').children('.text-sluglist').last().children('p').children('a');
      languageList.each((idx, el) => {
        const languageEl = $(el).text();
        languages.push(languageEl)
      });
      movieEntry.language = languages;

      // movieEntry.language = ;
      // TODO: Splice rating at the first space so we only get the number
      movieEntry.rating = $('meta[name="twitter:data2"]').attr('content');
      movieEntry.synopsis = $('meta[property="og:description"]').attr('content');
      movieEntry.director = $('meta[name="twitter:data1"]').attr('content');
      movieEntry.runtime = $('.text-footer').text();

      console.log(movieEntry);



    //}
    // Write countries array in countries.json file
    // fs.writeFile("films.json", JSON.stringify(films, null, 2), (err) => {
    //   if (err) {
    //     console.error(err);
    //     return;
      // }
      console.log("Successfully written data to file");
    }
 
// Invoke the above function
// scrapeData();

// TODO: add function to get page length
// const browser = await puppeteer.launch({headless: false});
//   const page = await browser.newPage();
//   await page.goto(url);

//   const [el] = page.$x('*[@id="content"]/div/div[1]/section/div[2]/div[3]/ul/li[5]/a');
//   console.log(el);
//   return el.innerHTML;
 


async function scrapeWatchlist(url){
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(url);

  const getWatchList = await page.evaluate(() => {
    const entry = document.querySelectorAll('//*[@id="content"]/div/div[1]/section/ul/li[96]/div')
    // data-film-link
    return entry.value;
  })

  console.log(getWatchList);
  await browser.close();
}

scrapeWatchlist(testURL);

//*[@id="content"]/div/div[1]/section/ul/li[96]/div

// TODO: autoscroll code i found here: https://stackoverflow.com/questions/51529332/puppeteer-scroll-down-until-you-cant-anymore
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

async function autoScroll(page){
  await page.evaluate(async () => {
      await new Promise((resolve, reject) => {
          var totalHeight = 0;
          var distance = 100;
          var timer = setInterval(() => {
              var scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;

              if(totalHeight >= scrollHeight - window.innerHeight){
                  clearInterval(timer);
                  resolve();
              }
          }, 100);
      });
  });
}