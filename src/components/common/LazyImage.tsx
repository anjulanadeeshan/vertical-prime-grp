/**
 * Lazy Loading Image Component
 */

import React, { useState } from 'react';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    loading?: 'lazy' | 'eager';
}

const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    className = '',
    width,
    height,
    loading = 'lazy',
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
        <div className="relative w-full h-full">
            {!imageLoaded && !imageError && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
            )}
            {imageError && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center rounded">
                    <span className="text-gray-400 text-sm">Image unavailable</span>
                </div>
            )}
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading={loading}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                    setImageError(true);
                    setImageLoaded(true);
                }}
                className={`${className} ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                style={{ display: imageError ? 'none' : 'block' }}
            />
        </div>
    );
};

export default LazyImage;
