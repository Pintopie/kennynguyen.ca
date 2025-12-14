import React from "react";

interface ImageItem {
    src: string;
    alt: string;
    caption?: string;
}

interface GalleryProps {
    images: ImageItem[];
    cols?: 1 | 2 | 3;
}

export function Gallery({ images, cols = 2 }: GalleryProps) {
    // Simple grid class mapping
    const gridCols = {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-3",
    };

    return (
        <div className={`grid ${gridCols[cols]} gap-6 w-full my-8`}>
            {images.map((img, idx) => (
                <div key={idx} className="group relative break-inside-avoid space-y-3">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-muted">
                        {/* Placeholder / Image Logic */}
                        <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center text-muted-foreground text-sm">
                            [Image: {img.src}]
                        </div>
                        {/* 
               If actual images existed, we would use:
               <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
               For now passing placeholder styles
            */}
                    </div>
                    {img.caption && (
                        <p className="text-sm text-muted-foreground text-center italic">{img.caption}</p>
                    )}
                </div>
            ))}
        </div>
    );
}
