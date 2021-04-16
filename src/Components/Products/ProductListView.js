import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Products from './Product'
import ProductForm from './ProductForm'

import { Button } from 'antd';

class ProductList extends React.Component {

    state = {
        products: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            . then(res => {
                this.setState({
                    products: res.data
                });
            })
    }
    
    render() {
        return (
            <div>
                {/* <Product /> */}
                <Products data = {this.state.products} />
                <br />
                {/* <Button type="primary">
                    <Link href="./ProductForm">Add Product</Link>
                </Button> */}
                <h2>Add Product</h2>
                <ProductForm
                    requestType="post"
                    productID={null}
                    btnText="Add"
                />
            </div>
        )
    }
}

export default ProductList;
