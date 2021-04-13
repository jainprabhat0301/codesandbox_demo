import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Login } from "./Component/Login/index";
import { Admin } from "./Component/Admin/index";
import { User } from "./Component/User/index";

export default function App() {
  const [isAdmin, setIsAdmin] = useState("");

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Login isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
            </Route>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/dashboard">
              {isAdmin === true ? <Admin /> : <User />}
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
