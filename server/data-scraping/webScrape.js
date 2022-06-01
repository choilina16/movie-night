const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer')

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
      
      const singleMovieURL = 'https://letterboxd.com/film/gilda';
      const movieData =  await axios.get(singleMovieURL);
      console.log(movieData);

      const $ = cheerio.load(movieData);
      console.log($)
      const movieEntry = {
        title: "",
        year: "",
        tmdb: "",
        poster: "",
      }
      
      const title = $('h1.headline-1');
      console.log(title);
      movieEntry.title = title.text;
      movieEntry.year = $('h1 .headline-1', 'small .number').attr('a');
      movieEntry.tmdb = $(".text-link.text-footer").children().next().attr('h ref');
      movieEntry.poster = $(".poster .film-poster").children().first().attr('src');
      // movieEntry.year = 

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
scrapeData();

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

// scrapeWatchlist(testURL);

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

// async function autoScroll(page){
//   await page.evaluate(async () => {
//       await new Promise((resolve, reject) => {
//           var totalHeight = 0;
//           var distance = 100;
//           var timer = setInterval(() => {
//               var scrollHeight = document.body.scrollHeight;
//               window.scrollBy(0, distance);
//               totalHeight += distance;

//               if(totalHeight >= scrollHeight - window.innerHeight){
//                   clearInterval(timer);
//                   resolve();
//               }
//           }, 100);
//       });
//   });
// }