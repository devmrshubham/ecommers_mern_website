import React from "react";
import Routers from "./Router/Routers";
import ContextHolder from "./Context/ContextHolder";

const App = () => {
  return (
    <ContextHolder>
      <Routers />
    </ContextHolder>
  );
};

export default App;
