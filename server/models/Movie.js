const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  poster_url: {
    type: String,
    required: true,
  },
  movie_url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  // watchlist: {
  //   type: Boolean,
  //   required: true,
  // },
  tmdb_id: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  // array of strings
  cast: [
    {
      type: String,
      required: true,
    },
  ],
  // array of strings
  genres: [
    {
      type: String,
      required: true,
    },
  ],
  // array of strings
  language: [
    {
      type: String,
      required: true,
    },
  ],
  rating: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  runtime: {
    type: String,
    required: true,
  },
});

// array of string streaming services

module.exports = movieSchema;
