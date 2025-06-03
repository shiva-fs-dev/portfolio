'use client';

import { useState, createContext, useContext, ReactNode } from 'react';
import { X, Menu } from 'lucide-react';

interface sideBarContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}
const sideBarContext = createContext<sideBarContextType>({
  sidebarOpen: false,
  setSidebarOpen: () => {},
});

export default function Header({children}: {children: ReactNode}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 border-b bg-white border-zinc-200 dark:bg-zinc-950 dark:border-zinc-700 dark:text-white">
        <h2 className="text-xl font-bold">Portfolio</h2>
        <button>
          {sidebarOpen ? (
            <X onClick={toggleSidebar} size={24} />
          ) : (
            <Menu onClick={toggleSidebar} size={24} />
          )}
        </button>
      </div>
      <sideBarContext.Provider value={{sidebarOpen, setSidebarOpen}}>
      {children}
      </sideBarContext.Provider>
    </>
  );
}

export const useSideBarContext = () => useContext(sideBarContext);
