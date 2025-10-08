import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState(null);
    return (
        <HeaderContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </HeaderContext.Provider>
    );
};

export const useHeaderContext = () => useContext(HeaderContext);
