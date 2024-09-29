import { usePrevious } from "./UsePrevious";
import { useState } from "react";

const HooksCustom = () => {
  const [numero, setNumero] = useState(0);

  const previous = usePrevious(numero);

  return (
    <div>
      <h2>Custom Hook</h2>
      <p>Atual: {numero}</p>
      <p>Anterior: {previous}</p>
      <button onClick={() => setNumero(Math.random())}>Alterar</button>
    </div>
  );
};

export default HooksCustom;
