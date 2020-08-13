import gql from 'graphql-tag';

/**
 * Query explorer: https://thegraph.com/explorer/subgraph/protofire/makerdao-governance
 */

export const EXAMPLE = gql`
  query voterRegistries($first: Int!) {
    voterRegistries(first: $first) {
      id
      coldAddress
      hotAddress
      voteProxies {
        id
      }
    }
    voteProxies(first: $first) {
      id
      locked
      owner {
        id
      }
      votedSlate {
        id
      }
    }
  }
`;
