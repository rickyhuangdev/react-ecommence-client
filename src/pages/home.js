import React from 'react';
import Banner from "./home/banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlider from "./home/productSlider";
import ProductList from "./home/productList";
import TwoColBanner from "./home/TwoColBanner";
import FeatureArea from "./home/FeatureArea";
const Home = () => {
    return (
        <>
            <ProductSlider />
            <FeatureArea />
            <Banner/>
            <ProductList />
            <TwoColBanner/>
        </>
    );
};

export default Home;
