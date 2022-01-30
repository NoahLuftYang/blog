/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type ScheduledOperationStatus = "CANCELED" | "COMPLETED" | "FAILED" | "IN_PROGRESS" | "PENDING" | "%future added value";
export type ScheduledReleaseStatus = "COMPLETED" | "FAILED" | "IN_PROGRESS" | "PENDING" | "%future added value";
export type Tags = "react" | "%future added value";
export type UserKind = "MEMBER" | "PAT" | "PUBLIC" | "WEBHOOK" | "%future added value";
export type StoryWhereInput = {
    _search?: string | null | undefined;
    AND?: Array<StoryWhereInput> | null | undefined;
    OR?: Array<StoryWhereInput> | null | undefined;
    NOT?: Array<StoryWhereInput> | null | undefined;
    id?: string | null | undefined;
    id_not?: string | null | undefined;
    id_in?: Array<string> | null | undefined;
    id_not_in?: Array<string> | null | undefined;
    id_contains?: string | null | undefined;
    id_not_contains?: string | null | undefined;
    id_starts_with?: string | null | undefined;
    id_not_starts_with?: string | null | undefined;
    id_ends_with?: string | null | undefined;
    id_not_ends_with?: string | null | undefined;
    createdAt?: unknown | null | undefined;
    createdAt_not?: unknown | null | undefined;
    createdAt_in?: Array<unknown> | null | undefined;
    createdAt_not_in?: Array<unknown> | null | undefined;
    createdAt_lt?: unknown | null | undefined;
    createdAt_lte?: unknown | null | undefined;
    createdAt_gt?: unknown | null | undefined;
    createdAt_gte?: unknown | null | undefined;
    updatedAt?: unknown | null | undefined;
    updatedAt_not?: unknown | null | undefined;
    updatedAt_in?: Array<unknown> | null | undefined;
    updatedAt_not_in?: Array<unknown> | null | undefined;
    updatedAt_lt?: unknown | null | undefined;
    updatedAt_lte?: unknown | null | undefined;
    updatedAt_gt?: unknown | null | undefined;
    updatedAt_gte?: unknown | null | undefined;
    publishedAt?: unknown | null | undefined;
    publishedAt_not?: unknown | null | undefined;
    publishedAt_in?: Array<unknown> | null | undefined;
    publishedAt_not_in?: Array<unknown> | null | undefined;
    publishedAt_lt?: unknown | null | undefined;
    publishedAt_lte?: unknown | null | undefined;
    publishedAt_gt?: unknown | null | undefined;
    publishedAt_gte?: unknown | null | undefined;
    title?: string | null | undefined;
    title_not?: string | null | undefined;
    title_in?: Array<string> | null | undefined;
    title_not_in?: Array<string> | null | undefined;
    title_contains?: string | null | undefined;
    title_not_contains?: string | null | undefined;
    title_starts_with?: string | null | undefined;
    title_not_starts_with?: string | null | undefined;
    title_ends_with?: string | null | undefined;
    title_not_ends_with?: string | null | undefined;
    slug?: string | null | undefined;
    slug_not?: string | null | undefined;
    slug_in?: Array<string> | null | undefined;
    slug_not_in?: Array<string> | null | undefined;
    slug_contains?: string | null | undefined;
    slug_not_contains?: string | null | undefined;
    slug_starts_with?: string | null | undefined;
    slug_not_starts_with?: string | null | undefined;
    slug_ends_with?: string | null | undefined;
    slug_not_ends_with?: string | null | undefined;
    content?: string | null | undefined;
    content_not?: string | null | undefined;
    content_in?: Array<string> | null | undefined;
    content_not_in?: Array<string> | null | undefined;
    content_contains?: string | null | undefined;
    content_not_contains?: string | null | undefined;
    content_starts_with?: string | null | undefined;
    content_not_starts_with?: string | null | undefined;
    content_ends_with?: string | null | undefined;
    content_not_ends_with?: string | null | undefined;
    excerpt?: string | null | undefined;
    excerpt_not?: string | null | undefined;
    excerpt_in?: Array<string> | null | undefined;
    excerpt_not_in?: Array<string> | null | undefined;
    excerpt_contains?: string | null | undefined;
    excerpt_not_contains?: string | null | undefined;
    excerpt_starts_with?: string | null | undefined;
    excerpt_not_starts_with?: string | null | undefined;
    excerpt_ends_with?: string | null | undefined;
    excerpt_not_ends_with?: string | null | undefined;
    createdBy?: UserWhereInput | null | undefined;
    updatedBy?: UserWhereInput | null | undefined;
    publishedBy?: UserWhereInput | null | undefined;
    coverImage?: AssetWhereInput | null | undefined;
    category?: CategoryWhereInput | null | undefined;
    seo?: SeoWhereInput | null | undefined;
    tags?: Array<Tags> | null | undefined;
    tags_not?: Array<Tags> | null | undefined;
    tags_contains_all?: Array<Tags> | null | undefined;
    tags_contains_some?: Array<Tags> | null | undefined;
    tags_contains_none?: Array<Tags> | null | undefined;
    scheduledIn_every?: ScheduledOperationWhereInput | null | undefined;
    scheduledIn_some?: ScheduledOperationWhereInput | null | undefined;
    scheduledIn_none?: ScheduledOperationWhereInput | null | undefined;
};
export type UserWhereInput = {
    _search?: string | null | undefined;
    AND?: Array<UserWhereInput> | null | undefined;
    OR?: Array<UserWhereInput> | null | undefined;
    NOT?: Array<UserWhereInput> | null | undefined;
    id?: string | null | undefined;
    id_not?: string | null | undefined;
    id_in?: Array<string> | null | undefined;
    id_not_in?: Array<string> | null | undefined;
    id_contains?: string | null | undefined;
    id_not_contains?: string | null | undefined;
    id_starts_with?: string | null | undefined;
    id_not_starts_with?: string | null | undefined;
    id_ends_with?: string | null | undefined;
    id_not_ends_with?: string | null | undefined;
    createdAt?: unknown | null | undefined;
    createdAt_not?: unknown | null | undefined;
    createdAt_in?: Array<unknown> | null | undefined;
    createdAt_not_in?: Array<unknown> | null | undefined;
    createdAt_lt?: unknown | null | undefined;
    createdAt_lte?: unknown | null | undefined;
    createdAt_gt?: unknown | null | undefined;
    createdAt_gte?: unknown | null | undefined;
    updatedAt?: unknown | null | undefined;
    updatedAt_not?: unknown | null | undefined;
    updatedAt_in?: Array<unknown> | null | undefined;
    updatedAt_not_in?: Array<unknown> | null | undefined;
    updatedAt_lt?: unknown | null | undefined;
    updatedAt_lte?: unknown | null | undefined;
    updatedAt_gt?: unknown | null | undefined;
    updatedAt_gte?: unknown | null | undefined;
    publishedAt?: unknown | null | undefined;
    publishedAt_not?: unknown | null | undefined;
    publishedAt_in?: Array<unknown> | null | undefined;
    publishedAt_not_in?: Array<unknown> | null | undefined;
    publishedAt_lt?: unknown | null | undefined;
    publishedAt_lte?: unknown | null | undefined;
    publishedAt_gt?: unknown | null | undefined;
    publishedAt_gte?: unknown | null | undefined;
    name?: string | null | undefined;
    name_not?: string | null | undefined;
    name_in?: Array<string> | null | undefined;
    name_not_in?: Array<string> | null | undefined;
    name_contains?: string | null | undefined;
    name_not_contains?: string | null | undefined;
    name_starts_with?: string | null | undefined;
    name_not_starts_with?: string | null | undefined;
    name_ends_with?: string | null | undefined;
    name_not_ends_with?: string | null | undefined;
    picture?: string | null | undefined;
    picture_not?: string | null | undefined;
    picture_in?: Array<string> | null | undefined;
    picture_not_in?: Array<string> | null | undefined;
    picture_contains?: string | null | undefined;
    picture_not_contains?: string | null | undefined;
    picture_starts_with?: string | null | undefined;
    picture_not_starts_with?: string | null | undefined;
    picture_ends_with?: string | null | undefined;
    picture_not_ends_with?: string | null | undefined;
    isActive?: boolean | null | undefined;
    isActive_not?: boolean | null | undefined;
    kind?: UserKind | null | undefined;
    kind_not?: UserKind | null | undefined;
    kind_in?: Array<UserKind> | null | undefined;
    kind_not_in?: Array<UserKind> | null | undefined;
};
export type AssetWhereInput = {
    _search?: string | null | undefined;
    AND?: Array<AssetWhereInput> | null | undefined;
    OR?: Array<AssetWhereInput> | null | undefined;
    NOT?: Array<AssetWhereInput> | null | undefined;
    id?: string | null | undefined;
    id_not?: string | null | undefined;
    id_in?: Array<string> | null | undefined;
    id_not_in?: Array<string> | null | undefined;
    id_contains?: string | null | undefined;
    id_not_contains?: string | null | undefined;
    id_starts_with?: string | null | undefined;
    id_not_starts_with?: string | null | undefined;
    id_ends_with?: string | null | undefined;
    id_not_ends_with?: string | null | undefined;
    createdAt?: unknown | null | undefined;
    createdAt_not?: unknown | null | undefined;
    createdAt_in?: Array<unknown> | null | undefined;
    createdAt_not_in?: Array<unknown> | null | undefined;
    createdAt_lt?: unknown | null | undefined;
    createdAt_lte?: unknown | null | undefined;
    createdAt_gt?: unknown | null | undefined;
    createdAt_gte?: unknown | null | undefined;
    updatedAt?: unknown | null | undefined;
    updatedAt_not?: unknown | null | undefined;
    updatedAt_in?: Array<unknown> | null | undefined;
    updatedAt_not_in?: Array<unknown> | null | undefined;
    updatedAt_lt?: unknown | null | undefined;
    updatedAt_lte?: unknown | null | undefined;
    updatedAt_gt?: unknown | null | undefined;
    updatedAt_gte?: unknown | null | undefined;
    publishedAt?: unknown | null | undefined;
    publishedAt_not?: unknown | null | undefined;
    publishedAt_in?: Array<unknown> | null | undefined;
    publishedAt_not_in?: Array<unknown> | null | undefined;
    publishedAt_lt?: unknown | null | undefined;
    publishedAt_lte?: unknown | null | undefined;
    publishedAt_gt?: unknown | null | undefined;
    publishedAt_gte?: unknown | null | undefined;
    handle?: string | null | undefined;
    handle_not?: string | null | undefined;
    handle_in?: Array<string> | null | undefined;
    handle_not_in?: Array<string> | null | undefined;
    handle_contains?: string | null | undefined;
    handle_not_contains?: string | null | undefined;
    handle_starts_with?: string | null | undefined;
    handle_not_starts_with?: string | null | undefined;
    handle_ends_with?: string | null | undefined;
    handle_not_ends_with?: string | null | undefined;
    fileName?: string | null | undefined;
    fileName_not?: string | null | undefined;
    fileName_in?: Array<string> | null | undefined;
    fileName_not_in?: Array<string> | null | undefined;
    fileName_contains?: string | null | undefined;
    fileName_not_contains?: string | null | undefined;
    fileName_starts_with?: string | null | undefined;
    fileName_not_starts_with?: string | null | undefined;
    fileName_ends_with?: string | null | undefined;
    fileName_not_ends_with?: string | null | undefined;
    height?: number | null | undefined;
    height_not?: number | null | undefined;
    height_in?: Array<number> | null | undefined;
    height_not_in?: Array<number> | null | undefined;
    height_lt?: number | null | undefined;
    height_lte?: number | null | undefined;
    height_gt?: number | null | undefined;
    height_gte?: number | null | undefined;
    width?: number | null | undefined;
    width_not?: number | null | undefined;
    width_in?: Array<number> | null | undefined;
    width_not_in?: Array<number> | null | undefined;
    width_lt?: number | null | undefined;
    width_lte?: number | null | undefined;
    width_gt?: number | null | undefined;
    width_gte?: number | null | undefined;
    size?: number | null | undefined;
    size_not?: number | null | undefined;
    size_in?: Array<number> | null | undefined;
    size_not_in?: Array<number> | null | undefined;
    size_lt?: number | null | undefined;
    size_lte?: number | null | undefined;
    size_gt?: number | null | undefined;
    size_gte?: number | null | undefined;
    mimeType?: string | null | undefined;
    mimeType_not?: string | null | undefined;
    mimeType_in?: Array<string> | null | undefined;
    mimeType_not_in?: Array<string> | null | undefined;
    mimeType_contains?: string | null | undefined;
    mimeType_not_contains?: string | null | undefined;
    mimeType_starts_with?: string | null | undefined;
    mimeType_not_starts_with?: string | null | undefined;
    mimeType_ends_with?: string | null | undefined;
    mimeType_not_ends_with?: string | null | undefined;
    createdBy?: UserWhereInput | null | undefined;
    updatedBy?: UserWhereInput | null | undefined;
    publishedBy?: UserWhereInput | null | undefined;
    coverImageStory_every?: StoryWhereInput | null | undefined;
    coverImageStory_some?: StoryWhereInput | null | undefined;
    coverImageStory_none?: StoryWhereInput | null | undefined;
    imageSeo_every?: SeoWhereInput | null | undefined;
    imageSeo_some?: SeoWhereInput | null | undefined;
    imageSeo_none?: SeoWhereInput | null | undefined;
    scheduledIn_every?: ScheduledOperationWhereInput | null | undefined;
    scheduledIn_some?: ScheduledOperationWhereInput | null | undefined;
    scheduledIn_none?: ScheduledOperationWhereInput | null | undefined;
};
export type SeoWhereInput = {
    _search?: string | null | undefined;
    AND?: Array<SeoWhereInput> | null | undefined;
    OR?: Array<SeoWhereInput> | null | undefined;
    NOT?: Array<SeoWhereInput> | null | undefined;
    id?: string | null | undefined;
    id_not?: string | null | undefined;
    id_in?: Array<string> | null | undefined;
    id_not_in?: Array<string> | null | undefined;
    id_contains?: string | null | undefined;
    id_not_contains?: string | null | undefined;
    id_starts_with?: string | null | undefined;
    id_not_starts_with?: string | null | undefined;
    id_ends_with?: string | null | undefined;
    id_not_ends_with?: string | null | undefined;
    createdAt?: unknown | null | undefined;
    createdAt_not?: unknown | null | undefined;
    createdAt_in?: Array<unknown> | null | undefined;
    createdAt_not_in?: Array<unknown> | null | undefined;
    createdAt_lt?: unknown | null | undefined;
    createdAt_lte?: unknown | null | undefined;
    createdAt_gt?: unknown | null | undefined;
    createdAt_gte?: unknown | null | undefined;
    updatedAt?: unknown | null | undefined;
    updatedAt_not?: unknown | null | undefined;
    updatedAt_in?: Array<unknown> | null | undefined;
    updatedAt_not_in?: Array<unknown> | null | undefined;
    updatedAt_lt?: unknown | null | undefined;
    updatedAt_lte?: unknown | null | undefined;
    updatedAt_gt?: unknown | null | undefined;
    updatedAt_gte?: unknown | null | undefined;
    publishedAt?: unknown | null | undefined;
    publishedAt_not?: unknown | null | undefined;
    publishedAt_in?: Array<unknown> | null | undefined;
    publishedAt_not_in?: Array<unknown> | null | undefined;
    publishedAt_lt?: unknown | null | undefined;
    publishedAt_lte?: unknown | null | undefined;
    publishedAt_gt?: unknown | null | undefined;
    publishedAt_gte?: unknown | null | undefined;
    title?: string | null | undefined;
    title_not?: string | null | undefined;
    title_in?: Array<string> | null | undefined;
    title_not_in?: Array<string> | null | undefined;
    title_contains?: string | null | undefined;
    title_not_contains?: string | null | undefined;
    title_starts_with?: string | null | undefined;
    title_not_starts_with?: string | null | undefined;
    title_ends_with?: string | null | undefined;
    title_not_ends_with?: string | null | undefined;
    description?: string | null | undefined;
    description_not?: string | null | undefined;
    description_in?: Array<string> | null | undefined;
    description_not_in?: Array<string> | null | undefined;
    description_contains?: string | null | undefined;
    description_not_contains?: string | null | undefined;
    description_starts_with?: string | null | undefined;
    description_not_starts_with?: string | null | undefined;
    description_ends_with?: string | null | undefined;
    description_not_ends_with?: string | null | undefined;
    keywords?: Array<string> | null | undefined;
    keywords_not?: Array<string> | null | undefined;
    keywords_contains_all?: Array<string> | null | undefined;
    keywords_contains_some?: Array<string> | null | undefined;
    keywords_contains_none?: Array<string> | null | undefined;
    createdBy?: UserWhereInput | null | undefined;
    updatedBy?: UserWhereInput | null | undefined;
    publishedBy?: UserWhereInput | null | undefined;
    image?: AssetWhereInput | null | undefined;
    story?: StoryWhereInput | null | undefined;
    scheduledIn_every?: ScheduledOperationWhereInput | null | undefined;
    scheduledIn_some?: ScheduledOperationWhereInput | null | undefined;
    scheduledIn_none?: ScheduledOperationWhereInput | null | undefined;
};
export type ScheduledOperationWhereInput = {
    _search?: string | null | undefined;
    AND?: Array<ScheduledOperationWhereInput> | null | undefined;
    OR?: Array<ScheduledOperationWhereInput> | null | undefined;
    NOT?: Array<ScheduledOperationWhereInput> | null | undefined;
    id?: string | null | undefined;
    id_not?: string | null | undefined;
    id_in?: Array<string> | null | undefined;
    id_not_in?: Array<string> | null | undefined;
    id_contains?: string | null | undefined;
    id_not_contains?: string | null | undefined;
    id_starts_with?: string | null | undefined;
    id_not_starts_with?: string | null | undefined;
    id_ends_with?: string | null | undefined;
    id_not_ends_with?: string | null | undefined;
    createdAt?: unknown | null | undefined;
    createdAt_not?: unknown | null | undefined;
    createdAt_in?: Array<unknown> | null | undefined;
    createdAt_not_in?: Array<unknown> | null | undefined;
    createdAt_lt?: unknown | null | undefined;
    createdAt_lte?: unknown | null | undefined;
    createdAt_gt?: unknown | null | undefined;
    createdAt_gte?: unknown | null | undefined;
    updatedAt?: unknown | null | undefined;
    updatedAt_not?: unknown | null | undefined;
    updatedAt_in?: Array<unknown> | null | undefined;
    updatedAt_not_in?: Array<unknown> | null | undefined;
    updatedAt_lt?: unknown | null | undefined;
    updatedAt_lte?: unknown | null | undefined;
    updatedAt_gt?: unknown | null | undefined;
    updatedAt_gte?: unknown | null | undefined;
    publishedAt?: unknown | null | undefined;
    publishedAt_not?: unknown | null | undefined;
    publishedAt_in?: Array<unknown> | null | undefined;
    publishedAt_not_in?: Array<unknown> | null | undefined;
    publishedAt_lt?: unknown | null | undefined;
    publishedAt_lte?: unknown | null | undefined;
    publishedAt_gt?: unknown | null | undefined;
    publishedAt_gte?: unknown | null | undefined;
    description?: string | null | undefined;
    description_not?: string | null | undefined;
    description_in?: Array<string> | null | undefined;
    description_not_in?: Array<string> | null | undefined;
    description_contains?: string | null | undefined;
    description_not_contains?: string | null | undefined;
    description_starts_with?: string | null | undefined;
    description_not_starts_with?: string | null | undefined;
    description_ends_with?: string | null | undefined;
    description_not_ends_with?: string | null | undefined;
    errorMessage?: string | null | undefined;
    errorMessage_not?: string | null | undefined;
    errorMessage_in?: Array<string> | null | undefined;
    errorMessage_not_in?: Array<string> | null | undefined;
    errorMessage_contains?: string | null | undefined;
    errorMessage_not_contains?: string | null | undefined;
    errorMessage_starts_with?: string | null | undefined;
    errorMessage_not_starts_with?: string | null | undefined;
    errorMessage_ends_with?: string | null | undefined;
    errorMessage_not_ends_with?: string | null | undefined;
    createdBy?: UserWhereInput | null | undefined;
    updatedBy?: UserWhereInput | null | undefined;
    publishedBy?: UserWhereInput | null | undefined;
    release?: ScheduledReleaseWhereInput | null | undefined;
    status?: ScheduledOperationStatus | null | undefined;
    status_not?: ScheduledOperationStatus | null | undefined;
    status_in?: Array<ScheduledOperationStatus> | null | undefined;
    status_not_in?: Array<ScheduledOperationStatus> | null | undefined;
};
export type ScheduledReleaseWhereInput = {
    _search?: string | null | undefined;
    AND?: Array<ScheduledReleaseWhereInput> | null | undefined;
    OR?: Array<ScheduledReleaseWhereInput> | null | undefined;
    NOT?: Array<ScheduledReleaseWhereInput> | null | undefined;
    id?: string | null | undefined;
    id_not?: string | null | undefined;
    id_in?: Array<string> | null | undefined;
    id_not_in?: Array<string> | null | undefined;
    id_contains?: string | null | undefined;
    id_not_contains?: string | null | undefined;
    id_starts_with?: string | null | undefined;
    id_not_starts_with?: string | null | undefined;
    id_ends_with?: string | null | undefined;
    id_not_ends_with?: string | null | undefined;
    createdAt?: unknown | null | undefined;
    createdAt_not?: unknown | null | undefined;
    createdAt_in?: Array<unknown> | null | undefined;
    createdAt_not_in?: Array<unknown> | null | undefined;
    createdAt_lt?: unknown | null | undefined;
    createdAt_lte?: unknown | null | undefined;
    createdAt_gt?: unknown | null | undefined;
    createdAt_gte?: unknown | null | undefined;
    updatedAt?: unknown | null | undefined;
    updatedAt_not?: unknown | null | undefined;
    updatedAt_in?: Array<unknown> | null | undefined;
    updatedAt_not_in?: Array<unknown> | null | undefined;
    updatedAt_lt?: unknown | null | undefined;
    updatedAt_lte?: unknown | null | undefined;
    updatedAt_gt?: unknown | null | undefined;
    updatedAt_gte?: unknown | null | undefined;
    publishedAt?: unknown | null | undefined;
    publishedAt_not?: unknown | null | undefined;
    publishedAt_in?: Array<unknown> | null | undefined;
    publishedAt_not_in?: Array<unknown> | null | undefined;
    publishedAt_lt?: unknown | null | undefined;
    publishedAt_lte?: unknown | null | undefined;
    publishedAt_gt?: unknown | null | undefined;
    publishedAt_gte?: unknown | null | undefined;
    title?: string | null | undefined;
    title_not?: string | null | undefined;
    title_in?: Array<string> | null | undefined;
    title_not_in?: Array<string> | null | undefined;
    title_contains?: string | null | undefined;
    title_not_contains?: string | null | undefined;
    title_starts_with?: string | null | undefined;
    title_not_starts_with?: string | null | undefined;
    title_ends_with?: string | null | undefined;
    title_not_ends_with?: string | null | undefined;
    description?: string | null | undefined;
    description_not?: string | null | undefined;
    description_in?: Array<string> | null | undefined;
    description_not_in?: Array<string> | null | undefined;
    description_contains?: string | null | undefined;
    description_not_contains?: string | null | undefined;
    description_starts_with?: string | null | undefined;
    description_not_starts_with?: string | null | undefined;
    description_ends_with?: string | null | undefined;
    description_not_ends_with?: string | null | undefined;
    errorMessage?: string | null | undefined;
    errorMessage_not?: string | null | undefined;
    errorMessage_in?: Array<string> | null | undefined;
    errorMessage_not_in?: Array<string> | null | undefined;
    errorMessage_contains?: string | null | undefined;
    errorMessage_not_contains?: string | null | undefined;
    errorMessage_starts_with?: string | null | undefined;
    errorMessage_not_starts_with?: string | null | undefined;
    errorMessage_ends_with?: string | null | undefined;
    errorMessage_not_ends_with?: string | null | undefined;
    isActive?: boolean | null | undefined;
    isActive_not?: boolean | null | undefined;
    isImplicit?: boolean | null | undefined;
    isImplicit_not?: boolean | null | undefined;
    releaseAt?: unknown | null | undefined;
    releaseAt_not?: unknown | null | undefined;
    releaseAt_in?: Array<unknown> | null | undefined;
    releaseAt_not_in?: Array<unknown> | null | undefined;
    releaseAt_lt?: unknown | null | undefined;
    releaseAt_lte?: unknown | null | undefined;
    releaseAt_gt?: unknown | null | undefined;
    releaseAt_gte?: unknown | null | undefined;
    createdBy?: UserWhereInput | null | undefined;
    updatedBy?: UserWhereInput | null | undefined;
    publishedBy?: UserWhereInput | null | undefined;
    operations_every?: ScheduledOperationWhereInput | null | undefined;
    operations_some?: ScheduledOperationWhereInput | null | undefined;
    operations_none?: ScheduledOperationWhereInput | null | undefined;
    status?: ScheduledReleaseStatus | null | undefined;
    status_not?: ScheduledReleaseStatus | null | undefined;
    status_in?: Array<ScheduledReleaseStatus> | null | undefined;
    status_not_in?: Array<ScheduledReleaseStatus> | null | undefined;
};
export type CategoryWhereInput = {
    _search?: string | null | undefined;
    AND?: Array<CategoryWhereInput> | null | undefined;
    OR?: Array<CategoryWhereInput> | null | undefined;
    NOT?: Array<CategoryWhereInput> | null | undefined;
    id?: string | null | undefined;
    id_not?: string | null | undefined;
    id_in?: Array<string> | null | undefined;
    id_not_in?: Array<string> | null | undefined;
    id_contains?: string | null | undefined;
    id_not_contains?: string | null | undefined;
    id_starts_with?: string | null | undefined;
    id_not_starts_with?: string | null | undefined;
    id_ends_with?: string | null | undefined;
    id_not_ends_with?: string | null | undefined;
    createdAt?: unknown | null | undefined;
    createdAt_not?: unknown | null | undefined;
    createdAt_in?: Array<unknown> | null | undefined;
    createdAt_not_in?: Array<unknown> | null | undefined;
    createdAt_lt?: unknown | null | undefined;
    createdAt_lte?: unknown | null | undefined;
    createdAt_gt?: unknown | null | undefined;
    createdAt_gte?: unknown | null | undefined;
    updatedAt?: unknown | null | undefined;
    updatedAt_not?: unknown | null | undefined;
    updatedAt_in?: Array<unknown> | null | undefined;
    updatedAt_not_in?: Array<unknown> | null | undefined;
    updatedAt_lt?: unknown | null | undefined;
    updatedAt_lte?: unknown | null | undefined;
    updatedAt_gt?: unknown | null | undefined;
    updatedAt_gte?: unknown | null | undefined;
    publishedAt?: unknown | null | undefined;
    publishedAt_not?: unknown | null | undefined;
    publishedAt_in?: Array<unknown> | null | undefined;
    publishedAt_not_in?: Array<unknown> | null | undefined;
    publishedAt_lt?: unknown | null | undefined;
    publishedAt_lte?: unknown | null | undefined;
    publishedAt_gt?: unknown | null | undefined;
    publishedAt_gte?: unknown | null | undefined;
    name?: string | null | undefined;
    name_not?: string | null | undefined;
    name_in?: Array<string> | null | undefined;
    name_not_in?: Array<string> | null | undefined;
    name_contains?: string | null | undefined;
    name_not_contains?: string | null | undefined;
    name_starts_with?: string | null | undefined;
    name_not_starts_with?: string | null | undefined;
    name_ends_with?: string | null | undefined;
    name_not_ends_with?: string | null | undefined;
    createdBy?: UserWhereInput | null | undefined;
    updatedBy?: UserWhereInput | null | undefined;
    publishedBy?: UserWhereInput | null | undefined;
    scheduledIn_every?: ScheduledOperationWhereInput | null | undefined;
    scheduledIn_some?: ScheduledOperationWhereInput | null | undefined;
    scheduledIn_none?: ScheduledOperationWhereInput | null | undefined;
};
export type StoriesQueryVariables = {
    where?: StoryWhereInput | null | undefined;
};
export type StoriesQueryResponse = {
    readonly stories: ReadonlyArray<{
        readonly title: string;
        readonly slug: string;
        readonly publishedAt: unknown | null;
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
    readonly response: StoriesQueryResponse;
    readonly variables: StoriesQueryVariables;
};



/*
query StoriesQuery(
  $where: StoryWhereInput
) {
  stories(first: 10, orderBy: publishedAt_DESC, stage: PUBLISHED, where: $where) {
    title
    slug
    publishedAt
    coverImage {
      url
      id
    }
    category {
      name
      id
    }
    excerpt
    id
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "where"
        } as any
    ], v1 = [
        {
            "kind": "Literal",
            "name": "first",
            "value": 10
        } as any,
        {
            "kind": "Literal",
            "name": "orderBy",
            "value": "publishedAt_DESC"
        } as any,
        {
            "kind": "Literal",
            "name": "stage",
            "value": "PUBLISHED"
        } as any,
        {
            "kind": "Variable",
            "name": "where",
            "variableName": "where"
        } as any
    ], v2 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
    } as any, v3 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "slug",
        "storageKey": null
    } as any, v4 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "publishedAt",
        "storageKey": null
    } as any, v5 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "url",
        "storageKey": null
    } as any, v6 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
    } as any, v7 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "excerpt",
        "storageKey": null
    } as any, v8 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "StoriesQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Story",
                    "kind": "LinkedField",
                    "name": "stories",
                    "plural": true,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        (v4 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Asset",
                            "kind": "LinkedField",
                            "name": "coverImage",
                            "plural": false,
                            "selections": [
                                (v5 /*: any*/)
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
                                (v6 /*: any*/)
                            ],
                            "storageKey": null
                        },
                        (v7 /*: any*/)
                    ],
                    "storageKey": null
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "StoriesQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "Story",
                    "kind": "LinkedField",
                    "name": "stories",
                    "plural": true,
                    "selections": [
                        (v2 /*: any*/),
                        (v3 /*: any*/),
                        (v4 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "concreteType": "Asset",
                            "kind": "LinkedField",
                            "name": "coverImage",
                            "plural": false,
                            "selections": [
                                (v5 /*: any*/),
                                (v8 /*: any*/)
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
                                (v6 /*: any*/),
                                (v8 /*: any*/)
                            ],
                            "storageKey": null
                        },
                        (v7 /*: any*/),
                        (v8 /*: any*/)
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
    } as any;
})();
(node as any).hash = 'd4aa35330af6aede4096d94a0ca0097b';
export default node;
