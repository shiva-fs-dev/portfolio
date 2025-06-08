'use client';

import { useState, createContext, useContext, ReactNode } from 'react';
import { X, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface sideBarContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
  activeTab: string;
  setActiveTab: (value: string) => void;
}
const sideBarContext = createContext<sideBarContextType>({
  sidebarOpen: false,
  setSidebarOpen: () => {},
  activeTab: 'Home',
  setActiveTab: () => {},
});

export default function Header({ children }: { children: ReactNode }) {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    // { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Education', href: '/education' },
    { name: 'Experience', href: '/experience' },
    //{ name: 'Contact', href: '/contact' },
  ];
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(
    () => navigation.find((path) => path.href == pathname)?.name ?? ''
  );
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 border-b bg-white border-zinc-200 dark:bg-zinc-950 dark:border-zinc-700 dark:text-white">
        <h2 className="text-xl font-bold">Portfolio</h2> | {activeTab}
        <button>
          {sidebarOpen ? (
            <X onClick={toggleSidebar} size={24} />
          ) : (
            <Menu onClick={toggleSidebar} size={24} />
          )}
        </button>
      </div>
      <sideBarContext.Provider
        value={{ sidebarOpen, setSidebarOpen, setActiveTab, activeTab }}
      >
        {children}
      </sideBarContext.Provider>
    </>
  );
}

export const useSideBarContext = () => useContext(sideBarContext);
