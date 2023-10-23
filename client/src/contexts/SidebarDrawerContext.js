import { useDisclosure } from "@chakra-ui/react";
import { createContext } from "react";

const SidebarDrawerContextData = () => useDisclosureReturn();


const SidebarDrawerContext = createContext({ SidebarDrawerContextData });

export function SidebarDrawerProvider({ children }) {

    const disclouse = useDisclosure();

    return (
        <SidebarDrawerContext.Provider value={disclouse}>
            {children}
        </SidebarDrawerContext.Provider>
    );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);