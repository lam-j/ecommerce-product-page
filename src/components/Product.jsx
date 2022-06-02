import React, { useState } from "react";
import ProductImages from "./ProductImages.jsx";

export default function Product(props) {
    const [count, setCount] = useState(0);
    return (
        <div className="product">
            <ProductImages
                productImages={props.productImages}
                thumbnailImages={props.thumbnailImages}
                toggleLightbox={props.toggleLightbox}
            />
            <div className="product-detail">
                <p className="product-designer">{props.designer}</p>
                <h1 className="product-name">{props.name}</h1>
                <p className="product-description">{props.description}</p>
                <div className="price">
                    <h3 className="current-price">${props.currentPrice}</h3>
                    <div className="discount">
                        <p>%{props.discount}</p>
                    </div>
                    <p className="original-price">${props.originalPrice}</p>
                </div>
                <div className="product-checkout">
                    <div className="quantity">
                        <img
                            src="./images/icon-minus.svg"
                            alt="minus"
                            onClick={() => {
                                setCount((prev) => {
                                    if (prev - 1 >= 0) {
                                        return prev - 1;
                                    } else {
                                        return prev;
                                    }
                                });
                            }}
                        />
                        <h4>{count}</h4>
                        <img
                            src="./images/icon-plus.svg"
                            alt="plus"
                            onClick={() => {
                                setCount((prev) => {
                                    if (prev + 1 <= 10) {
                                        return prev + 1;
                                    } else {
                                        return prev;
                                    }
                                });
                            }}
                        />
                    </div>
                    <button>
                        <img src="./images/icon-cart-white.svg" alt="checkout-cart" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
