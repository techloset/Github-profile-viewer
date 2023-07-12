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


export const GET_REPOSITORY_DETAILS = gql`
  query GetRepositoryDetails($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    name
    description
    createdAt
    defaultBranchRef {
      name
    }
    stargazers {
      totalCount
    }
    watchers {
      totalCount
    }
    commits: ref(qualifiedName: "master") {
      target{
        ... on Commit {
          history {
            totalCount
            nodes {
              message
              committedDate
              author {
                name
                email
                date
              }
            }
          }
        }
      }
    }
    branches: refs(refPrefix: "refs/heads/", first: 10) {
      totalCount
      nodes {
        name
        target {
          ... on Commit {
            history {
              totalCount
            }
          }
        }
      }
    }
  }
}

`;
