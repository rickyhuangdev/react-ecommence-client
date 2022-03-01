import React, {useEffect, useState} from 'react';
import {fetchProductsApi} from "../../api/product";
import ProductSlider from "./productSlider";

const BestSellers = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {

        getProducts();
    }, [])
    const [products, setProducts] = useState([])
    const getProducts = () => {
        setLoading(true);
        fetchProductsApi('sold', 'desc', 6).then(re => {
            setProducts(re)
            setLoading(false);
        })
    }
    return (
        <div className="container-fluid pb-2">
            {loading?'loading...':(
                <ProductSlider products={products} title="Best Seller" className="mb-4"/>
            )}

        </div>
    );
};

export default BestSellers;
