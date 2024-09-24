import { useState } from "react";
import React from "react";

const HookUseState = () => {
  // 1- useState

  let userName = "Gabriel";

  const [nome, setNome] = useState();

  const mudarNomes = () => {
    userName = "Leo";

    setNome("LUCAS");
  };

  // useState e inputs

  const [idade, setIdade] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(idade);
  };

  return (
    <div>
      <h3>Variavel:{userName} </h3>
      <h3>useState: {nome}</h3>
      <button onClick={mudarNomes}>Mudar</button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>

      <p>voce tem {idade} anos</p>
    </div>
  );
};

export default HookUseState;
