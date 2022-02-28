import React from 'react';
import Banner from "./home/banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlider from "./home/productSlider";
import ProductList from "./home/productList";
const Home = () => {
    return (
        <>
            <ProductSlider />
            <Banner/>
            <ProductList />
            <Banner/>
        </>
    );
};

export default Home;
