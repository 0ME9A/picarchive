import { useEffect, useState } from "react";

interface ImageSize {
    width: number;
    height: number;
}

interface ImageData {
    key: string;
    value: string;
}

export default function usePhotosAspect(images: ImageData[]) {
    const [imageSizes, setImageSizes] = useState<{ [key: string]: ImageSize }>({});

    useEffect(() => {
        const fetchImageSizes = async () => {
            const sizes: { [key: string]: ImageSize } = {};

            for (const image of images) {
                try {
                    const imageSize = await getImageSize(image.value);
                    sizes[image.key] = imageSize;
                } catch (error) {
                    // console.error(`Error fetching size for image ${image.key}:`, error);
                    console.error(`Error, fetching size for image!!!`);
                }
            }

            setImageSizes(sizes);
        };

        fetchImageSizes();
    }, []);
    
    return imageSizes;
};

const getImageSize = (imageUrl: string): Promise<ImageSize> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            const imageSize: ImageSize = {
                width: img.width,
                height: img.height,
            };
            resolve(imageSize);
        };
        img.onerror = (error) => {
            reject(error);
        };
    });
};
