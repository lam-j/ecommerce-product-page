import React, { useState } from "react";
import { useEffect } from "react";

export default function ProductImages(props) {
    const [currentHero, setCurrentHero] = useState("0");

    useEffect(() => {
        const target = document.getElementById("hero0");
        target.classList.add("active");
    }, []);

    useEffect(() => {
        const heroes = document.querySelectorAll(".hero");
        const thumbnails = document.querySelectorAll(".thumbnail");

        heroes.forEach((hero) => {
            hero.classList.remove("active");
        });
        thumbnails.forEach((thumbnail) => {
            thumbnail.classList.remove("active");
        });

        if (currentHero === "0") {
            document.getElementById("hero0").classList.add("active");
            document.getElementById("thumbnail0").classList.add("active");
        } else if (currentHero === "1") {
            document.getElementById("hero1").classList.add("active");
            document.getElementById("thumbnail1").classList.add("active");
        } else if (currentHero === "2") {
            document.getElementById("hero2").classList.add("active");
            document.getElementById("thumbnail2").classList.add("active");
        } else if (currentHero === "3") {
            document.getElementById("hero3").classList.add("active");
            document.getElementById("thumbnail3").classList.add("active");
        }
    }, [currentHero]);

    function toggleImage(e) {
        switch (e.target.id) {
            case "thumbnail1":
                setCurrentHero("1");
                break;
            case "thumbnail2":
                setCurrentHero("2");
                break;
            case "thumbnail3":
                setCurrentHero("3");
                break;
            default:
                setCurrentHero("0");
                break;
        }
    }

    function displayLightbox() {
        return 0;
    }

    function createHeroes(image, index) {
        return (
            <img
                className="hero"
                src={image}
                alt={"hero" + index}
                key={"hero" + index}
                id={"hero" + index}
                index={index}
                onClick={displayLightbox}
            />
        );
    }
    function createThumbnails(image, index) {
        return (
            <img
                className="thumbnail"
                src={image}
                alt={"thumbnail" + index}
                key={"thumbnail" + index}
                id={"thumbnail" + index}
                onClick={toggleImage}
            />
        );
    }
    return (
        <div className="product-images">
            <div className="heroes">{props.productImages.map(createHeroes)}</div>
            <div className="thumbnails">{props.thumbnailImages.map(createThumbnails)}</div>
        </div>
    );
}
