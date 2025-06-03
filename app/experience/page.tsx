import Image from 'next/image';
import infTech_logo from '/images/inftech.png';

export default function ExperiencePage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Experience</h1>
      <div
        className={`p-4 rounded-xl shadow-md space-y-2 bg-white text-zinc-900 dark:bg-zinc-800 dark:text-white grid grid-cols-8`}
      >
        <div className="text-sm text-zinc-500 dark:text-zinc-400 col-span-7">
          <h3 className="text-xl font-semibold">Associate Software Engineer</h3>
          Infoane Technologies, 2023 – Present
        </div>
        <div className="col-span-1 !mt-0 mx-auto flex items-center">
          <Image alt="tce logo" src={infTech_logo} unoptimized />
        </div>
      </div>
    </div>
  );
}
