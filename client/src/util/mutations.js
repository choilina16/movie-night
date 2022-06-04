import { gql } from '@apollo/client'

export const ADD_USER = gql`
  mutation addUser($username: String!) {
    addUser(username: $username) {

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

// mutation that sends username to back