import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ images, autoSlideInterval }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
        }, autoSlideInterval);

        return () => clearInterval(intervalId);
    }, [images.length, autoSlideInterval]);

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className="carousel-container mx-auto mt-10 w-12/12 h-31rem object-cover relative overflow-hidden">
            <div
                className="carousel-slide flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {images.map((image, i) => (
                    <div key={i} className="w-full flex-shrink-0">
                        <img src={image.src} alt={image.alt} className="w-full h-auto" />
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="carousel-control carousel-control-left absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &lt;
            </button>
            <button
                onClick={nextSlide}
                className="carousel-control carousel-control-right absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &gt;
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        className={`w-3 h-3 rounded-full ${i === index ? 'bg-gray-800' : 'bg-gray-400'}`}
                        onClick={() => setIndex(i)}
                        aria-label={`Slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

Carousel.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
    ).isRequired,
    autoSlideInterval: PropTypes.number,
};

Carousel.defaultProps = {
    autoSlideInterval: 2000, // Default to 3 seconds
};

export default Carousel;
