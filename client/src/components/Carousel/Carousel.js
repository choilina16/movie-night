import * as React from "react";
import "./carousel.css";
import { Carousel } from "react-bootstrap";
import InputBox from "../InputBox/InputBox";
import Grid from "@mui/material/Grid";
import { requirePropFactory } from "@mui/material";
require('dotenv').config();
const api_key = process.env.REACT_APP_API_KEY

console.log(process.env.REACT_APP_API_KEY)


function AppCarousel() {
  const [movieList, setMovieList] = React.useState([]);

  const getMovies = async () => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=10c8394b98fc5c8ccc47c5ae2b948bc9&language=en-US&page=1'
    )
      .then((response) => response.json())
      .then((data) => {
        const movie_list = [];
        for (const result of data.results) {
          movie_list.push(
            'https://image.tmdb.org/t/p/original' + result.poster_path
          );
        }
        setMovieList(movie_list);
      });
  };

  React.useEffect(() => {
    getMovies();
  }, []);

  return (
    // api call to get the popular movies tmdb- front end js file
    // https://developers.themoviedb.org/3/movies/get-movie-details
    // key: 10c8394b98fc5c8ccc47c5ae2b948bc9
    // get popular
    // https://api.themoviedb.org/3/movie/popular?api_key=10c8394b98fc5c8ccc47c5ae2b948bc9&language=en-US&page=1

    <div className="carousel-input-container">
      {/* CAROUSEL */}
      <Grid container spacing={1}>
        <div className="carousel-txt-container">
          <p className="carousel-text">
            Welcome to
            <span className="day">
              MOVIE<span className="night">NIGHT</span>
            </span>
          </p>
        </div>
        <div className="popular-movies">
          <p>CURRENT POPULAR MOVIES</p>
        </div>
        <Grid item lg={12}>
          <div className="carousel-container">
            <Carousel>
              {movieList.map(function (movie) {
                return (
                  <Carousel.Item interval={500}>
                    <img className="d-block w-500 img" src={movie} alt="haha" />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </Grid>

        {/* INPUTBOX */}
        <Grid item lg={12}>
          <div className="input-box-container">
            <InputBox />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default AppCarousel;
