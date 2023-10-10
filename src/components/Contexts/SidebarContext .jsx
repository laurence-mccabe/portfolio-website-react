import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [expandSidebar, setExpandSidebar] = useState(false);

  if (expandSidebar) {
    document.documentElement.classList.add('expanded-sidebar');
  } else {
    document.documentElement.classList.remove('expanded-sidebar');
  }

  return (
    <SidebarContext.Provider value={{ expandSidebar, setExpandSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
