import React from 'react';
import {ShoppingCartOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {showAverage} from "../../utils/rating";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/actions/cart";
import {toast} from "react-toastify";

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const addToCartHandler = () => {
        dispatch(addToCart({product, count: 1}))
        toast.success("Add to cart successfully",{toastId:product._id})
    }
    return (
        <div className="card d-flex justify-content-center align-items-center shadow-none" style={{minHeight: "350px"}}>
            <img className="card-img-top" src={product.images[0].url} alt={product.title}
                 style={{width: "210px", height: "210px"}}/>
            <div className="card-body d-flex justify-content-center align-items-center flex-column w-100">
                        <div className="card-text text-left pb-5 h6 w-100 font-weight-bold" style={{height:"30px"}}>
                            <Link to={`/product/${product.slug}`} style={{color:'#0068c9',fontSize:'15px',fontWeight:'800'}}>{product.title}</Link>
                        </div>
                        {product && product.ratings && product.ratings.length > 0 ? showAverage(product) : (<div className="mb-0 d-flex align-items-center" style={{height:'30px'}}>No rating yet</div>)}
                        <button className="btn btn-info d-flex w-100 mt-4 justify-content-center align-items-center shadow-none" type="button" onClick={addToCartHandler}><ShoppingCartOutlined style={{fontSize:"18px"}}className="mr-2" />ADD TO CART</button>
                    </div>
            </div>
    );
};

export default ProductCard;
