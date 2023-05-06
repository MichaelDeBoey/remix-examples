import { createContext, useContext } from "react";

const StylesContext = createContext<null | ReactNode>(null);
export const StylesProvider = StylesContext.Provider;
export const useStyles = () => useContext(StylesContext);
