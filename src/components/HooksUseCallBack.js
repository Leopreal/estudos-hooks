import List from "./List";
import React from "react";

import { useCallback, useState } from "react";

const HooksUseCallBack = () => {
  const [contador, setContador] = useState(0);

  const getItensFromDataBase = useCallback(() => {
    return ["a", "b", "c"];
  }, []);
  return (
    <div>
      <h2>useCallBack</h2>
      <List getItens={getItensFromDataBase} />
      <button onClick={() => setContador(contador + 1)}>Mudar</button>
      <p>{contador}</p>
    </div>
  );
};

export default HooksUseCallBack;
