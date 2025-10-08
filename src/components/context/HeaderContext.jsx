import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
    const [isWhite, setIsWhite] = useState(false);
    return (
        <HeaderContext.Provider value={{ isWhite, setIsWhite }}>
            {children}
        </HeaderContext.Provider>
    );
};

export const useHeaderContext = () => useContext(HeaderContext);