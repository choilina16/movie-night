const { schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const movieSchema = require('./Movie')

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      // set savedMovies to be an array of data that adheres to the movieSchema
      savedMovies: [movieSchema],
    },
    // set this to use virtual below
    {
      toJSON: {
        virtuals: true,
      },
    }
  );
module.exports = User(userSchema);
