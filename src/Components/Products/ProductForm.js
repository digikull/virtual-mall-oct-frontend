import React from 'react'
import axios from 'axios'

import { Form, Input, Button, Select, Upload, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

class ProductForm extends React.Component {

    handleFormSubmit = async (event, requestType, productID) => {
        event.preventDefault();

        const productObj = {
            name: event.target.elements.name.value,
            category: event.target.elements.category.value,
            description: event.target.elements.description.value,
            price: event.target.elements.price.value,
            countInStock: event.target.elements.countInStock.value,
            image: event.target.elements.image.value
        }

        // if (requestType === "post") {
        //     await axios.post("http://127.0.0.1:8000/api/create/", productObj)
        //         .then(res => {
        //             if (res.status === 201) {
        //             this.props.history.push(`/`);
        //             this.forceUpdate();
        //             }
        //         })
        // } else if (requestType === "put") {
        //     await axios.put(`http://127.0.0.1:8000/api/${productID}/update/`, productObj)
        //         .then(res => {
        //             if (res.status === 200) {
        //             this.props.history.push(`/`);
        //             this.forceUpdate();
        //             }
        //         })
        //     }

        switch ( requestType ) {
            case 'post':
                return axios.post("http://127.0.0.1:8000/api/create/", {
                    productObj
                })
                .then(res => console.log(res))
                .catch(error => console.err(error))
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${productID}/update/`, {
                    productObj
                })
                .then(res => console.log(res))
                .catch(error => console.err(error))
                
        } 
    };

    render() {
        return (
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                onSubmit={event =>
                    this.handleFormSubmit(
                        event,
                        this.props.requestType,
                        this.props.productID
                    )
                }
            >
                <Form.Item name= "name" label="Name">
                    <Input placeholder="Product name" />
                </Form.Item>

                <Form.Item name="category" label="Category" hasFeedback>
                    <Select placeholder="Product category">
                        <Option value="Computers">Computers</Option>
                        <Option value="Electronics">Electronics</Option>
                        <Option value="Gaming">Gaming</Option>
                        <Option value="Mobies">Mobies</Option>
                        <Option value="Software">Software</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="description" label="Description">
                    <Input.TextArea placeholder="Describe product / Specifications"/>
                </Form.Item>

                <Form.Item name="price" label="Price">
                    {/* <Input placeholder="Product price" /> */}
                    <InputNumber
                        defaultValue={0}
                        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                    />
                </Form.Item>

                <Form.Item name="stockInCount" label="Stock Count">
                    {/* <Input placeholder="Stock available" /> */}
                    <InputNumber min={1} max={100} defaultValue={0} />
                </Form.Item>

                <Form.Item
                    name="image"
                    label="Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload name="image" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Click to upload image</Button>
                    </Upload>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                </Form.Item>
            </Form>
        );
    }
};

export default ProductForm;
