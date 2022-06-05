import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: [String!]) {
    user(username: $username) {
      username
      savedMovies {
        poster_url
        movie_url
        title
        tmdb_id
        year
        cast
        genre
        language
        rating
        synopsis
        director
        runtime
      }
    }
  }
`;

export const QUERY_USER_TITLES = gql`
  query user($username: String!) {
    user(username: $username) {
      username
      savedMovies {
        title
      }
    }
  }
`;
