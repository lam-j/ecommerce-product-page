import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Lightbox(props) {
    const [activeThumb, setActiveThumb] = useState();

    function createSlides(image, index) {
        return (
            <SwiperSlide key={index}>
                <img src={image} alt={"slide " + index} />
            </SwiperSlide>
        );
    }

    function createThumbnails(image, index) {
        return (
            <SwiperSlide key={index}>
                <img className="thumbnail" src={image} alt={"thumbnail " + index} />
            </SwiperSlide>
        );
    }

    return (
        <div className="lightbox-wrapper">
            <button className="close-lightbox" onClick={props.toggleLightbox}>
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" fill="#FFF">
                    <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
                </svg>
            </button>
            <Swiper
                className="heroes-slider"
                modules={[Navigation, Thumbs]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                grabCursor={true}
                loop={true}
                thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}>
                {props.productImages.map(createSlides)}
            </Swiper>
            <Swiper
                className="heroes-slider-thumbs"
                modules={[Navigation, Thumbs]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
                onSwiper={setActiveThumb}>
                {props.thumbnailImages.map(createThumbnails)}
            </Swiper>
        </div>
    );
}
