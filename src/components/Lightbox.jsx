import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Lightbox(props) {
    function createSlides(image, index) {
        return (
            <SwiperSlide key={"SwiperSlide" + index}>
                <img src={image} alt={"slide " + index} key={"slide" + index} />
            </SwiperSlide>
        );
    }

    function createThumbnails(image, index) {
        return (
            <img
                className="thumbnail"
                src={image}
                alt={"thumbnail " + index}
                key={"thumbnail" + index}
                id={"thumbnail" + index}
            />
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
                className="swiper"
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}>
                {props.productImages.map(createSlides)}
            </Swiper>

            <div className="thumbnails">{props.thumbnailImages.map(createThumbnails)}</div>
        </div>
    );
}
