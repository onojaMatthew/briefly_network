import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import BarChart from "../Chart/BarChart";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3>Analytics</h3>
      <Row>
        <Col xs="12" xl="8">
          <Card >
            <CardBody>
              <BarChart />
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" xl="2">
          <Row className="mb-3">
            <Col xs="12" xl="12">
              <Card className="rate-request">
                <CardBody>
                  <p className="rate-text">Rate</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12" xl="12">
              <Card className="rate-request">
                <CardBody>
                  <p className="rate-text">Rate</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;