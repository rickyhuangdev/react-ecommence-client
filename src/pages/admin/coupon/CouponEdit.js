import React, {useEffect} from 'react';
import {Button, DatePicker, Form, Input, InputNumber, Radio} from "antd";
import moment from "moment";
import {readCouponApi, updateCouponApi} from "../../../api/coupon";
import {toast} from "react-toastify";
import AdminNav from "../../../components/nav/AdminNav";
import {useHistory, useParams} from "react-router-dom";

const CouponEdit = () => {
    const params = useParams()
    let formRef = React.createRef();
    const history =useHistory()
    let initialValues = {}
    useEffect(() => {
        readCoupon()
    }, [])
    const readCoupon = () => {
        readCouponApi(params.id).then(re => {
            if (re) {
                re.expiry = moment()
                re.state = re.state.toString()
                formRef.current.setFieldsValue(re)
            }

        })
    }
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        values.expiry = moment(values.expiry).format()
        values.id = params.id
        const result = await updateCouponApi(values)
        if (result) {
            toast("update coupon successfully")
            onReset()
            history.push('/admin/coupon')

        }

    };
    const onReset = () => {
        formRef.current.resetFields();
    };

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
                                <h4>Edit Coupon</h4>
                                <Form
                                    layout="vertical"
                                    form={form}
                                    onFinish={onFinish}
                                    ref={formRef}
                                    initialValues={initialValues}
                                >

                                    <Form.Item label="Coupon Name" name="name"
                                               rules={[
                                                   {
                                                       type: 'string',
                                                       message: 'The input is not valid type!',
                                                   },
                                                   {
                                                       required: true,
                                                       message: 'Please input coupon name!',
                                                   },
                                               ]}
                                    >
                                        <Input placeholder="input placeholder"/>
                                    </Form.Item>
                                    <Form.Item
                                        name="discount"
                                        label="Discount"
                                        rules={[
                                            {
                                                type: 'number',
                                                min: 0,
                                                max: 99,
                                            },
                                        ]}
                                    >
                                        <InputNumber/>
                                    </Form.Item>
                                    <Form.Item name="expiry" label="Expiry Date">
                                        <DatePicker/>
                                    </Form.Item>
                                    <Form.Item name="state" label="State"
                                               rules={[
                                                   {
                                                       required: true,
                                                       message: 'Please pick an state!',
                                                   },
                                               ]}
                                    >
                                        <Radio.Group>
                                            <Radio value="1">启用</Radio>
                                            <Radio value="0">停用</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                    <Form.Item wrapperCol={{offset: 0, span: 16}}>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CouponEdit;
