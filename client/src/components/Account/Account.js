import React from "react";
import { Grid } from "semantic-ui-react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { styles } from "../styles/Global";

const Account = () => {
  return (
    <div style={styles.layout}>
      <Grid>
        <Grid.Column width={4}>
          <SideBar />
        </Grid.Column>
        <Grid.Column width={12}>
          <Header />
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Account;