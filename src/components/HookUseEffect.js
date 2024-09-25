import { useEffect, useState } from "react";
import React from "react";

const HookUseEffect = () => {
  // useEffect sem depencias

  useEffect(() => {
    console.log("ola");
  });

  const [numero, setNumero] = useState(1);

  const mudarNumero = () => {
    setNumero(numero + 1);
  };

  return (
    <div>
      <h2>useEffect</h2>
      <p>{numero}</p>
      <button onClick={mudarNumero}>Mudar</button>
    </div>
  );
};

export default HookUseEffect;
