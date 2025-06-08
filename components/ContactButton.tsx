'use client';
import Link from 'next/link';
import { useSideBarContext } from '@/components/Header';
export default function ContactButton() {
  const sideBarContext = useSideBarContext();
  return (
    <>
      <Link
        href={'/contact'}
        onClick={() => {
          sideBarContext.setActiveTab('Contact');
        }}
        className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-2 border-b-4 border-blue-800 hover:border-blue-700 rounded shadow transition"
      >
        {`let’s connect 🚀`}
      </Link>
    </>
  );
}
