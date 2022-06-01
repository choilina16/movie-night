const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    movies: [Movie]
  }
  type Movie {
    movieId: ID!
    poster_url: String
    movie_url: String
    title: String
    year: String
    cast: String
    genre: String
    language: String
    rating: String
    synopsis: String
    director String
  }

  type Query {
    user: [User]
    movies: Movie
  }

`;
module.exports = typeDefs;
