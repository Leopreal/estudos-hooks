import { useState, useEffect } from "react";

const List = ({ getItens }) => {
  const [myItens, setMyItens] = useState([]);

  useEffect(() => {
    console.log("buscando itens");

    setMyItens(getItens);
  }, [getItens]);
  return (
    <div>{myItens && myItens.map((item) => <p key={item}>{item}</p>)}</div>
  );
};

export default List;
