import React from "react";
import Header from "./Header.jsx";
import Product from "./Product.jsx";
import data from "../data/products.json";

export default function ProductPage() {
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
            />
        );
    }
    return (
        <div className="wrapper">
            <Header />
            <hr />
            {data.map(createProduct)}
        </div>
    );
}
