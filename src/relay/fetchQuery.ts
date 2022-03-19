import { fetchQuery as relayFetchQuery, GraphQLTaggedNode, OperationType, Variables } from 'relay-runtime';

import { initEnvironment } from './environment';

export function fetchQuery<T extends OperationType>(query: GraphQLTaggedNode, variables: Variables = {}) {
  const environment = initEnvironment();

  return relayFetchQuery<T>(environment, query, variables).toPromise();
}
