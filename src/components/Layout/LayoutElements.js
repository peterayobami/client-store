import Layout, { Content as ContentElement, Footer, Header } from 'antd/lib/layout/layout';
import { UserOutlined, SettingOutlined, NotificationOutlined } from '@ant-design/icons';
import styled from 'styled-components';

/**
 * Styled component for the antd Content
 */
export const Content = styled(ContentElement)`
    /* background: rgba(231, 122, 26, 0.02); */
    background: transparent;
    min-height: 100vh;
    margin: 88px 24px 0;
    height: auto;

    /* border: 0.01px dashed rgba(0, 0, 0, 0.3); */
`;

export const FooterView = styled(Footer)`
    text-align: center;
    margin: 24px 24px 0;
    background: rgba(231, 122, 26, 0.09);
`;

export const HeaderView = styled(Header)`
    padding: 0;
    margin-left: 100px;
    background: #fff;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    box-shadow: 0 4px 2px -2px rgba(231, 122, 26, 0.2);
    z-index: 1000;
    background-image: url('https://outlook-1.cdn.office.net/owamail/20210719002.04/resources/images/themes/circuit/headerbgmaing2-small.jpg');
`;

export const HeaderRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: inherit;
    background: rgba(255, 255, 255, 0.9);
`;

export const HeaderImgLogoCol = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    padding: 0 24px;
    cursor: pointer;
`;

export const HeaderOptionsCol = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: inherit;
    justify-content: center;
`;

export const NotificationsOption = styled.div`
    height: inherit;
    width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    /* border: 1px dashed #000; */

    &:hover {
        background: rgba(231, 122, 26, 0.2);
        transition: 0.3s ease-in-out;
    }
`;

export const SettingsOption = styled.div`
    height: inherit;
    width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    /* border: 1px dashed #000; */
    
    &:hover {
        background: rgba(231, 122, 26, 0.2);
        transition: 0.3s ease-in-out;
    }
`;

export const AccountManagerOption = styled.div`
    height: inherit;
    width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    /* border: 1px dashed #000; */

    &:hover {
        background: rgba(231, 122, 26, 0.2);
        transition: 0.3s ease-in-out;
    }
`;

export const UserAvartarBorder = styled.div`
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(231, 122, 26, 1);
    color: rgba(231, 122, 26, 1);
    padding: 5px;
    border-radius: 100%;
`;

export const UserAvartar = styled(UserOutlined)`
    color: rgba(231, 122, 26, 1);
    font-size: 18px;
`;

export const SettingsIcon = styled(SettingOutlined)`
    color: rgba(231, 122, 26, 1);
    font-size: 18px;
`;

export const NotificationIcon = styled(NotificationOutlined)`
    color: rgba(231, 122, 26, 1);
    font-size: 18px;
`;

export const ContentLayout = styled(Layout)`
    margin-left: 100px;
`;
