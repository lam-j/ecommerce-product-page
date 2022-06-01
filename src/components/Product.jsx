import React from "react";

export default function Product(props) {
    function createHeroes(image) {
        return <img src={image} alt="" />;
    }
    function createThumbnails(image) {
        return (
            <button className="thumbnail">
                <img src={image} alt="" />
            </button>
        );
    }
    return (
        <div className="product">
            <div className="product-hero">
                <div className="active-hero">{props.productImages.map(createHeroes)}</div>
                <div className="thumbnails">{props.thumbnailImages.map(createThumbnails)}</div>
            </div>
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
                    <input type="number" name="" id="" />
                    <button>
                        <img src="./images/icon-cart-white.svg" alt="checkout-cart" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
