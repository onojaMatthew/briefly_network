import { Collapse, Avatar, Button } from "antd";
import React, { useState } from "react";
import { Card, CardBody, Col, Input, Row, Form, Label, FormGroup } from "reactstrap";
import { CheckOutlined, DeleteOutlined} from "@ant-design/icons";
import "./Profile.css";

const { Panel } = Collapse;

const Profile = () => {
  const [ formValues, setFormValues ] = useState({ 
    firstName: "", 
    lastName: "",
    companyName: "",
    email: "",
    altEmail: "",
    phone: "",
    dateOfBirth: "",
  });

  const { firstName, lastName, companyName, gender, altEmail, email, phone, dateOfBirth } = formValues;
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormValues({...formValues, [name]: value });
  }

  console.log(gender)

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
                  <span className="icon-container icon1">
                    <DeleteOutlined className="delete-icon" />
                  </span>
                </Col>
                <Col xs="8" xl="8">
                  <Button className="active-button">Active</Button>
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
        <Col xs="12" xl="6">
          <Row>
            <Col xs="12" xl="12">
              <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header="Personal Information" key="1" id="panel1">
                  <Row className="mb-4">
                    <Col xs="12" xl="6">
                      <label htmlFor="fname">First Name</label>
                      <Input id="fname" name="firstName" value={firstName} onChange={(e) => handleChange(e)} placeholder="First Name" />
                    </Col>
                    <Col xs="12" xl="6">
                      <label htmlFor="lname">Last Name</label>
                      <Input id="lname" name="lastName" value={lastName} onChange={(e) => handleChange(e)} placeholder="Last Name" />
                    </Col>
                  </Row>

                  <Row className="mb-4">
                    <Col xs="12" xl="6">
                      <label htmlFor="cname">Company Name</label>
                      <Input name="companyName" value={companyName} onChange={(e) => handleChange(e)} placeholder="Company Name" />
                    </Col>
                    <Col xs="12" xl="6">
                    <label htmlFor="lname">Gender</label>
                      <Input type="select" name="gender" onChange={(e) => handleChange(e)}>
                        <option>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Input>
                    </Col>
                  </Row>

                  <Row className="mb-4">
                    <Col xs="12" xl="6">
                      <label htmlFor="email">Email Address</label>
                      <Input id="email" name="email" value={email} onChange={(e) => handleChange(e)} placeholder="First Name" />
                    </Col>
                    <Col xs="12" xl="6">
                      <label htmlFor="altEmail">Alternative Email Address</label>
                      <Input id="altEmail" name="altEmail" value={altEmail} onChange={(e) => handleChange(e)} placeholder="Alternative Email" />
                    </Col>
                  </Row>

                  <Row className="mb-4">
                    <Col xs="12" xl="6">
                      <label htmlFor="phone">Phone</label>
                      <Input id="phone" name="phone" value={phone} onChange={(e) => handleChange(e)} placeholder="Phone" />
                    </Col>
                    <Col xs="12" xl="6">
                      <label htmlFor="dob">Date of Birth</label>
                      <Input type="date" id="dob" name="dateOfBirth" value={dateOfBirth} onChange={(e) => handleChange(e)} />
                    </Col>
                  </Row>
                </Panel>
                <Panel header="Permissions" key="2" id="panel2">
                  <Row className="mb-4">
                    <Col xs="12" xl="6">
                      <Form>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio2" />{' '}
                            Option two can be something else and selecting it will deselect option one
                          </Label>
                        </FormGroup>
                      </Form>
                    </Col>
                  </Row>
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;