import React, { Component } from 'react';
import { Layout } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { NavLogo, SideMenu } from './SidebarElements';
// import { MenuItem, Menu, SideMenu } from './SidebarElements';
import { GiBookPile } from 'react-icons/gi';
import { CgMenuGridO } from 'react-icons/cg';
import { BarChartOutlined, ShoppingOutlined } from '@ant-design/icons';

export default class Sidebar extends Component {


    // The view content to render
    render() {
        return (
            <Layout>
                <SideMenu width='100px'>
                    <NavLogo>
                        <CgMenuGridO style={{ fontSize: '30px', color: '#fff' }} />
                    </NavLogo>
                    <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1" style={{ height: 'auto', padding: '16px', lineHeight: '1.5' }}>
                            <Link to="/">
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span><ShoppingOutlined style={{ fontSize: '16px' }} /></span>
                                    <span>Orders</span>
                                </div>
                            </Link>
                        </Menu.Item>
                        <Menu.Item title="Products" key="2" style={{ height: 'auto', padding: '16px', lineHeight: '1.5' }}>
                            <Link to="/products">
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span><GiBookPile style={{ fontSize: '16px' }} /></span>
                                    <span>Products</span>
                                </div>
                            </Link>
                        </Menu.Item>
                        <Menu.Item title="Report" key="3" style={{ height: 'auto', padding: '16px', lineHeight: '1.5' }}>
                            <Link to="/reports">
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span><BarChartOutlined style={{ fontSize: '16px' }} /></span>
                                    <span>Reports</span>
                                </div>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </SideMenu>
            </Layout>
        )
    }
}
