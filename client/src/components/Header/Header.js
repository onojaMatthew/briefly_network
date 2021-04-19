import React from "react";
import { Grid, Feed } from "semantic-ui-react";
import { styles } from "../styles/Global";
import Logo from "../../assets/briefly_logo.svg"


const Header = () => {
  return (
    <div>
      <Grid style={styles.header}>
        <Grid.Column width={12}></Grid.Column>
        <Grid.Column width={4}>
          <Feed>
            <Feed.Event>
              <Feed.Content>Onoja Matthew </Feed.Content>
              <Feed.Label image={Logo} />
            </Feed.Event>
          </Feed>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Header;