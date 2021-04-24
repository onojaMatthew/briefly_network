import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import BarChart from "../Chart/BarChart";
import "./Dashboard.css";

const Dashboard = () => {
  const chartHeight = "170px"
  return (
    <div className="dashboard">
      <h3>Analytics</h3>
      <Row>
        <Col xs="12" xl="9">
          <Card className="chart-card">
            <CardBody>
              <BarChart chartHeight={chartHeight} color="#E87C23"  />
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" xl="2">
          <Row className="mb-3">
            <Col xs="12" xl="12">
              <Card className="rate-request">
                <CardBody>
                  <p className="rate-text text-center">Rate</p>
                  <h3 className="text-center percentage">33%</h3>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12" xl="12">
              <Card className="rate-request">
                <CardBody>
                  <p className="rate-text text-center ">Requests</p>
                  <h3 className="text-center percentage">33%</h3>
                </CardBody>
              </Card>
            </Col>
          </Row>
          
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col xs="12" xl="3">
          <Card className="client-number">
            <CardBody>
              <p className="client-text text-center ">Clients</p>
              <h3 className="text-center percentage">101</h3>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" xl="3">
          <Card className="client-number">
            <CardBody>
              <p className="client-text text-center ">Today</p>
              <h3 className="text-center percentage">69</h3>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" xl="3">
          <Card className="client-number">
            <CardBody>
              <p className="client-text text-center ">This week</p>
              <h3 className="text-center percentage">33</h3>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" xl="2">
          <Card className="add-card">
            <CardBody>
              <span className="plus-icon">+</span>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;