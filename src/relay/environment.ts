import { environments } from '@app/constants/environments';
import { Environment, FetchFunction, Network, RecordSource, Store } from 'relay-runtime';

const fetcher: FetchFunction = async (operation, variables) => {
  const response = await fetch(environments.CMS.API_URL, {
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  return response.json();
};

export const environment = new Environment({
  network: Network.create(fetcher),
  store: new Store(new RecordSource()),
});
