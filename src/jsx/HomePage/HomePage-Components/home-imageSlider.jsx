import React, { useState, useEffect } from 'react';
import "../../../css/img-slider.css";

const HomeImageSlider = ({ images, captions }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(scrollNext, 10000); // Scroll every 10 seconds

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [currentIndex]);

    const scrollNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const scrollPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="img-slider-carousel">
            <div className="img-slider-carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="img-slider-carousel-item">
                        <p className="img-slider-carousel-caption">{captions[index]}</p>
                        <img
                            src={image.src}
                            alt={image.alt}
                        />
                    </div>
                ))}
            </div>
            <button className="img-slider-prev" onClick={scrollPrev}>❮</button>
            <button className="img-slider-next" onClick={scrollNext}>❯</button>
        </div>
    );
};

export default HomeImageSlider;

