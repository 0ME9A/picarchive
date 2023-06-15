import { BasicPhotoFace } from "./BasicPhotoFace";

export default interface RelatedPhotosFace {
    total: number
    results: BasicPhotoFace[]
}
