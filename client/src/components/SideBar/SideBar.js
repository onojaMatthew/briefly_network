import React from "react";
import { Grid, Icon } from "semantic-ui-react";
import { styles } from "../styles/Global";
import Logo from "../../assets/briefly_logo.svg";

import "./SideBar.css";

const SideBar = () => {
  return (
    <div>
      <Grid.Row>
        <Grid.Column width="4">
          <div className="main-sidebar">
            <div className="logo-container">
              <img src={Logo} alt="logo" />
            </div>
            <div className="menu">
              <p><Icon name="pie chart" style={styles.sidebarIcon} /> <span className="iconText">Dashboard</span></p>
            </div>
            <div className="menu">
              <p><Icon name="users" style={styles.sidebarIcon} /> <span className="iconText">Report</span></p>
            </div>
            <div className="menu">
              <p><Icon name="users" style={styles.sidebarIcon} /> <span className="iconText">Client</span></p>
            </div>
            <div className="menu">
              <p><Icon name="user plus" style={styles.sidebarIcon} /> <span className="iconText">User Request</span></p>
            </div>
            <div className="menu">
              <p><Icon name="users" style={styles.sidebarIcon} /> <span className="iconText">Client</span></p>
            </div>
            <div className="menu">
              <p><Icon name="cog" style={styles.sidebarIcon} /> <span className="iconText">Client</span></p>
            </div>
            <div className="menu">
              <p><Icon name="logout" style={styles.sidebarIcon} /> <span className="iconText">Logout</span></p>
            </div>
          </div>
        </Grid.Column>
      </Grid.Row>
    </div>
  )
}

export default SideBar;