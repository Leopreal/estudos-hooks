import { useEffect, useState, useRef } from "react";
import React from "react";

const HooksUseRef = () => {
  const numeroRef = useRef(0);
  const [contador, setContador] = useState(0);
  const [contadorB, setContadorB] = useState(0);

  useEffect(() => {
    numeroRef.current = numeroRef.current + 1;
  });

  // use ref DOM

  const inputRef = useRef();
  const [texto, setTexto] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    setTexto("");

    inputRef.current.focus();
  };

  return (
    <div>
      <h2>UseRef</h2>
      <p>o componente renderizou {numeroRef.current} vezes</p>
      <p>contador 1: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>A</button>
      <p>contador 2: {contadorB}</p>
      <button onClick={() => setContadorB(contadorB + 1)}>B</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default HooksUseRef;
