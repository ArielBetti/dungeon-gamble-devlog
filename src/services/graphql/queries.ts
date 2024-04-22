import { ApolloQueryResult, gql } from "@apollo/client";
import { client } from "./client";
import { IGetPost, IGetPosts } from "./types";

export const getPosts: Promise<ApolloQueryResult<IGetPosts>> = client.query({
  query: gql`
  {
    repository(owner: "ArielBetti", name: "dungeon-gamble-devlog") {
      issues(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
        edges {
          node {
            number
            title,
            id,
            createdAt,
            updatedAt
          }
        }
      }
    }
  }  
  `,
});

export const getPost: (number: number) => Promise<ApolloQueryResult<IGetPost>> = (number: number) => client.query({
  query: gql`
  {
    repository(owner: "ArielBetti", name: "dungeon-gamble-devlog") {
      issue(number: ${number}) {
        author {
          login,
          avatarUrl
        },
        title,
        body,
        id,
        createdAt,
        updatedAt,
      }
    }
  }
  `,
});