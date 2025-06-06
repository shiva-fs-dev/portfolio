'use client';
import { useSideBarContext } from '@/components/Header';
import { ReactNode } from 'react';
export default function SidebarWrapper({ children }: { children: ReactNode }) {
  const sideBarContext = useSideBarContext();
  return (
    <aside
      className={`fixed md:static h-full md:h-auto w-full md:w-64 p-4 shadow-md transition-transform duration-300 ease-in-out bg-white dark:bg-zinc-950 dark:text-white border-r border-zinc-200 dark:border-zinc-700 z-50
    ${sideBarContext.sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
    md:translate-x-0
  `}
    >
      {children}
    </aside>
  );
}

export function useToggleSideBar() {
  const sideBarContext = useSideBarContext();
  return sideBarContext.setSidebarOpen(!sideBarContext.sidebarOpen);
}
