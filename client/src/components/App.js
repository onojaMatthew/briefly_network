import { BrowserRouter, Route, Switch } from "react-router-dom";
import Account from "./Account/Account";

import Login from "./Login/Login";

function App() {
  
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Login {...props} />} />
        <Route exact path="/account" render={(props) => <Account {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
