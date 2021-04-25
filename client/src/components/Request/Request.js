import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import { Icon } from "semantic-ui-react";
import { Button, Avatar } from "antd";
import { DeleteOutlined, CheckOutlined} from "@ant-design/icons";
import "./Request.css";

const Request = (props) => {
  const { match } = props;
  const handleNavigation = (id) => {
    window.location.href=`${match.url}/${id}`
  }
  return (
    <div className="settings-container">
      <Row>
        <Col xs="12" xl="2" className="settings-column">
          <Row>
            <Col xs="12" xl="12"  style={{ borderRight: "1px solid #C7C7C7", padding: 40}}>
              <p className="text-center s-text">General User Request</p>
            </Col>
          </Row>
          <Row className="user-type-tabs">
            <Col xs="12" xl="12">
              <p className="s-tabs" style={{ color: "#E87C23"}} onClick={() => window.location.href=`${match.url}`}><Icon name="users" size={20} />General users</p>
            </Col>
          </Row>
        </Col>
        <Col xs="12" xl="9">
          <Row className="mt-5">
            <Col xs="12" xl="3">
              <Card className="request-card">
                <CardBody>
                  <p className="text-center mt-4"> <Avatar size={100} /></p>
                  <p className="text-center mt-4 p-name"> Onoja Matthew</p>
                  <p className="text-center mt-4 p-ID">TMC/4563/JN</p>
                  <p className="text-center mt-4 p-role">Level 3</p>
                  <Row className="mt-5 mb-4">
                    <Col xs="2" xl="2" className="pr-0 pt-2 ">
                      <span className="icon-container icon1">
                        <DeleteOutlined className="delete-icon" />
                      </span>
                    </Col>
                    <Col xs="8" xl="8">
                      <Button className="active-button" onClick={() => handleNavigation(1)}>Open Profile</Button>
                    </Col>
                    <Col xs="2" xl="2" className="pl-0 pt-2">
                      <span className="icon-container icon2">
                        <CheckOutlined className="delete-icon" />
                      </span>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" xl="3">
              <Card className="request-card">
                <CardBody>
                  <p className="text-center mt-4"> <Avatar size={100} /></p>
                  <p className="text-center mt-4 p-name"> Onoja Matthew</p>
                  <p className="text-center mt-4 p-ID">TMC/4563/JN</p>
                  <p className="text-center mt-4 p-role">Level 3</p>
                  <Row className="mt-5 mb-4">
                    <Col xs="2" xl="2" className="pr-0 pt-2">
                      <span className="icon-container icon1">
                        <DeleteOutlined className="delete-icon" />
                      </span>
                    </Col>
                    <Col xs="8" xl="8">
                      <Button className="active-button" onClick={() => handleNavigation(2)}>Open Profile</Button>
                    </Col>
                    <Col xs="2" xl="2" className="pl-0 pt-2">
                      <span className="icon-container icon2">
                        <CheckOutlined className="delete-icon" />
                      </span>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" xl="3">
              <Card className="request-card">
                <CardBody>
                  <p className="text-center mt-4"> <Avatar size={100} /></p>
                  <p className="text-center mt-4 p-name"> Onoja Matthew</p>
                  <p className="text-center mt-4 p-ID">TMC/4563/JN</p>
                  <p className="text-center mt-4 p-role">Level 3</p>
                  <Row className="mt-5 mb-4">
                    <Col xs="2" xl="2" className="pr-0 pt-2">
                      <span className="icon-container icon1">
                        <DeleteOutlined className="delete-icon" />
                      </span>
                    </Col>
                    <Col xs="8" xl="8">
                      <Button className="active-button" onClick={() => handleNavigation(3)}>Open Profile</Button>
                    </Col>
                    <Col xs="2" xl="2" className="pl-0 pt-2">
                      <span className="icon-container icon2">
                        <CheckOutlined className="delete-icon" />
                      </span>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" xl="3">
              <Card className="request-card">
                <CardBody>
                  <p className="text-center mt-4"> <Avatar size={100} /></p>
                  <p className="text-center mt-4 p-name"> Onoja Matthew</p>
                  <p className="text-center mt-4 p-ID">TMC/4563/JN</p>
                  <p className="text-center mt-4 p-role">Level 3</p>
                  <Row className="mt-5 mb-4">
                    <Col xs="2" xl="2" className="pr-0 pt-2">
                      <span className="icon-container icon1">
                        <DeleteOutlined className="delete-icon" />
                      </span>
                    </Col>
                    <Col xs="8" xl="8">
                      <Button className="active-button" onClick={() => handleNavigation(4)}>Open Profile</Button>
                    </Col>
                    <Col xs="2" xl="2" className="pl-0 pt-2">
                      <span className="icon-container icon2">
                        <CheckOutlined className="delete-icon" />
                      </span>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xs="12" xl="3">
              <Card className="request-card">
                <CardBody>
                  <p className="text-center mt-4"> <Avatar size={100} /></p>
                  <p className="text-center mt-4 p-name"> Onoja Matthew</p>
                  <p className="text-center mt-4 p-ID">TMC/4563/JN</p>
                  <p className="text-center mt-4 p-role">Level 3</p>
                  <Row className="mt-5 mb-4">
                    <Col xs="2" xl="2" className="pr-0 pt-2">
                      <span className="icon-container icon1">
                        <DeleteOutlined className="delete-icon" />
                      </span>
                    </Col>
                    <Col xs="8" xl="8">
                      <Button className="active-button" onClick={() => handleNavigation(5)}>Open Profile</Button>
                    </Col>
                    <Col xs="2" xl="2" className="pl-0 pt-2">
                      <span className="icon-container icon2">
                        <CheckOutlined className="delete-icon" />
                      </span>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" xl="3">
              <Card className="request-card">
                <CardBody>
                  <p className="text-center mt-4"> <Avatar size={100} /></p>
                  <p className="text-center mt-4 p-name"> Onoja Matthew</p>
                  <p className="text-center mt-4 p-ID">TMC/4563/JN</p>
                  <p className="text-center mt-4 p-role">Level 3</p>
                  <Row className="mt-5 mb-4">
                    <Col xs="2" xl="2" className="pr-0 pt-2">
                      <span className="icon-container icon1">
                        <DeleteOutlined className="delete-icon" />
                      </span>
                    </Col>
                    <Col xs="8" xl="8">
                      <Button className="active-button" onClick={() => handleNavigation(6)}>Open Profile</Button>
                    </Col>
                    <Col xs="2" xl="2" className="pl-0 pt-2">
                      <span className="icon-container icon2">
                        <CheckOutlined className="delete-icon" />
                      </span>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" xl="3">
              <Card className="request-card">
                <CardBody>
                  <p className="text-center mt-4"> <Avatar size={100} /></p>
                  <p className="text-center mt-4 p-name"> Onoja Matthew</p>
                  <p className="text-center mt-4 p-ID">TMC/4563/JN</p>
                  <p className="text-center mt-4 p-role">Level 3</p>
                  <Row className="mt-5 mb-4">
                    <Col xs="2" xl="2" className="pr-0 pt-2">
                      <span className="icon-container icon1">
                        <DeleteOutlined className="delete-icon" />
                      </span>
                    </Col>
                    <Col xs="8" xl="8">
                      <Button className="active-button" onClick={() => handleNavigation(7)}>Open Profile</Button>
                    </Col>
                    <Col xs="2" xl="2" className="pl-0 pt-2">
                      <span className="icon-container icon2">
                        <CheckOutlined className="delete-icon" />
                      </span>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" xl="3">
              <Card className="request-card">
                <CardBody>
                  <p className="text-center mt-4"> <Avatar size={100} /></p>
                  <p className="text-center mt-4 p-name"> Onoja Matthew</p>
                  <p className="text-center mt-4 p-ID">TMC/4563/JN</p>
                  <p className="text-center mt-4 p-role">Level 3</p>
                  <Row className="mt-5 mb-4">
                    <Col xs="2" xl="2" className="pr-0 pt-2">
                      <span className="icon-container icon1">
                        <DeleteOutlined className="delete-icon" />
                      </span>
                    </Col>
                    <Col xs="8" xl="8">
                      <Button className="active-button" onClick={() => handleNavigation(8)}>Open Profile</Button>
                    </Col>
                    <Col xs="2" xl="2" className="pl-0 pt-2">
                      <span className="icon-container icon2">
                        <CheckOutlined className="delete-icon" />
                      </span>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Request;