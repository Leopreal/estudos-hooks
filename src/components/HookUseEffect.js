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

  // array dep. vazio

  useEffect(() => {
    console.log("ola denovo");
  }, []);

  // com array dep.

  const [outroNumero, setOutroNumero] = useState(0);

  useEffect(() => {
    if (outroNumero > 0) {
      console.log("executando quando o outro numero é mudado");
    }
  }, [outroNumero]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>{numero}</p>
      <button onClick={mudarNumero}>Mudar</button>
      <p>outro numero: {outroNumero}</p>
      <button onClick={() => setOutroNumero(outroNumero + 1)}>
        mudar outro numero
      </button>
    </div>
  );
};

export default HookUseEffect;
