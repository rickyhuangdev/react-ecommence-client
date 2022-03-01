import React from 'react';
import Banner from "./home/banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlider from "./home/productSlider";
import NewArrivals from "./home/NewArrivals";
import TwoColBanner from "./home/TwoColBanner";
import FeatureArea from "./home/FeatureArea";
import BestSellers from "./home/BestSellers";
import SliderArea from "./home/SliderArea";
const Home = () => {
    return (
        <>
            <SliderArea />
            <ProductSlider />
            <FeatureArea />
            <Banner/>
            <NewArrivals />
            <TwoColBanner/>
            <BestSellers />
        </>
    );
};

export default Home;
