import styled from "styled-components";
import { Layout, Menu as AntMenu } from 'antd';
// import { Layout, Menu, Breadcrumb } from 'antd';

// const { SubMenu } = Menu;
const { Sider } = Layout;

/**
 * The SideMenu component
 */
export const SideMenu = styled(Sider)`
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    background: #e77a1a;
`;

/**
 * The MenuItem component
 */
// export const MenuItem = styled(AntMenu.MenuItem)`
//     font-family: inherit;
// `;

/**
 * The MenuItemWrapper component
 */
// export const Menu = styled(AntMenu)`
//     font-family: inherit;
// `;

export const NavLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    cursor: pointer;
    /* margin: 16px; */
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
`;
