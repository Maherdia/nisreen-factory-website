import "./ProductCard.css";

import { useState } from "react";

function ProductCard({
    image,
    title,
    description,
}) {

    const [open, setOpen] = useState(false);

    return (

        <>

            <div className="product-card">

                <div
                    className="product-image"
                    onClick={() => setOpen(true)}
                >
                    <img
                        src={image}
                        alt={title}
                    />
                </div>

                <div className="product-content">

                    <h3>{title}</h3>

                    <p>{description}</p>

                </div>

            </div>

            {open && (

                <div
                    className="image-modal"
                    onClick={() => setOpen(false)}
                >

                    <span className="image-close">
                        ×
                    </span>

                    <img
                        src={image}
                        alt={title}
                        className="image-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    />

                </div>

            )}

        </>

    );

}

export default ProductCard;