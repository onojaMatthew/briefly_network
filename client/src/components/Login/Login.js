import React, { useState } from "react";
import { Grid, Icon, Input } from "semantic-ui-react";
import { SubmitButton } from "../Buttons/Button";
import Logo from "../../assets/briefly_logo.svg";

import { styles } from "../styles/Global";
import "./Login.css";

const Login = () => {
  const [ open, setOpen ] = useState(false);
  const [ values, setValues ] = useState({ userId: "", password: "" });

  const handleSubmit = () => {}

  const toggleVisible = () => {
    console.log("it is working")
    setOpen(!open);
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  }

  const { userId, password } = values;

  return (
    <div className="login-container">
      <Grid centered columns={4}>
        <Grid.Column>
          <div style={styles.loginCard}>
            <img src={Logo} alt="Logo" style={styles.logo} />
            <p style={styles.loginText}>Login to our database</p>
            <Grid.Row>
              <Grid.Column>
                <p style={styles.label}>User ID</p>
                <Input
                  name="userId" 
                  value={userId} 
                  style={styles.loginInput} 
                  placeholder="Enter user ID"
                  onChange={(e) => handleChange(e)}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <p style={styles.label}>Email</p>
                <Input 
                  name="password"
                  value={password}
                  type={open ? "text" : "password"}
                  onChange={(e) => handleChange(e)}
                  icon={<Icon onClick={toggleVisible} name={open ? "hide" : "unhide"} />}
                  placeholder="Enter password" 
                  style={{ marginBottom: 50, ...styles.loginInput }} 
                />
              </Grid.Column>
            </Grid.Row>
            <SubmitButton name="Login In" handleSubmit={handleSubmit} />
            <p style={styles.passwordResetText}>Having issues logging in? <span style={styles.spanText}>Request a password reset</span></p>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Login;