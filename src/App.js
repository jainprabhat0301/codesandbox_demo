import React, { useState } from "react";
import { Default_state } from "./App_data";
import { Routing } from "./Component/Router/index";
function App() {
  const [isAdmin, setIsAdmin] = useState("");
  const [toggle, setToggle] = useState(false);
  const [state, setState] = React.useState(Default_state);
  const prop = { toggle, setToggle, isAdmin, setIsAdmin, state, setState };
  return (
    <div>
      <Routing {...prop} />
    </div>
  );
}

export { App };
