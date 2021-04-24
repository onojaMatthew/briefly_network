import React from "react";
import { Grid, Icon } from "semantic-ui-react";
import { Layout, Menu } from 'antd';

import Logo from "../../assets/briefly_logo2.svg";

import "./SideBar.css";

const { Sider } = Layout;

const SideBar = () => {

  return (
    <div className="main-sidebar-container">
      <Grid.Row>
        <Grid.Column width="3">
          <Sider className="main-sidebar">
            <div className="logo-container">
              <img src={Logo} alt="logo" style={{ height: "77px", width: "60px", marginLeft: "20px", marginTop: "20px"}} /> 
            </div>
            <Menu theme="dark" id="sidebar-menu-container" mode="inline" defaultSelectedKeys={['1']}>
              <span className="sidebar-label-title">Analytics</span>
              <Menu.Item key="1" className="sidebar-menu" icon={<Icon name="pie chart" className="icons" />}>
                Dashboard
              </Menu.Item>
              <Menu.Item key="2" id="report" className="sidebar-menu" icon={<Icon name="file alternate outline" className="icons" />}>
                Report
              </Menu.Item>

              <span className="sidebar-label-title">Users</span>
              <Menu.Item key="3" className="sidebar-menu" icon={<Icon name="users" className="icons" />}>
                Clients
              </Menu.Item>
              <Menu.Item key="4" className="sidebar-menu" icon={<Icon name="user plus" className="icons" />}>
                User Request
              </Menu.Item>
              
              <Menu.Item key="5" className="sidebar-menu" icon={<Icon name="cog" className="icons" />}>
                Settings
              </Menu.Item>
              <Menu.Item key="6" className="sidebar-menu" icon={<Icon name="logout" className="icons" />}>
                Logout
              </Menu.Item>
            </Menu>
          </Sider>
          
        </Grid.Column>
      </Grid.Row>
    </div>
  )
}

export default SideBar;