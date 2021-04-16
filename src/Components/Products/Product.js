import React from 'react'
import { Link } from 'react-router-dom'

import { Table, Space, Tooltip, Image } from 'antd';

const columns = [
  {
    title: 'Sr. No.',
    dataIndex: 'id',
    key: 'id',
    width: 100,
    render: (id) => <Link to={`/${id}`}>{id} view</Link>,
  },
  {
    title: 'Name',
    // dataIndex: 'id',
    dataIndex: 'name',
    key: 'id',
    key: 'name',
    width: 300,
    // render: text => <a href={'${}'}>{text}</a>,
    // render: (text, id) => <Link to={`/${id}`}><p>{id} && {text}</p></Link>,
    
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    width: 150,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    width: 150,
  },
  {
    title: 'Stock Count',
    dataIndex: 'countInStock',
    key: 'countInStock',
    width: 150,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    ellipsis: {
      showTitle: false,
    },
    render: description => (
      <Tooltip placement="topLeft" title={description}>
        {description}
      </Tooltip>
    ),
  },
  // {
  //   title: 'Image',
  //   dataIndex: 'image',
  //   key: 'image',
  //   render: image => (
  //       <Image
  //       width={200}
  //       src={image}
  //     />
  //   )
  // },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const Products = (props) => {
    return(
        <Table
          columns={columns}
          dataSource={props.data}
          pagination={{ pageSize: 20 }}
          scroll={{ y: 240 }}
          title={() => <h1>Product List</h1>}
        />
    );
}

export default Products;