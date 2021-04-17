import React from 'react';
import axios from 'axios';

import { Button, Form, FormGroup, Input, Label, Col, InputGroup, InputGroupAddon } from 'reactstrap';

import { API_URL } from '../../Assets/constants/Constants';

class NewProductForm extends React.Component {
  state = {
    pk: 0,
    category: "",
    name: "",
    image: null,
    description: "",
    price: "",
    countInStock: ""
  };

  componentDidMount() {
    if (this.props.product) {
      const { pk,category, name, image, description, price, countInStock } = this.props.product;
      this.setState({ pk, category, name, image, description, price, countInStock });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createProduct = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editProduct = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.product ? this.editProduct : this.createProduct}>
        <FormGroup row>
          <Label for="category" sm={2}>Category:</Label>
          <Col sm={10}>
            <Input type="select" name="category" onChange={this.onChange}>
                <option value="">Select</option>
                <option value="Mobile">Mobiles</option>
                <option value="Computer">Computers</option>
                <option value="Electronic">Electronics</option>
                <option value="Gaming">Gaming</option>
                <option value="Software">Software</option>
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="name" sm={2}>Name:</Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.name)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="image" sm={2}>Image</Label>
          <Col sm={10}>
            <Input type="file" name="image" />
            {/* <FormText color="muted">
              This is some placeholder block-level help text for the above input.
              It's a bit lighter and easily wraps to a new line.
            </FormText> */}
          </Col>
        </FormGroup>

        {/* <FormGroup row>
          <Label for="image" sm={2}>Image:</Label>
          <Col sm={10}>
            <Input
              type="file"
              name="image"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.image)}
            />
          </Col>
        </FormGroup> */}

        <FormGroup row>
          <Label for="description" sm={2}>Description:</Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="description"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.description)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="price" sm={2}>Price:</Label>
          <Col sm={10}>
            <InputGroup>
              <InputGroupAddon addonType="prepend">$</InputGroupAddon>
              <Input placeholder="Price" min={0.00} max={100000.00} type="number" step="0.01" name="price"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.price)} />
            </InputGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="countInStock" sm={2}>Stock:</Label>
          <Col sm={10}>
            <Input
              type="number"
              name="countInStock"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.countInStock)}
            />
          </Col>
        </FormGroup>

        <Button>Add</Button>
      </Form>
    );
  }
}

export default NewProductForm;