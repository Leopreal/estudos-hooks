import { useReducer, useState } from "react";
import React from "react";

const HookUseReducer = () => {
  const [numero, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // fazendo mais reducer
  const TarefasIniciais = [
    { id: 1, text: "fazer algo" },
    { id: 2, text: "fazer outra coisa" },
  ];

  const tarefaReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const novaTarefa = {
          id: Math.random(),
          text: textoTarefa,
        };

        setTextoTarefa("");

        return [...state, novaTarefa];
    }
  };

  const [textoTarefa, setTextoTarefa] = useState("");
  const [tarefas, dispatchTarefas] = useReducer(tarefaReducer, TarefasIniciais);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTarefas({ type: "ADD" });
  };
  return (
    <div>
      <h2>UseReducer</h2>
      <p>Numero: {numero}</p>
      <button onClick={dispatch}>alterar numero</button>
      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTextoTarefa(e.target.value)}
          value={textoTarefa}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id}>{tarefa.text}</li>
      ))}
    </div>
  );
};

export default HookUseReducer;
