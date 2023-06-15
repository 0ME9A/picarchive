import accessKey from "./key";

export default async function getRelatedPhotos(photoId: string) {
    const apiUrl: string = `https://api.unsplash.com/photos/${photoId}/related?client_id=${accessKey}`

    try {
        const response: Response = await fetch(apiUrl);
        if (response.status === 200) {
            return { raw: response, error: false }
        } else {
            return { raw: response, error: true }
        }

    } catch (error) {
        return { raw: null, error: true }
    }
};