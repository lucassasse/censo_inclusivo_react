import { useDisclosure } from '@chakra-ui/react';
import { createContext, useContext } from 'react';

const SidebarDrawerContext = createContext();

export function SidebarDrawerProvider({ children }) {
  const disclouse = useDisclosure();

  return (
    <SidebarDrawerContext.Provider value={disclouse}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
