import { Layout } from "antd";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Client from "../Client/Client";
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";
import Report from "../Report/Report";
import Request from "../Request/Request";
import Settings from "../Settings/Settings";
import SideBar from "../SideBar/SideBar";
// import { styles } from "../styles/Global";
import "./Account.css";

const { Content } = Layout
const Account = (props) => {
  const { match } = props;
  return (
    <Layout>
      
        <SideBar />
        
      <Layout className="site-layout">
        <Header />
        
        <Content
          className="site-layout-background"
          style={{
            margin: '0px',
            minHeight: 280,
            background: "#FFFFFF",
          }}
        >
          <Grid>
            <Grid.Row>
              <Grid.Column width="16">
                <Switch>
                  <Route exact path={`${match.url}`} render={(props) => <Dashboard {...props} /> } />
                  <Route exact path={`${match.url}/report`} render={(props) => <Report {...props} /> } />
                  <Route exact path={`${match.url}/clients`} render={(props) => <Client {...props} /> } />
                  <Route exact path={`${match.url}/requests`} render={(props) => <Request {...props} /> } />
                  <Route exact path={`${match.url}/settings`} render={(props) => <Settings {...props} /> } />
                </Switch>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Account;