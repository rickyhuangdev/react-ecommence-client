import React, {useEffect, useState} from 'react';
import AdminNav from "../../../components/nav/AdminNav";
import {Popconfirm, Space, Table, Tag} from 'antd';
import {deleteProductApi, getProductApi} from "../../../api/Product";
import {DeleteOutlined, FormOutlined, QuestionCircleOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

const ProductIndex = () => {
    const [selectionType, setSelectionType] = useState('checkbox');
    const [Product, setProduct] = useState([]);
    const {Column, ColumnGroup} = Table;
    useEffect(() => {
        fetchCategories()
    }, [])
    const fetchCategories = () => {
        getProductApi().then(res => {
            const arr = res.map(item => {
                return {
                    key: item._id,
                    name: item.name,
                    slug: item.slug,
                    state: item.state
                }

            })
            setProduct(arr)
        })
    }
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };
    const deleteProductHandler = (slug) => {
        deleteProductApi(slug).then(res => {
            if (res) {
                toast("Delete successfully")
                fetchCategories()
            }
        }).catch(err => {
            if (err.response.status === 400) {
                toast.error(err.response.data)
            }
        })
    }
    return (
        <div className="container-fluid p-0">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-2 col-xl-2 miliods">
                    <AdminNav/>
                </div>
                <div className="col-12 col-md-12 col-lg-10 col-xl-10">
                    <div className="container pt-5">
                        <div className="row">
                            <div className="col">
                                <h4>Product List</h4>
                                <div className="mt-4">
                                    <Table dataSource={Product} rowSelection={{
                                        type: selectionType,
                                        ...rowSelection,
                                    }}>
                                        <Column title="Product " dataIndex="name" key="name"/>
                                        <Column title="Slug" dataIndex="slug" key="slug"/>
                                        <Column
                                            title="State"
                                            dataIndex="state"
                                            key="state"
                                            render={tags => (
                                                <>
                                                    {tags === 1 ? (<Tag color="green" key={tags}>
                                                        processing
                                                    </Tag>) : (
                                                        <Tag color="magenta" key={tags}>
                                                            pending
                                                        </Tag>
                                                    )}
                                                </>
                                            )}
                                        />
                                        <Column
                                            title="Action"
                                            key="action"
                                            render={(text, record) => (
                                                <Space size="middle">
                                                    <Tag><Link to={`/admin/Product/edit/${record.slug}`}>
                                                        <FormOutlined/></Link></Tag>
                                                    <Popconfirm title="Are you sure？"
                                                                icon={<QuestionCircleOutlined style={{color: 'red'}}/>}
                                                                onConfirm={() => {
                                                                    deleteProductHandler(record.slug)
                                                                }}>
                                                        <DeleteOutlined/>
                                                    </Popconfirm>
                                                    {/*<Tag onClick={()=>deleteProductHandler(record.slug)}> <DeleteOutlined/></Tag>*/}

                                                </Space>
                                            )}
                                        />
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductIndex;
