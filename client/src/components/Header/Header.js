import React from "react";
import { Grid, Feed } from "semantic-ui-react";
import Logo from "../../assets/briefly_logo.svg";
import "./Header.css";


const Header = () => {
  return (
    <div className="header">
      <Grid>
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