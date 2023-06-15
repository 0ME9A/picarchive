"use client";
import React, { useEffect, useState } from "react";

const SingleImageSizeChecker = ({ imageUrl, style }: { imageUrl: string, style?: string }) => {
    const [size, setSize] = useState<{ width: number; height: number } | null>(null);

    useEffect(() => {
        const fetchImageSize = async () => {
            const img = new Image();
            img.src = imageUrl;

            img.addEventListener("load", () => {
                const width = img.naturalWidth;
                const height = img.naturalHeight;
                setSize({ width, height });
            });
        };

        fetchImageSize();
    }, [imageUrl]);

    return (
        <>
            {size ? (
                <span className={`text-sm ${style}`}>
                    {size.width} x {size.height}
                </span>
            ) : (
                <span className="animate-pulse">Loading...</span>
            )}
        </>
    );
};

export default SingleImageSizeChecker;
