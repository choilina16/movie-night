const { Schema, model } = require('mongoose')


const movieSchema = require('./Movie')

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      // set savedMovies to be an array of data that adheres to the movieSchema
      movies: [movieSchema],
    },
    // set this to use virtual below
    {
      toJSON: {
        virtuals: true,
      },
    }
  );

const User = model('User', userSchema);

module.exports = User;
