import { createContext } from "react";

export const AlgunContexto = createContext();

export const HooksUseContext = ({ children }) => {
  const constextValue = "daiydvaihdbaiybviy";

  return (
    <AlgunContexto.Provider value={{ constextValue }}>
      {children}
    </AlgunContexto.Provider>
  );
};
