/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CategoriesQueryVariables = {};
export type CategoriesQueryResponse = {
    readonly categories: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
    }>;
};
export type CategoriesQuery = {
    readonly response: CategoriesQueryResponse;
    readonly variables: CategoriesQueryVariables;
};



/*
query CategoriesQuery {
  categories {
    id
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Category",
    "kind": "LinkedField",
    "name": "categories",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoriesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CategoriesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "613bd4f1ab72d73939c08c475a0ea2ce",
    "id": null,
    "metadata": {},
    "name": "CategoriesQuery",
    "operationKind": "query",
    "text": "query CategoriesQuery {\n  categories {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = '160a55b695709e8931d7d58edc2dd18e';
export default node;
