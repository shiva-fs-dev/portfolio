// 'use client';
import ThemeToggleButton from '@/components/ThemeToggleButton';
import SidebarWrapper from './SidebarWrapper';
import SidebarNavItems from '@/components/SidebarNavItems';
export default function Sidebar() {
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
  return (
    <SidebarWrapper>
      <h2 className="text-2xl font-extrabold mb-2 hidden md:block">
        Portfolio
      </h2>
      <div className="text-sm text-zinc-600 dark:text-zinc-400">
        <p className="font-semibold truncate">👨‍💻 B. Shivasubramanian</p>
        {/* <p className="truncate">📞 +91 73051 66435</p> */}
        <p className="truncate">
          ✉️ <a href="mailto:bshivas2022@gmail.com">bshivas2022@gmail.com</a>
        </p>
      </div>
      <div className="py-4">
        {/* <nav className="space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              // onClick={()=>useToggleSideBar()}
              className="block px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {item.name}
            </Link>
          ))}
        </nav> */}
        <SidebarNavItems navData={navigation} />
        <ThemeToggleButton />
      </div>
    </SidebarWrapper>
  );
}
