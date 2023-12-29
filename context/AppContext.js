import React, { createContext, useContext, useMemo, useState } from "react";
import { names as data } from "../data/labels";

const AppContext = createContext([]);

const AppContextProvider = ({ children }) => {
  const [names, setNames] = useState(data);

  const updateNames = (id, value) => {
    const values = [...names];
    const index = values.findIndex((obj) => obj.id === Number(id));
    if (index < 0) return;
    values[id].name = value;
    setNames(values);
  };

  const contextValue = useMemo(() => {
    return { names, updateNames };
  }, [names]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return context;
};

export { AppContext, AppContextProvider, useAppContext };
