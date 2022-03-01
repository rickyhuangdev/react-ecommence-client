import React, {useState} from 'react';
import {Modal} from 'antd';
import {BsStar} from "react-icons/bs";

import {useSelector} from "react-redux";

const RatingModal = ({title,children}) => {
    const user = useSelector(state => state.profile.user)
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <button className="btn btn-light shadow-none d-flex align-items-center"
                    onClick={() => setModalVisible(true)}>
                <BsStar className="mr-2 text-warning"/>{user ? 'leave a Rating' : 'login to leave rating'}
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
