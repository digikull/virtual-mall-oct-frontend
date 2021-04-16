import React from 'react'
import axios from 'axios'

import { Button, Descriptions } from 'antd'

import ProductForm from './ProductForm'

class ProductDetail extends React.Component {

    state = {
        product: {}
    }

    componentDidMount() {
        const productID = this.props.match.params.productID;
        axios.get(`http://127.0.0.1:8000/api/${productID}`)
            . then(res => {
                this.setState({
                    product: res.data
                });
            })
    }

    handleDelete = (event) => {
        event.preventDefault();
        const productID = this.props.match.params.productID;
        axios.delete(`http://127.0.0.1:8000/api/${productID}/delete`)
            . then(res => {
                    if (res.status === 204) {
                        this.props.history.push(`/`);
                    }
            })
    }
    
    render() {
        return (
            <div>
                <Descriptions title={this.state.product.name} layout="vertical" bordered>
                    {/* <Descriptions.Item label="Product Name">{this.state.product.name}</Descriptions.Item> */}
                    <Descriptions.Item label="Category">{this.state.product.category}</Descriptions.Item>
                    <Descriptions.Item label="Price">$ {this.state.product.price}</Descriptions.Item>
                    <Descriptions.Item label="Stock Count">{this.state.product.countInStock}</Descriptions.Item>
                    <Descriptions.Item label="Description">{this.state.product.description}</Descriptions.Item>
                    {/* <Descriptions.Item label="Image">{this.state.product.image}</Descriptions.Item> */}
                </Descriptions>
                <h2>Update Product</h2>
                <ProductForm
                    {...this.props}
                    requestType="put"
                    productID={this.props.match.params.productID}
                    btnText="Update"
                />
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>
            </div>
        );
    }
}

export default ProductDetail;
