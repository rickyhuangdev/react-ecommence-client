import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userListReducer} from "../../../store/reducers/profile";
import {getUserList} from "../../../store/actions/profile";
import AdminNav from "../../../components/nav/AdminNav";
import {Popconfirm, Space, Table, Tag,Avatar} from "antd";
import {Link} from "react-router-dom";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

const User = () => {
    const userList = useSelector(state => state.userList)
    const dispatch = useDispatch()
    const {loading, error, users} = userList
    useEffect(()=>{
        dispatch(getUserList())
    },[dispatch])
    const deleteUser = (id) => {

    }
    const columns = [
        {
            title: '頭像',
            dataIndex: 'picture',
            key: 'name',
            render: picture => (
                <>
                    <Avatar src={picture??'https://joeschmoe.io/api/v1/random'} />

                </>
            ),
        },
        {
            title: '用戶名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '帳戶狀態',
            key: 'state',
            dataIndex: 'state',
            render: state => (
                <>

                    <Tag color={state === 1 ? "green" : "volcano"}>
                        {state === 1 ? "启用" : "停用"}
                    </Tag>

                </>
            ),
        },
        {
            title: '操作',
            key: '_id',
            render: (text, record) => (
                <Space size="middle">
                    <Link to={`/admin/user/edit/${record._id}`}><EditOutlined/></Link>
                    <Popconfirm
                        title="Are you sure to delete this ?"
                        placement="rightBottom"
                        onConfirm={() => {
                            deleteUser(record._id)
                        }}
                        okText="Yes"
                        cancelText="No"
                    >
                        <button><DeleteOutlined/></button>
                    </Popconfirm>

                </Space>
            ),
        },
    ];

    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-2 col-xl-2 miliods">
                    <AdminNav/>
                </div>
                <div className="col-12 col-md-12 col-lg-10 col-xl-10">
                    <div className="container p-5">
                        <div className="row gy-5 g-xl-8">
                            <div className="col">
                                <h5>用戶列表</h5>
                                <Table columns={columns} dataSource={users} rowKey={record => record._id} className="mt-4"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
