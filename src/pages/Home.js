// context
import { useContext } from "react";
import { AlgunContexto } from "../components/HooksUseContext";

import React from "react";
import HookUseState from "../components/HookUseState";
import HookUseReducer from "../components/HookUseReducer";
import HookUseEffect from "../components/HookUseEffect";
import HooksUseRef from "../components/HooksUseRef";

const Home = () => {
  const { constextValue } = useContext(AlgunContexto);

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>UseContext</h2>
      <p>valor do context: {constextValue}</p>
      <HooksUseRef />
    </div>
  );
};

export default Home;
