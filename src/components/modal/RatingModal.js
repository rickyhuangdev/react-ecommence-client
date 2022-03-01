import React, {useState} from 'react';
import {Modal} from 'antd';
import {BsStar} from "react-icons/bs";

import {useSelector} from "react-redux";
import {useHistory,useParams} from "react-router-dom";

const RatingModal = ({title,children}) => {
    const user = useSelector(state => state.profile.user)
    const [modalVisible, setModalVisible] = useState(false)
    const history = useHistory()
    const params = useParams()

    const handleModal = ()=>{
        if(user && user.token){
            setModalVisible(true)
        }else{
            history.replace({
                pathname:'/login',
                state:{from: `/product/${params.slug}`}
            })
        }
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
                            {children}
                        </div>
                    </div>
                </form>

            </Modal>
        </>
    );
};

export default RatingModal;
