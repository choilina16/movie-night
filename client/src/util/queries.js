import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user {
    user {
      username
      movies {
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
