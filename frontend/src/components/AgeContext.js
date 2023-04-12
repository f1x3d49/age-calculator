import { createContext, useState } from "react";

export const AgeContext = createContext(null);

export const AgeProvider = ({ children }) => {
  const [age, setAge] = useState("");

  return (
    <AgeContext.Provider value={[age, setAge]}>{children}</AgeContext.Provider>
  );
};
