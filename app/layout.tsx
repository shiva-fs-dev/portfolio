import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import ThemeToggle from '@/components/ThemeToggle';
import Animate from '@/components/animate';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Portfolio Website | Shivasubramanian',
  description:
    'Shivasubramanian professional portfolio showcasing experience and skills, Full stack developer, Kovilpatti, Tamilnadu, India',
  keywords:
    'Shiva,subramanian,coldfusion,2,experienced,react,fullstack,js,java,TCE,MCA',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    siteName: 'Shivasubramanian Portfolio',
    locale: 'en_US',
    url: 'https://shiva-fs-dev.vercel.app/',
    title: 'Portfolio Website | Shivasubramanian',
    images: '/images/pscreenshot.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Website | Shivasubramanian',
    description:
      'Shivasubramanian professional portfolio showcasing experience and skills, Full stack developer, Kovilpatti, Tamilnadu, India',
    images: ['/images/pscreenshot.jpg'],
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨🏻‍💻</text></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Tf01kPng-Q3P6_J79oRz3u2gruTGlbZAAN6KIBLdAIs"
        />
      </head>
      <ThemeToggle>
        <Header>
          <div className="flex flex-row font-sans transition-colors duration-300 bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-white">
            <Sidebar />
            <main className="flex-1 h-[92dvh] md:h-[100dvh] md:p-6 overflow-y-auto transition-colors duration-300">
              {children}
            </main>
          </div>
        </Header>
      </ThemeToggle>
    </html>
  );
}
