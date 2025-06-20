import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact | Shivasubramanian',
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
export default function ContactPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 hidden md:block">Contact</h1>
      <div className="space-y-2 text-md flex flex-wrap gap-3">
        <p>
          <span>
            <a
              href="mailto:bshivas2022@gmail.com"
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 hover:bg-gray-300 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 hover:dark:bg-zinc-700 transition"
            >
              <FaEnvelope className="w-4 h-4 mr-1 text-blue-700 dark:text-white" />
              bshivas2022@gmail.com
            </a>
          </span>
        </p>
        <p className="!mt-0">
          <span>
            <a
              href="https://www.linkedin.com/in/shiva2022/"
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-200 hover:bg-gray-300 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 hover:dark:bg-zinc-700 transition"
              target="_blank"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-3 h-3 mr-1"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4zM8.5 8.5h3.6v2.1h.05c.5-.95 1.72-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.8V24h-4v-6.8c0-1.6-.03-3.6-2.2-3.6-2.2 0-2.5 1.7-2.5 3.5V24h-4V8.5z" />
              </svg> */}
              <FaLinkedin className="w-4 h-4 mr-1 text-blue-700 dark:text-white" />
              linkedin.com/in/shiva2022
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
