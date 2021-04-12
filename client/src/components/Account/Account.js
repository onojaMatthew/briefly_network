import React from "react";
import { Grid } from "semantic-ui-react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { styles } from "../styles/Global";

const Account = () => {
  return (
    <div style={styles.layout}>
      <Grid>
        <Grid.Column width={3}>
          <SideBar />
        </Grid.Column>
        <Grid.Column width={13}>
          <div>
            <Header />
          </div>
          
          <div>
            <Grid>
              <Grid.Column width="3" style={styles.innerSidebar}>
                <div style={styles.innerSidebarHeader}>
                  <p>Add new user</p>
                </div>
              </Grid.Column>
              <Grid.Column width="12">jkjdksjsk</Grid.Column>
            </Grid>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Account;