import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Login } from "./Component/Login/index";
import { Admin } from "./Component/Admin/index";
import { User } from "./Component/User/index";

export default function App() {
  const [isAdmin, setIsAdmin] = useState("");
  const [toggle, setToggle] = useState(false);
  const [state, setState] = React.useState({
    checkedR: true,
    checkedO: true,
    checkedB: true,
    checkedG: true
  });
  const prop = { toggle, setToggle, isAdmin, setIsAdmin, state, setState };
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Login isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
            </Route>
            <Route path="/user">
              <User {...prop} />
            </Route>
            <Route path="/admin">
              <Admin {...prop} />
            </Route>
            <Route path="/dashboard">
              {isAdmin === true ? <Admin {...prop} /> : <User {...prop} />}
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
