import React, {useEffect, useState} from 'react';
import AdminNav from "../../../components/nav/AdminNav";
import {Popconfirm, Space, Table, Tag} from 'antd';
import {deleteCouponApi, getCouponApi} from "../../../api/coupon";
import {Link} from "react-router-dom";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {toast} from "react-toastify";

const CouponIndex = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getCoupon()
    }, [])
    const getCoupon = () => {
        getCouponApi().then(re => {
            if (re) {
                setData(re)
            }
        })
    }
    const deleteCoupon = (id) => {
        deleteCouponApi(id).then(re => {
            if (re) {
                toast("Delete successfully")
                getCoupon()
            }
        })

    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            key: 'discount',
        },
        {
            title: 'Expiry Date',
            dataIndex: 'expiry',
            key: 'expiry',
        },
        {
            title: 'state',
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
            title: 'Action',
            key: '_id',
            render: (text, record) => (
                <Space size="middle">
                    <Link to={`/admin/coupon/${record._id}`}><EditOutlined/></Link>
                    <Popconfirm
                        title="Are you sure to delete this ?"
                        placement="rightBottom"
                        onConfirm={() => {
                            deleteCoupon(record._id)
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
                                <h5>Coupon List</h5>
                                <Table columns={columns} dataSource={data} rowKey={record => record._id}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CouponIndex;
