'use client';
import Link from 'next/link';
import { useSideBarContext } from '@/components/Header';
export default function SidebarNavItems({
  navData,
}: {
  navData: Array<{ name: string; href: string }>;
}) {
  const sideBarContext = useSideBarContext();
  return (
    <>
      <nav className="space-y-2">
        {navData.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() =>
              sideBarContext.setSidebarOpen(!sideBarContext.sidebarOpen)
            }
            className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </>
  );
}
