import { createContext, useState } from "react";

export const LayoutContext = createContext<any>("");

export const LayoutProvider = ({ children }: any) => {
  const [childData, setChildData] = useState<any>("");

  return (
    <LayoutContext.Provider value={{ childData, setChildData }}>
      {children}
    </LayoutContext.Provider>
  );
};
