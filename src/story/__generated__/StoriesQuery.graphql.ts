/**
 * @generated SignedSource<<b968e86abbe62f3c1e6f5e8f99f9ec7f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ScheduledOperationStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | "CANCELED" | "%future added value";
export type ScheduledReleaseStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | "%future added value";
export type Tags = "react" | "%future added value";
export type UserKind = "MEMBER" | "PAT" | "PUBLIC" | "WEBHOOK" | "%future added value";
export type StoryWhereInput = {
  _search?: string | null;
  AND?: ReadonlyArray<StoryWhereInput> | null;
  OR?: ReadonlyArray<StoryWhereInput> | null;
  NOT?: ReadonlyArray<StoryWhereInput> | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: ReadonlyArray<string> | null;
  id_not_in?: ReadonlyArray<string> | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: ReadonlyArray<any> | null;
  createdAt_not_in?: ReadonlyArray<any> | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: ReadonlyArray<any> | null;
  updatedAt_not_in?: ReadonlyArray<any> | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  publishedAt?: any | null;
  publishedAt_not?: any | null;
  publishedAt_in?: ReadonlyArray<any> | null;
  publishedAt_not_in?: ReadonlyArray<any> | null;
  publishedAt_lt?: any | null;
  publishedAt_lte?: any | null;
  publishedAt_gt?: any | null;
  publishedAt_gte?: any | null;
  title?: string | null;
  title_not?: string | null;
  title_in?: ReadonlyArray<string> | null;
  title_not_in?: ReadonlyArray<string> | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_starts_with?: string | null;
  title_not_starts_with?: string | null;
  title_ends_with?: string | null;
  title_not_ends_with?: string | null;
  slug?: string | null;
  slug_not?: string | null;
  slug_in?: ReadonlyArray<string> | null;
  slug_not_in?: ReadonlyArray<string> | null;
  slug_contains?: string | null;
  slug_not_contains?: string | null;
  slug_starts_with?: string | null;
  slug_not_starts_with?: string | null;
  slug_ends_with?: string | null;
  slug_not_ends_with?: string | null;
  content?: string | null;
  content_not?: string | null;
  content_in?: ReadonlyArray<string> | null;
  content_not_in?: ReadonlyArray<string> | null;
  content_contains?: string | null;
  content_not_contains?: string | null;
  content_starts_with?: string | null;
  content_not_starts_with?: string | null;
  content_ends_with?: string | null;
  content_not_ends_with?: string | null;
  excerpt?: string | null;
  excerpt_not?: string | null;
  excerpt_in?: ReadonlyArray<string> | null;
  excerpt_not_in?: ReadonlyArray<string> | null;
  excerpt_contains?: string | null;
  excerpt_not_contains?: string | null;
  excerpt_starts_with?: string | null;
  excerpt_not_starts_with?: string | null;
  excerpt_ends_with?: string | null;
  excerpt_not_ends_with?: string | null;
  createdBy?: UserWhereInput | null;
  updatedBy?: UserWhereInput | null;
  publishedBy?: UserWhereInput | null;
  coverImage?: AssetWhereInput | null;
  category?: CategoryWhereInput | null;
  seo?: SeoWhereInput | null;
  tags?: ReadonlyArray<Tags> | null;
  tags_not?: ReadonlyArray<Tags> | null;
  tags_contains_all?: ReadonlyArray<Tags> | null;
  tags_contains_some?: ReadonlyArray<Tags> | null;
  tags_contains_none?: ReadonlyArray<Tags> | null;
  scheduledIn_every?: ScheduledOperationWhereInput | null;
  scheduledIn_some?: ScheduledOperationWhereInput | null;
  scheduledIn_none?: ScheduledOperationWhereInput | null;
};
export type UserWhereInput = {
  _search?: string | null;
  AND?: ReadonlyArray<UserWhereInput> | null;
  OR?: ReadonlyArray<UserWhereInput> | null;
  NOT?: ReadonlyArray<UserWhereInput> | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: ReadonlyArray<string> | null;
  id_not_in?: ReadonlyArray<string> | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: ReadonlyArray<any> | null;
  createdAt_not_in?: ReadonlyArray<any> | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: ReadonlyArray<any> | null;
  updatedAt_not_in?: ReadonlyArray<any> | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  publishedAt?: any | null;
  publishedAt_not?: any | null;
  publishedAt_in?: ReadonlyArray<any> | null;
  publishedAt_not_in?: ReadonlyArray<any> | null;
  publishedAt_lt?: any | null;
  publishedAt_lte?: any | null;
  publishedAt_gt?: any | null;
  publishedAt_gte?: any | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: ReadonlyArray<string> | null;
  name_not_in?: ReadonlyArray<string> | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  picture?: string | null;
  picture_not?: string | null;
  picture_in?: ReadonlyArray<string> | null;
  picture_not_in?: ReadonlyArray<string> | null;
  picture_contains?: string | null;
  picture_not_contains?: string | null;
  picture_starts_with?: string | null;
  picture_not_starts_with?: string | null;
  picture_ends_with?: string | null;
  picture_not_ends_with?: string | null;
  isActive?: boolean | null;
  isActive_not?: boolean | null;
  kind?: UserKind | null;
  kind_not?: UserKind | null;
  kind_in?: ReadonlyArray<UserKind> | null;
  kind_not_in?: ReadonlyArray<UserKind> | null;
};
export type AssetWhereInput = {
  _search?: string | null;
  AND?: ReadonlyArray<AssetWhereInput> | null;
  OR?: ReadonlyArray<AssetWhereInput> | null;
  NOT?: ReadonlyArray<AssetWhereInput> | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: ReadonlyArray<string> | null;
  id_not_in?: ReadonlyArray<string> | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: ReadonlyArray<any> | null;
  createdAt_not_in?: ReadonlyArray<any> | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: ReadonlyArray<any> | null;
  updatedAt_not_in?: ReadonlyArray<any> | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  publishedAt?: any | null;
  publishedAt_not?: any | null;
  publishedAt_in?: ReadonlyArray<any> | null;
  publishedAt_not_in?: ReadonlyArray<any> | null;
  publishedAt_lt?: any | null;
  publishedAt_lte?: any | null;
  publishedAt_gt?: any | null;
  publishedAt_gte?: any | null;
  handle?: string | null;
  handle_not?: string | null;
  handle_in?: ReadonlyArray<string> | null;
  handle_not_in?: ReadonlyArray<string> | null;
  handle_contains?: string | null;
  handle_not_contains?: string | null;
  handle_starts_with?: string | null;
  handle_not_starts_with?: string | null;
  handle_ends_with?: string | null;
  handle_not_ends_with?: string | null;
  fileName?: string | null;
  fileName_not?: string | null;
  fileName_in?: ReadonlyArray<string> | null;
  fileName_not_in?: ReadonlyArray<string> | null;
  fileName_contains?: string | null;
  fileName_not_contains?: string | null;
  fileName_starts_with?: string | null;
  fileName_not_starts_with?: string | null;
  fileName_ends_with?: string | null;
  fileName_not_ends_with?: string | null;
  height?: number | null;
  height_not?: number | null;
  height_in?: ReadonlyArray<number> | null;
  height_not_in?: ReadonlyArray<number> | null;
  height_lt?: number | null;
  height_lte?: number | null;
  height_gt?: number | null;
  height_gte?: number | null;
  width?: number | null;
  width_not?: number | null;
  width_in?: ReadonlyArray<number> | null;
  width_not_in?: ReadonlyArray<number> | null;
  width_lt?: number | null;
  width_lte?: number | null;
  width_gt?: number | null;
  width_gte?: number | null;
  size?: number | null;
  size_not?: number | null;
  size_in?: ReadonlyArray<number> | null;
  size_not_in?: ReadonlyArray<number> | null;
  size_lt?: number | null;
  size_lte?: number | null;
  size_gt?: number | null;
  size_gte?: number | null;
  mimeType?: string | null;
  mimeType_not?: string | null;
  mimeType_in?: ReadonlyArray<string> | null;
  mimeType_not_in?: ReadonlyArray<string> | null;
  mimeType_contains?: string | null;
  mimeType_not_contains?: string | null;
  mimeType_starts_with?: string | null;
  mimeType_not_starts_with?: string | null;
  mimeType_ends_with?: string | null;
  mimeType_not_ends_with?: string | null;
  createdBy?: UserWhereInput | null;
  updatedBy?: UserWhereInput | null;
  publishedBy?: UserWhereInput | null;
  coverImageStory_every?: StoryWhereInput | null;
  coverImageStory_some?: StoryWhereInput | null;
  coverImageStory_none?: StoryWhereInput | null;
  imageSeo_every?: SeoWhereInput | null;
  imageSeo_some?: SeoWhereInput | null;
  imageSeo_none?: SeoWhereInput | null;
  scheduledIn_every?: ScheduledOperationWhereInput | null;
  scheduledIn_some?: ScheduledOperationWhereInput | null;
  scheduledIn_none?: ScheduledOperationWhereInput | null;
};
export type SeoWhereInput = {
  _search?: string | null;
  AND?: ReadonlyArray<SeoWhereInput> | null;
  OR?: ReadonlyArray<SeoWhereInput> | null;
  NOT?: ReadonlyArray<SeoWhereInput> | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: ReadonlyArray<string> | null;
  id_not_in?: ReadonlyArray<string> | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: ReadonlyArray<any> | null;
  createdAt_not_in?: ReadonlyArray<any> | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: ReadonlyArray<any> | null;
  updatedAt_not_in?: ReadonlyArray<any> | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  publishedAt?: any | null;
  publishedAt_not?: any | null;
  publishedAt_in?: ReadonlyArray<any> | null;
  publishedAt_not_in?: ReadonlyArray<any> | null;
  publishedAt_lt?: any | null;
  publishedAt_lte?: any | null;
  publishedAt_gt?: any | null;
  publishedAt_gte?: any | null;
  title?: string | null;
  title_not?: string | null;
  title_in?: ReadonlyArray<string> | null;
  title_not_in?: ReadonlyArray<string> | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_starts_with?: string | null;
  title_not_starts_with?: string | null;
  title_ends_with?: string | null;
  title_not_ends_with?: string | null;
  description?: string | null;
  description_not?: string | null;
  description_in?: ReadonlyArray<string> | null;
  description_not_in?: ReadonlyArray<string> | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  keywords?: ReadonlyArray<string> | null;
  keywords_not?: ReadonlyArray<string> | null;
  keywords_contains_all?: ReadonlyArray<string> | null;
  keywords_contains_some?: ReadonlyArray<string> | null;
  keywords_contains_none?: ReadonlyArray<string> | null;
  createdBy?: UserWhereInput | null;
  updatedBy?: UserWhereInput | null;
  publishedBy?: UserWhereInput | null;
  image?: AssetWhereInput | null;
  story?: StoryWhereInput | null;
  scheduledIn_every?: ScheduledOperationWhereInput | null;
  scheduledIn_some?: ScheduledOperationWhereInput | null;
  scheduledIn_none?: ScheduledOperationWhereInput | null;
};
export type ScheduledOperationWhereInput = {
  _search?: string | null;
  AND?: ReadonlyArray<ScheduledOperationWhereInput> | null;
  OR?: ReadonlyArray<ScheduledOperationWhereInput> | null;
  NOT?: ReadonlyArray<ScheduledOperationWhereInput> | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: ReadonlyArray<string> | null;
  id_not_in?: ReadonlyArray<string> | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: ReadonlyArray<any> | null;
  createdAt_not_in?: ReadonlyArray<any> | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: ReadonlyArray<any> | null;
  updatedAt_not_in?: ReadonlyArray<any> | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  publishedAt?: any | null;
  publishedAt_not?: any | null;
  publishedAt_in?: ReadonlyArray<any> | null;
  publishedAt_not_in?: ReadonlyArray<any> | null;
  publishedAt_lt?: any | null;
  publishedAt_lte?: any | null;
  publishedAt_gt?: any | null;
  publishedAt_gte?: any | null;
  description?: string | null;
  description_not?: string | null;
  description_in?: ReadonlyArray<string> | null;
  description_not_in?: ReadonlyArray<string> | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  errorMessage?: string | null;
  errorMessage_not?: string | null;
  errorMessage_in?: ReadonlyArray<string> | null;
  errorMessage_not_in?: ReadonlyArray<string> | null;
  errorMessage_contains?: string | null;
  errorMessage_not_contains?: string | null;
  errorMessage_starts_with?: string | null;
  errorMessage_not_starts_with?: string | null;
  errorMessage_ends_with?: string | null;
  errorMessage_not_ends_with?: string | null;
  createdBy?: UserWhereInput | null;
  updatedBy?: UserWhereInput | null;
  publishedBy?: UserWhereInput | null;
  release?: ScheduledReleaseWhereInput | null;
  status?: ScheduledOperationStatus | null;
  status_not?: ScheduledOperationStatus | null;
  status_in?: ReadonlyArray<ScheduledOperationStatus> | null;
  status_not_in?: ReadonlyArray<ScheduledOperationStatus> | null;
};
export type ScheduledReleaseWhereInput = {
  _search?: string | null;
  AND?: ReadonlyArray<ScheduledReleaseWhereInput> | null;
  OR?: ReadonlyArray<ScheduledReleaseWhereInput> | null;
  NOT?: ReadonlyArray<ScheduledReleaseWhereInput> | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: ReadonlyArray<string> | null;
  id_not_in?: ReadonlyArray<string> | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: ReadonlyArray<any> | null;
  createdAt_not_in?: ReadonlyArray<any> | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: ReadonlyArray<any> | null;
  updatedAt_not_in?: ReadonlyArray<any> | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  publishedAt?: any | null;
  publishedAt_not?: any | null;
  publishedAt_in?: ReadonlyArray<any> | null;
  publishedAt_not_in?: ReadonlyArray<any> | null;
  publishedAt_lt?: any | null;
  publishedAt_lte?: any | null;
  publishedAt_gt?: any | null;
  publishedAt_gte?: any | null;
  title?: string | null;
  title_not?: string | null;
  title_in?: ReadonlyArray<string> | null;
  title_not_in?: ReadonlyArray<string> | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_starts_with?: string | null;
  title_not_starts_with?: string | null;
  title_ends_with?: string | null;
  title_not_ends_with?: string | null;
  description?: string | null;
  description_not?: string | null;
  description_in?: ReadonlyArray<string> | null;
  description_not_in?: ReadonlyArray<string> | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_starts_with?: string | null;
  description_not_starts_with?: string | null;
  description_ends_with?: string | null;
  description_not_ends_with?: string | null;
  errorMessage?: string | null;
  errorMessage_not?: string | null;
  errorMessage_in?: ReadonlyArray<string> | null;
  errorMessage_not_in?: ReadonlyArray<string> | null;
  errorMessage_contains?: string | null;
  errorMessage_not_contains?: string | null;
  errorMessage_starts_with?: string | null;
  errorMessage_not_starts_with?: string | null;
  errorMessage_ends_with?: string | null;
  errorMessage_not_ends_with?: string | null;
  isActive?: boolean | null;
  isActive_not?: boolean | null;
  isImplicit?: boolean | null;
  isImplicit_not?: boolean | null;
  releaseAt?: any | null;
  releaseAt_not?: any | null;
  releaseAt_in?: ReadonlyArray<any> | null;
  releaseAt_not_in?: ReadonlyArray<any> | null;
  releaseAt_lt?: any | null;
  releaseAt_lte?: any | null;
  releaseAt_gt?: any | null;
  releaseAt_gte?: any | null;
  createdBy?: UserWhereInput | null;
  updatedBy?: UserWhereInput | null;
  publishedBy?: UserWhereInput | null;
  operations_every?: ScheduledOperationWhereInput | null;
  operations_some?: ScheduledOperationWhereInput | null;
  operations_none?: ScheduledOperationWhereInput | null;
  status?: ScheduledReleaseStatus | null;
  status_not?: ScheduledReleaseStatus | null;
  status_in?: ReadonlyArray<ScheduledReleaseStatus> | null;
  status_not_in?: ReadonlyArray<ScheduledReleaseStatus> | null;
};
export type CategoryWhereInput = {
  _search?: string | null;
  AND?: ReadonlyArray<CategoryWhereInput> | null;
  OR?: ReadonlyArray<CategoryWhereInput> | null;
  NOT?: ReadonlyArray<CategoryWhereInput> | null;
  id?: string | null;
  id_not?: string | null;
  id_in?: ReadonlyArray<string> | null;
  id_not_in?: ReadonlyArray<string> | null;
  id_contains?: string | null;
  id_not_contains?: string | null;
  id_starts_with?: string | null;
  id_not_starts_with?: string | null;
  id_ends_with?: string | null;
  id_not_ends_with?: string | null;
  createdAt?: any | null;
  createdAt_not?: any | null;
  createdAt_in?: ReadonlyArray<any> | null;
  createdAt_not_in?: ReadonlyArray<any> | null;
  createdAt_lt?: any | null;
  createdAt_lte?: any | null;
  createdAt_gt?: any | null;
  createdAt_gte?: any | null;
  updatedAt?: any | null;
  updatedAt_not?: any | null;
  updatedAt_in?: ReadonlyArray<any> | null;
  updatedAt_not_in?: ReadonlyArray<any> | null;
  updatedAt_lt?: any | null;
  updatedAt_lte?: any | null;
  updatedAt_gt?: any | null;
  updatedAt_gte?: any | null;
  publishedAt?: any | null;
  publishedAt_not?: any | null;
  publishedAt_in?: ReadonlyArray<any> | null;
  publishedAt_not_in?: ReadonlyArray<any> | null;
  publishedAt_lt?: any | null;
  publishedAt_lte?: any | null;
  publishedAt_gt?: any | null;
  publishedAt_gte?: any | null;
  name?: string | null;
  name_not?: string | null;
  name_in?: ReadonlyArray<string> | null;
  name_not_in?: ReadonlyArray<string> | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_starts_with?: string | null;
  name_not_starts_with?: string | null;
  name_ends_with?: string | null;
  name_not_ends_with?: string | null;
  createdBy?: UserWhereInput | null;
  updatedBy?: UserWhereInput | null;
  publishedBy?: UserWhereInput | null;
  scheduledIn_every?: ScheduledOperationWhereInput | null;
  scheduledIn_some?: ScheduledOperationWhereInput | null;
  scheduledIn_none?: ScheduledOperationWhereInput | null;
};
export type StoriesQuery$variables = {
  where?: StoryWhereInput | null;
};
export type StoriesQuery$data = {
  readonly stories: ReadonlyArray<{
    readonly title: string;
    readonly slug: string;
    readonly publishedAt: any | null;
    readonly coverImage: {
      readonly url: string;
    } | null;
    readonly category: {
      readonly name: string;
    } | null;
    readonly excerpt: string;
  }>;
};
export type StoriesQuery = {
  variables: StoriesQuery$variables;
  response: StoriesQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "where"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "publishedAt_DESC"
  },
  {
    "kind": "Literal",
    "name": "stage",
    "value": "PUBLISHED"
  },
  {
    "kind": "Variable",
    "name": "where",
    "variableName": "where"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "publishedAt",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "excerpt",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "StoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Story",
        "kind": "LinkedField",
        "name": "stories",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Asset",
            "kind": "LinkedField",
            "name": "coverImage",
            "plural": false,
            "selections": [
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "category",
            "plural": false,
            "selections": [
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "StoriesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Story",
        "kind": "LinkedField",
        "name": "stories",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Asset",
            "kind": "LinkedField",
            "name": "coverImage",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v8/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "category",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v8/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/),
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2ea0900dd9e1a0f9a3175c2c48dd4adf",
    "id": null,
    "metadata": {},
    "name": "StoriesQuery",
    "operationKind": "query",
    "text": "query StoriesQuery(\n  $where: StoryWhereInput\n) {\n  stories(first: 10, orderBy: publishedAt_DESC, stage: PUBLISHED, where: $where) {\n    title\n    slug\n    publishedAt\n    coverImage {\n      url\n      id\n    }\n    category {\n      name\n      id\n    }\n    excerpt\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d4aa35330af6aede4096d94a0ca0097b";

export default node;
