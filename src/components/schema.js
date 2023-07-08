
import { gql } from "@apollo/client";
export const GET_USER_PROFILE = gql`
  query GetUserProfile($username: String!) {
    user(login: $username) {
      avatarUrl
      name
      login
      bio
      repositories(first: 100, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          name
          url
        }
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
    }
  }
`;
