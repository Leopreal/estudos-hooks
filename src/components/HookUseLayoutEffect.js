import { useLayoutEffect, useEffect, useState } from "react";
import React from "react";

const HookUseLayoutEffect = () => {
  const [nome, setNome] = useState("algum nome");

  useEffect(() => {
    console.log("2");
    setNome("Mudou o nome");
  }, []);

  useLayoutEffect(() => {
    console.log("1");
    setNome("outro nome");
  }, []);

  console.log(nome);
  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Nome: {nome}</p>
    </div>
  );
};

export default HookUseLayoutEffect;
