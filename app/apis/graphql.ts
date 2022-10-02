import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated";

const client = new GraphQLClient(
  "https://api-ap-northeast-1.hygraph.com/v2/ckrim45km0vs701xnges74w2u/master"
);
export const graphqlSDK = getSdk(client);
