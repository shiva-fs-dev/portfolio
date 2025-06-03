'use client';
import { useSideBarContext } from '@/components/Header';
import { ReactNode } from 'react';
export default function SidebarWrapper({ children }: { children: ReactNode }) {
  const sideBarContext = useSideBarContext();
  return (
    <aside
      className={`${
        sideBarContext.sidebarOpen ? 'block' : 'hidden'
      } w-full md:w-64 p-4 flex flex-col shadow-md transition-all duration-300 bg-white border-zinc-200 dark:bg-zinc-950 dark:border-zinc-700 dark:text-white md:block`}
    >
      {children}
    </aside>
  );
}

export function toggleSideBar() {
  const sideBarContext = useSideBarContext();
  return sideBarContext.setSidebarOpen(!sideBarContext.sidebarOpen);
}
