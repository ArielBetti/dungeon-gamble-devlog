import { gql } from "@apollo/client";
import { client } from "./client";

export const getPosts = client.query({
  query: gql`
    {
      user(login: "arielbetti") {
        repository(owner: "arielbetti", name: "dungeon-gamble-devlog") {
          issues {
            edges{
              node {
                number,
                title,
              }
            }
          }
        }
      }
  `,
});

export const getPost = (id: number) => client.query({
  query: gql`
  {
    repository(owner: "arielbetti", name: "dungeon-gamble-devlog") {
      issue(number: ${id}) {
        number
        title
        createdAt
        body
      }
    }
  }
  `,
});