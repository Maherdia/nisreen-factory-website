import "./ImageSlider.css";

import { useState, useEffect } from "react";

import {
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

function ImageSlider({ images }) {

    const [current, setCurrent] = useState(0);

    const next = () => {

        setCurrent((prev) => (prev + 1) % images.length);

    };

    const prev = () => {

        setCurrent((prev) =>
            (prev - 1 + images.length) % images.length
        );

    };

    useEffect(() => {

        if (images.length <= 1) return;

        const interval = setInterval(() => {

            next();

        }, 5000);

        return () => clearInterval(interval);

    }, [current]);

    return (

        <div className="image-slider">

            <img
                src={images[current]}
                alt=""
            />

            {images.length > 1 && (

                <>

                    <button
                        className="slider-arrow left"
                        onClick={prev}
                    >

                        <FaChevronLeft />

                    </button>

                    <button
                        className="slider-arrow right"
                        onClick={next}
                    >

                        <FaChevronRight />

                    </button>

                    <div className="slider-dots">

                        {images.map((_, index) => (

                            <span
                                key={index}
                                className={
                                    current === index
                                        ? "dot active"
                                        : "dot"
                                }
                                onClick={() => setCurrent(index)}
                            />

                        ))}

                    </div>

                </>

            )}

        </div>

    );

}

export default ImageSlider;