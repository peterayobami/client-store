import React, { Component } from 'react';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Reports from './pages/Reports';
import { Badge, Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './App.css';
import XStoreLogo from './images/x-store-logo.png';
import "antd/dist/antd.css";
import { CgMenuGridO } from 'react-icons/cg';
import ContentView from './components/Layout';
import { NavLogo } from './components/Sidebar/SidebarElements';
import { ContentLayout, FooterView, HeaderRow, HeaderImgLogoCol, HeaderView, HeaderOptionsCol, NotificationsOption, SettingsOption, AccountManagerOption, UserAvartarBorder, UserAvartar, SettingsIcon, NotificationIcon } from './components/Layout/LayoutElements';
import SmoothScroll from './components/SmoothScroll';

export default class App extends Component {
  
  // Set display name
  static displayName = App.name;

  

  // Renders the view content
  render() {
    return (
        <Router>
          <Layout>
            <Sidebar/>
            <ContentLayout>
              <HeaderView>
                <HeaderRow>
                  <HeaderImgLogoCol onClick={() => window.location.href = 'orders'}>
                    <img src={ XStoreLogo } alt="Logo" style={{ width: '128px', height: 'auto' }} />
                  </HeaderImgLogoCol>

                  <HeaderOptionsCol>
                    <NotificationsOption>
                      <Badge>
                        <NotificationIcon/>
                      </Badge>
                    </NotificationsOption>
                    <SettingsOption>
                      <SettingsIcon/>
                    </SettingsOption>
                    <AccountManagerOption>
                      <UserAvartarBorder>
                        <UserAvartar/>
                      </UserAvartarBorder>
                    </AccountManagerOption>
                  </HeaderOptionsCol>
                </HeaderRow>
              </HeaderView>
                <ContentView>
                  <Switch>
                    <Route path="/" exact render={ () => <Orders /> }>
                      <Redirect to="/orders" />
                    </Route>
                    <Route path="/orders" exact render={ () => <Orders /> } />
                    <Route path="/products" exact render={ () => <Products /> } />
                    <Route path="/reports" exact render={ () => <Reports /> } />
                  </Switch>
                </ContentView>
              <FooterView>xPOS &copy;2021 by Xown Solutions</FooterView>
            </ContentLayout>            
          </Layout>
        </Router>
    );
  }
}
