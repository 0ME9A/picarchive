import { ApiResponse } from "unsplash-js/dist/helpers/response";
import { BasicPhotoFace } from "./BasicPhotoFace";
import CollectionInfoFace from "./CollectionInfoFace";
import CollectionFace from "./CollectionFace";
import ProfileFace from "./ProfileFace";
import PhotoFace from "./ThePhotoFace";
import TopicFace from "./TopicFace";

export interface GetPhotoListResponse {
    raw: ApiResponse<{
        results: BasicPhotoFace[];
        total: number;
    }> | null;
    error: boolean;
}

export interface GetCollectionListResponse {
    raw: ApiResponse<{
        results: CollectionFace[];
        total: number;
    }> | null;
    error: boolean;
}

export interface GetTopicListResponse {
    raw: ApiResponse<{
        results: TopicFace[];
        total: number;
    }> | null;
    error: boolean;
}

export interface GetTopicResponse {
    raw: ApiResponse<{
        results: BasicPhotoFace[];
        total: number;
    }> | null;
    error: boolean;
}

export interface GetPhotographerResponse {
    raw: ApiResponse<ProfileFace> | null;
    error: boolean;
}

export interface GetCollectionInfoResponse {
    raw: ApiResponse<CollectionInfoFace> | null;
    error: boolean;
}

export interface GetThePhoto {
    raw: ApiResponse<PhotoFace> | null;
    error: boolean;
}

export interface GetRandomResponse {
    raw: ApiResponse<BasicPhotoFace | BasicPhotoFace[]> | null;
    error: boolean;
}