import React, { Component } from "react";
import { Table } from "reactstrap";

import NewProductModal from "./NewProductModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

class ProductList extends Component {
  render() {
    const products = this.props.products;
    return (
      <Table striped>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Image</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>#</th>
            {/* <th>Created At</th> */}
          </tr>
        </thead>
        <tbody>
          {!products || products.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no product added yet</b>
              </td>
            </tr>
          ) : (
            products.map(product => (
              <tr key={product.pk}>
                <td>{product.category}</td>
                <td>{product.name}</td>
                <td>{product.image}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.countInStock}</td>
                {/* <td>{product.createdAt}</td> */}
                <td align="center">
                  <NewProductModal
                    create={false}
                    product={product}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={product.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ProductList;