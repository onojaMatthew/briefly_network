import { Avatar, Button } from "antd";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Icon } from "semantic-ui-react";
import { DeleteOutlined} from "@ant-design/icons";
import "./Profile.css";

const Profile = () => {
  return (
    <div id="setting-p" className="settings-profile-container">
      <Row  className="user-sidebar">
        <Col xs="12" xl="3">
          <Card className="profile-card">
            <CardBody>
              <p className="text-center mt-4"> <Avatar size={100} /></p>
              <p className="text-center mt-4 p-name"> Onoja Matthew</p>
              <p className="text-center mt-4 p-ID">TMC/4563/JN</p>
              <p className="text-center mt-4 p-role">Admin</p>
              <Row className="mt-5">
                <Col xs="2" xl="2" className="pr-0 pt-2">
                  <span className="icon-container">
                    <DeleteOutlined className="delete-icon" />
                  </span>
                </Col>
                <Col xs="8" xl="8">
                  <Button className="active-button">Active</Button>
                </Col>
                <Col xs="2" xl="2" className="pl-0 pt-2">
                  <span className="icon-container">
                    <DeleteOutlined className="delete-icon" />
                  </span>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" xl="9"></Col>
      </Row>
    </div>
  );
}

export default Profile;