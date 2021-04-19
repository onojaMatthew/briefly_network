import { Layout } from "antd";
import React from "react";
import { Grid } from "semantic-ui-react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
// import { styles } from "../styles/Global";
import "./Account.css";

const { Content } = Layout
const Account = () => {
  return (
    <Layout>
      
        <SideBar />
        
      <Layout className="site-layout">
        <Header />
        
        <Content
          className="site-layout-background"
          style={{
            margin: '0px',
            padding: 24,
            minHeight: 280,
            background: "#FFFFFF"
          }}
        >
          <Grid>
            <Grid.Row>
              <Grid.Column width="3" className="sub-sidebar">Hello the sidebar</Grid.Column>
              <Grid.Column width="13">Hello large content</Grid.Column>
            </Grid.Row>
          </Grid>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Account;