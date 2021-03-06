const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    savedMovies: [Movie]
  }
  type Movie {
    poster_url: String!
    movie_url: String!
    title: String!
    tmdb_id: ID!
    year: String!
    cast: [String]
    genre: [String]
    language: [String]
    rating: String!
    synopsis: String!
    director: String!
    runtime: String!
  }

  type Query {
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!): User
  }
`;
module.exports = typeDefs;
