import {
  fetchQuery as relayFetchQuery,
  GraphQLTaggedNode,
  OperationType,
  Variables,
} from 'relay-runtime';

import { environment } from './environment';

export function fetchQuery<T extends OperationType>(
  query: GraphQLTaggedNode,
  variables: Variables = {}
) {
  return relayFetchQuery<T>(environment, query, variables).toPromise();
}
