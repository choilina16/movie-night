import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user {
    user {
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
