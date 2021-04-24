import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Icon } from "semantic-ui-react";
import "./Settings.css";

const Settings = () => {
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
              <p className="s-tabs"><Icon name="user" size={20} />User Profile</p>
              <p className="--tabs"><Icon name="users" size={20} />General User</p>
              <p className="s-tabs"><Icon name="users" size={20} />Admin</p>
            </Col>
          </Row>
        </Col>
        <Col xs="12" xl="3">
          
        </Col>
        <Col xs="12" xl="5">
          
        </Col>
      </Row>
    </div>
  );
}

export default Settings;