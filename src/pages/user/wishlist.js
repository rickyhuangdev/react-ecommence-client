import React, {useEffect} from 'react';
import UserNav from "../../components/nav/UserNav";
import Loader from "../../components/loader/Loader";
import Message from "../../components/message/Message";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteWishlist, getWishlist} from "../../store/actions/wishlist";
import {BsTrash} from "react-icons/bs";

const Wishlist = () => {
    const dispatch = useDispatch()
    const getWishlists = useSelector(state => state.getWishlist)
    const {loading, list, error} = getWishlists
    const removeWishlist = useSelector(state => state.removeWishlist)
    const {loading: removeWishlistLoading, success: removeWishlistSuccess, error: removeWishlistError} = removeWishlist
    useEffect(() => {
        dispatch(getWishlist())
    }, [removeWishlistSuccess])
    const handleRemoveWishlistItem = (id) => {
        dispatch(deleteWishlist(id))
    }
    return (
        <div className="container py-5">
            <div className="row align-items-start justify-content-between">
                <div className="col-12 col-md-4">
                    <UserNav/>
                </div>
                <div className="col-12 col-md-8 mt-5 mt-md-0">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col">
                                <h4>Wishlist</h4>
                                {removeWishlistLoading&&<Loader />}
                                {loading ? <Loader/> : error ? <Message variant="danger" children={error}/> : list&&list.length? (
                                    <div className="table-responsive">
                                        <table className="table align-middle">
                                            <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Product Name</th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {list&&list.map(item => (
                                                <tr key={item._id}>
                                                    <td>
                                                        <Link to={`/product/${item.products[0].slug}`}>
                                                            <img src={item.products[0].images[0].url} alt={item.products[0].slug}
                                                                 className="img-fluid" style={{width: '60px'}}/>
                                                        </Link>
                                                    </td>
                                                    <td>{item.products[0].title}</td>
                                                    <td>
                                                        <Button variant="light" size="small"
                                                                className="btn-outline-none"
                                                                onClick={() => handleRemoveWishlistItem(item.products[0]._id)}>
                                                            <BsTrash style={{fontSize: '18px'}}/>
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                ):(<Message variant="info" children="No wish items" />)}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
