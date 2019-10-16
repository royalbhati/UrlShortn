import { gql } from "apollo-server-express";

export const url = gql`
  type Query {
    urls: [Url!]!
  }

  type Url {
    originalUrl: String!
    shortName: String!
  }
  type Response {
    msg: String!
    data: [Url!]!
  }

  type Mutation {
    createShort(originalUrl: String!, shortName: String!): Response!
  }
`;
