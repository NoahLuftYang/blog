import { isClient } from '@stillmine/utils';
import { environments } from '@app/constants/environments';
import fetch from 'cross-fetch';
import { useMemo } from 'react';
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

let relayEnvironment: Environment;

export function initEnvironment(initialRecords?: RecordSource) {
  const environment =
    relayEnvironment ??
    new Environment({
      network: Network.create(fetcher),
      store: new Store(new RecordSource()),
    });

  if (initialRecords != null) {
    environment.getStore().publish(initialRecords);
  }

  if (!isClient()) {
    return environment;
  }

  if (relayEnvironment == null) {
    relayEnvironment = environment;
  }

  return relayEnvironment;
}

export function useEnvironment(initialRecords: RecordSource) {
  return useMemo(() => {
    return initEnvironment(initialRecords);
  }, [initialRecords]);
}
