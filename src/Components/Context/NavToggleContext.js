import { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export const ToggleContextPrvider = ({ children }) => {
    const [isSidebar, setIsSidebar] = useState(false);
    const ToggleNavAndSide = () => {
        setIsSidebar(!isSidebar)
    }

    return (
        <ToggleContext.Provider value={{ isSidebar, setIsSidebar, ToggleNavAndSide }} >
            {children}
        </ToggleContext.Provider>
    )
}
export const useNavToggle = ()=> useContext(ToggleContext); 