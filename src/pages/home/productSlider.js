import React from 'react';
import Slider from "react-slick";
import NewArrivals from "./NewArrivals";
import ProductCard from "../../components/cards/ProductCard";
const ProductSlider = ({products,title}) => {
    const settings = {
        infinite: true,
        dots: false,
        speed: 500,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        lazyLoad: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="slider-area">
            <h4 className="mb-4 font-weight-bold" style={{fontWeight:"700"}}>{title}</h4>
            <Slider {...settings}>
                {products && products.map(product=>(
                    <div key={product._id} className="px-1">
                        <ProductCard product={product} />
                    </div>
                ))}

            </Slider>
        </div>
    );
};

export default ProductSlider;
