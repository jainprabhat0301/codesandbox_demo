import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login } from "../Login/index";
import { Admin } from "../Admin/index";
import { User } from "../User/index";

const Routing = (props) => {
  const { isAdmin, setIsAdmin } = props;
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
          </Route>
          <Route path="/user">
            <User {...props} />
          </Route>
          <Route path="/admin">
            <Admin {...props} />
          </Route>
          <Route path="/dashboard">
            {isAdmin === true ? <Admin {...props} /> : <User {...props} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export { Routing };
