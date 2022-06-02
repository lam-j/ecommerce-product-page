import React, { useState } from "react";
import Header from "./Header.jsx";
import Product from "./Product.jsx";
import Lightbox from "./Lightbox.jsx";
import data from "../data/products.json";

export default function ProductPage() {
    const [isLightboxActive, setIsLightboxActive] = useState(false);
    const [itemCart, setItemCart] = useState([]);

    function addToCart(itemName, currentPrice, quantity, productIcon) {
        const newItem = {
            name: itemName,
            currentPrice: currentPrice,
            quantity: quantity,
            image: productIcon,
        };
        setItemCart((prev) => {
            return [...prev, newItem];
        });
    }

    function deleteFromCart(name) {
        setItemCart((prev) => {
            return prev.filter((item) => {
                return item.name !== name;
            });
        });
    }

    function toggleLightbox() {
        setIsLightboxActive((prev) => !prev);

        const pageContainer = document.querySelector(".page-container");
        if (isLightboxActive) {
            pageContainer.classList.remove("lightbox-active");
        } else {
            pageContainer.classList.add("lightbox-active");
        }
    }

    function createProduct(data) {
        return (
            <Product
                key={data.designer + data.name}
                designer={data.designer}
                name={data.name}
                description={data.description}
                originalPrice={data.originalPrice}
                discount={data.discount}
                currentPrice={data.currentPrice}
                productImages={data.productImages}
                thumbnailImages={data.thumbnailImages}
                toggleLightbox={toggleLightbox}
                addToCart={addToCart}
            />
        );
    }

    function createLightbox(data) {
        return (
            <Lightbox
                key={data.designer + data.name + "lightbox"}
                productImages={data.productImages}
                thumbnailImages={data.thumbnailImages}
                toggleLightbox={toggleLightbox}
            />
        );
    }
    return (
        <div className="page-container">
            <div className="lightbox-backdrop"></div>
            <div className="product-page-wrapper">
                <Header itemCart={itemCart} deleteFromCart={deleteFromCart} />
                <hr />
                {data.map(createProduct)}
                {data.map(createLightbox)}
            </div>
        </div>
    );
}
