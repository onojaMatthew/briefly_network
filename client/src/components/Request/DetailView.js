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
        <Col xs="12" xl="6">
          <Row className="mt-5">
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
                    <Col xs="12" xl="12">
                      <div className="add-permission">
                        <ul>
                          <li>
                            <Input type="checkbox" id="checkbox" />
                          </li>
                          <li>
                            <p className="describe">Add user</p>
                          </li>
                        </ul>
                      </div>

                      <div className="view-permission">
                        <ul>
                          <li>
                            <Input type="checkbox" id="checkbox" />
                          </li>
                          <li>
                            <p className="describe">View user</p>
                          </li>
                        </ul>
                      </div>

                      <div className="edit-permission">
                        <ul>
                          <li>
                            <Input type="checkbox" id="checkbox" />
                          </li>
                          <li>
                            <p className="describe">Edit user</p>
                          </li>
                        </ul>
                      </div>

                      <div className="delete-permission">
                        <ul>
                          <li>
                            <Input type="checkbox" id="checkbox" />
                          </li>
                          <li>
                            <p className="describe">Delete user</p>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </Panel>
              </Collapse>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col xs="12" xl="6"></Col>
            <Col xs="12" xl="6">
              <Row>
                <Col xs="12" xl="6">
                  <Button className="discard">Discard</Button>
                </Col>
                <Col xs="12" xl="6">
                  <Button className="save">Save Changes</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        
        </Col>
        <Col xs="12" xl="2">
          <Row className="mt-5">
            <Col xs="12" xl="12">
              <Card className="camera-card">
                <CardBody>
                  <p className="icon-class">
                  <Avatar size={90} icon={<Icon name="camera" size="small" />} /></p>
                  <Button className="capture">Capture Image</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="12" xl="12">
              <Card className="finger-card">
                <CardBody>
                <p className="icon-class">
                  <Avatar size={90} icon={<Icon name="" size="small" />} /></p>
                  <Button className="capture">Capture Image</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default DetailView;