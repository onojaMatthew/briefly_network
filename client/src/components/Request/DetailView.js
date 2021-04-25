import React, { useState } from "react";
import { Collapse, Avatar, Button } from "antd";
import { Icon } from "semantic-ui-react";
import { Card, CardBody, Col, Input, Row } from "reactstrap";
import { CheckOutlined, DeleteOutlined} from "@ant-design/icons";

import "./Request.css";

const { Panel } = Collapse;
const DetailView = (props) => {
  const [ formValues, setFormValues ] = useState({ 
    firstName: "", 
    lastName: "",
    companyName: "",
    email: "",
    altEmail: "",
    phone: "",
    dateOfBirth: "",
  });

  const { match } = props;

  const { firstName, lastName, companyName, gender, altEmail, email, phone, dateOfBirth } = formValues;
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValues({...formValues, [name]: value });
  }

  console.log(gender)
  return (
    <div className="settings-container">
      <Row>
        <Col xs="12" xl="3" className="sidebar-column">
          <Card className="profile-card">
            <CardBody>
              <p className="text-center mt-4"> <Avatar size={100} /></p>
              <p className="text-center mt-4 p-name"> Onoja Matthew</p>
              <p className="text-center mt-4 p-ID">TMC/4563/JN</p>
              <p className="text-center mt-4 p-role">Admin</p>
              <Row className="mt-5">
                <Col xs="2" xl="2" className="pr-0 pt-2">
                  <span className="icon-container icon1">
                    <DeleteOutlined className="delete-icon" />
                  </span>
                </Col>
                <Col xs="8" xl="8">
                  <Button className="active-button">Pending</Button>
                </Col>
                <Col xs="2" xl="2" className="pl-0 pt-2">
                  <span className="icon-container icon2">
                    <CheckOutlined className="delete-icon" />
                  </span>
                </Col>
              </Row>
            </CardBody>
          </Card>

          <Row className="mt-4">
            <Col xs="3" xl="3">
              <Button className="edit">Edit</Button>
            </Col>
            <Col xs="4" xl="4">
              <Button className="suspend">Suspend</Button>
            </Col>
            <Col xs="3" xl="3">
              <Button className="delete">Delete</Button>
            </Col>
          </Row>
          <Row className="mt-4 mb-4">
            <Col xs="12" xl="12">
              <Button className="reset-password">Reset password</Button>
            </Col>
          </Row>
        </Col>
        <Col xs="12" xl="9">
         
        
        </Col>
      </Row>
    </div>
  )
}

export default DetailView;