import React from 'react'
import { Link } from 'react-router-dom'

import { Layout, Menu } from 'antd'

const { Header, Content, Footer } = Layout

const Dashboard = (props) => {
    return(
        <Layout className="layout">
            <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
            </Header>
            <Content style={{ backgroundColor:'white', padding: '0 50px' }}>
                <div className="site-layout-content">{props.children}</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>©2021 Virtual Mall</Footer>
        </Layout>
    );
}

export default Dashboard;