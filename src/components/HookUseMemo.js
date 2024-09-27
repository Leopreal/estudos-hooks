import { useState, useEffect, useMemo } from "react";

const HookUseMemo = () => {
  const [numero, setNumero] = useState(0);

  const premiumNumbers = ["0", "100", "200"];

  useEffect(() => {
    console.log("premium number foi alterado");
  }, []);

  return (
    <div>
      <h2>useMemo</h2>
      <input type="text" onChange={(e) => setNumero(e.target.value)} />
      {premiumNumbers.includes(numero) ? <p>acertou</p> : ""}
    </div>
  );
};

export default HookUseMemo;
