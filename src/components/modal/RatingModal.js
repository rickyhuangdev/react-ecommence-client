import React, {useState} from 'react';
import {Modal} from 'antd';
import {BsStar} from "react-icons/bs";

import {useSelector} from "react-redux";
import {useHistory,useParams} from "react-router-dom";
import StarRatings from "react-star-ratings";
import {createProductRatingApi} from "../../api/product";
import {toast} from "react-toastify";

const RatingModal = ({title,product_id,existingRatingObject}) => {
    const user = useSelector(state => state.profile.user)
    const [modalVisible, setModalVisible] = useState(false)
    const history = useHistory()
    const params = useParams()
    const [star, setStar] = useState(0);
    const handleModal = ()=>{
        if(user && user.token){
            setModalVisible(true)
            setStar(existingRatingObject)
        }else{
            history.replace({
                pathname:'/login',
                state:{from: `/product/${params.slug}`}
            })
        }
    }
    const changeRating = (newRating, name) => {
        setStar(newRating)
        createProductRatingApi(name, newRating).then(res => {
            if(res){
                setModalVisible(false)
                toast.success("Leaving rating successfully")
            }
        })
    }
    return (
        <>
            <button className="btn btn-light shadow-none d-flex align-items-center"
                    onClick={handleModal}>
                <BsStar className="mr-2 text-warning"/>{user && user.token ? 'leave a Rating' : 'login to leave rating'}
            </button>
            <Modal
                title={`Leaving a rating for [ ${title} ]`}
                centered
                visible={modalVisible}
                onOk={() => setModalVisible(false)}
                onCancel={() => setModalVisible(false)}
            >
                <form>
                    <div className="form-group row">
                        <label htmlFor="rating" className="col-sm-3 col-form-label font-weight-bold">Your Rating</label>
                        <div className="col-sm-9 d-flex">
                            <StarRatings
                                rating={star}
                                starRatedColor="rgb(252, 190, 0)"
                                starHoverColor="rgb(252, 190, 0)"
                                changeRating={changeRating}
                                numberOfStars={5}
                                name={product_id}
                                starSpacing='1px'
                                starDimension="20px"
                                isSelectable={false}
                            />
                        </div>
                    </div>
                </form>

            </Modal>
        </>
    );
};

export default RatingModal;
