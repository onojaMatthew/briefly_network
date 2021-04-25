import React from "react";
import { Switch, Route } from "react-router-dom";
import DetailView from "./DetailView";
import Request from "./Request";

const RequestContainer = (props) => {
  const { match } = props;
  return (
    <div>
      <Switch>
        <Route exact path={`${match.url}`} render={(props) => <Request {...props} />} />
        <Route exact path={`${match.url}/:id`} render={(props) => <DetailView {...props} />} />
      </Switch>
    </div>
  )
}

export default RequestContainer;