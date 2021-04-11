import React from "react";
import { Grid } from "semantic-ui-react";
import { styles } from "../styles/Global";

const Header = () => {
  return (
    <div >
      <Grid style={styles.header}>
        <Grid.Column width={12}></Grid.Column>
        <Grid.Column width={4}>
          <p>Onoja Matthew </p>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Header;