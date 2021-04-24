import React from "react";
import { Switch, Route } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { Icon } from "semantic-ui-react";
import Admin from "./Admin/Admin";
import Profile from "./Profile/Profile";
import "./Settings.css";
import User from "./User/User";

const Settings = (props) => {
  const { match } = props;
  return (
    <div className="settings-container">
      <Row>
        <Col xs="12" xl="2" className="settings-column">
          <Row>
            <Col xs="12" xl="12"  style={{ borderRight: "1px solid #C7C7C7", padding: 40}}>
              <p className="text-center s-text">Settings</p>
            </Col>
          </Row>
          <Row className="user-type-tabs">
            <Col xs="12" xl="12">
              <p className="s-tabs" onClick={() => window.location.href=`${match.url}`}><Icon name="user" size={20} />User Profile</p>
              <p className="s-tabs" onClick={() => window.location.href=`${match.url}/user`}><Icon name="users" size={20} />General User</p>
              <p className="s-tabs" onClick={() => window.location.href=`${match.url}/admin`}><Icon name="users" size={20} />Admin</p>
            </Col>
          </Row>
        </Col>
        <Col xs="12" xl="10">
          <Switch>
            <Route exact path={`${match.url}`} render={(props) => <Profile {...props} /> } />
            <Route exact path={`${match.url}/user`} render={(props) => <User {...props} /> } />
            <Route exact path={`${match.url}/admin`} render={(props) => <Admin {...props} /> } />
          </Switch>
        </Col>
      </Row>
    </div>
  );
}

export default Settings;