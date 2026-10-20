"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ImageGallery({ images, title }: { images: string[]; title: string }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const close = () => setOpenIndex(null);
    const showPrevious = () => setOpenIndex((index) => index === null ? null : (index - 1 + images.length) % images.length);
    const showNext = () => setOpenIndex((index) => index === null ? null : (index + 1) % images.length);

    useEffect(() => {
        if (openIndex === null) return;

        const handleKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpenIndex(null);
            if (event.key === "ArrowLeft") setOpenIndex((index) => index === null ? null : (index - 1 + images.length) % images.length);
            if (event.key === "ArrowRight") setOpenIndex((index) => index === null ? null : (index + 1) % images.length);
        };

        document.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [openIndex, images.length]);

    return (
        <>
            <div className="mt-6 columns-1 gap-6 md:columns-2">
                {images.map((src, index) => (
                    <button
                        key={src}
                        type="button"
                        onClick={() => {
                            if (window.matchMedia("(min-width: 768px)").matches) setOpenIndex(index);
                        }}
                        className="mb-6 block w-full cursor-default break-inside-avoid md:cursor-zoom-in"
                    >
                        <Image
                            src={src}
                            alt={`${title} photo ${index + 1}`}
                            width={1000}
                            height={1000}
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="h-auto w-full rounded-xl"
                            loading="eager"
                        />
                    </button>
                ))}
            </div>

            {openIndex !== null && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${title} photo ${openIndex + 1} of ${images.length}`}
                    onClick={close}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
                >
                    <div className="relative h-[75vh] w-[90vw] md:h-[85vh]">
                        <Image
                            src={images[openIndex]}
                            alt={`${title} photo ${openIndex + 1}`}
                            fill
                            sizes="90vw"
                            className="object-contain"
                            loading="eager"
                        />
                    </div>

                    <button
                        type="button"
                        aria-label="Close"
                        onClick={close}
                        className="absolute right-4 top-4 flex size-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                    >
                        <X className="size-5" />
                    </button>

                    {images.length > 1 && (
                        <>
                            <button
                                type="button"
                                aria-label="Previous photo"
                                onClick={(event) => { event.stopPropagation(); showPrevious(); }}
                                className="absolute left-4 top-1/2 flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
                                <ChevronLeft className="size-5" />
                            </button>
                            <button
                                type="button"
                                aria-label="Next photo"
                                onClick={(event) => { event.stopPropagation(); showNext(); }}
                                className="absolute right-4 top-1/2 flex size-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
                                <ChevronRight className="size-5" />
                            </button>

                            <p className="absolute bottom-4 text-sm text-white/70">
                                {openIndex + 1} / {images.length}
                            </p>
                        </>
                    )}
                </div>
            )}
        </>
    );
}
