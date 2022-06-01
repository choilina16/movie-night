const { Schema, model } = require('mongoose')

const matchupSchema = new Schema({
  movies: [
    {
      type: String,
    },
  ],
    movie_url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    watchlist: {
      type: Boolean,
      required: true
    },
    film_id: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    cast: {
      type: String,
      required: true
    },
    genres: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    rating: {
      type: String,
      required: true
    },
    synopsis: {
      type: String,
      required: true
    },
    director: {
      type: String,
      required: true
    },
    runtime: {
      type: String,
      required: true
    },
});
  



module.exports = Movie(matchupSchema);
