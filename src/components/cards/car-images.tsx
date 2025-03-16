import React, { useEffect, useState } from 'react';

function CarImages({ title, images }: { title: string; images: string[] }) {
    const [defaultImage, setDefaultImage] = useState<string>('https://cdn.bestsuppliers.com/seo_products_img/biuloo/23798d3c6f853ade868f0f64491471bf.jpg!/rotate/180');
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleImageClick = (image: string, index: number) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[newIndex]);
        setCurrentIndex(newIndex);
    };

    const handlePrev = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[newIndex]);
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        if (images && images.length > 0) {
            setDefaultImage(images[0]);
            setSelectedImage(images[0]);
        }
    }, [images]);

    return (
        <div className="relative overflow-hidden">
            <div className="gallery mb-6">
                <div className="relative">
                    <div className="swiper-slide swiper-slide-active w-full h-60 sm:h-80 md:h-96 lg:h-[400px] border border-gray-200 rounded-lg" role="group" aria-label="1 / 5">
                        <img src={selectedImage ? selectedImage : defaultImage} alt={title} className='rounded-lg h-full w-full object-cover transform transition-transform duration-300 hover:scale-105' />
                    </div>
                    {currentIndex > 0 && (
                        <button onClick={handlePrev} className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 text-slate-800 rounded-full p-2 hover:bg-gray-700 hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}
                    {currentIndex < images.length - 1 && (
                        <button onClick={handleNext} className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 text-slate-800 rounded-full p-2 hover:bg-gray-700 hover:text-white transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            <div className="gallery-nav relative">
                <div className="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-thumbs">
                    <div className="swiper-wrapper flex items-center overflow-auto" id="swiper-wrapper-ba56aeabc563cf4d" aria-live="polite">
                        {images.length > 1 && images.map((image: string, index: number) => (
                            <div key={index} className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next w-32 sm:w-36 md:w-40 lg:w-[133.75px] mr-2 cursor-pointer" data-swiper-slide-index="1" role="group" aria-label="2 / 5">
                                <div onClick={(e) => { e.preventDefault(); handleImageClick(image, index); }} className="swiper-slide w-32 sm:w-36 md:w-40 lg:w-[133.75px] h-20 sm:h-24 md:h-28 lg:h-[80px] mr-2" data-swiper-slide-index={index} role="group" aria-label={`${index + 1} / ${images.length}`}>
                                    <img src={image} alt={title} className='rounded-lg h-full w-full object-cover transform transition-transform duration-300 hover:scale-105' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarImages;