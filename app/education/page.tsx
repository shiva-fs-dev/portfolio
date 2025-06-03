import Image from 'next/image';
import logo from '/images/tce_logo.png';

export default function EducationPage() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Education</h1>
      <div className={`p-4 rounded-xl shadow-md space-y-2 bg-white text-zinc-900 dark:bg-zinc-800 dark:text-white grid grid-cols-8`}>
        <div className="text-sm text-zinc-500 dark:text-zinc-400 col-span-7">
          <h3 className="text-xl font-semibold">
            Master of Computer Application
          </h3>
          Thiagarajar College of Engineering, 2020 – 2022
        </div>
        <Image
          alt="tce logo"
          src={logo}
          width={60}
          height={60}
          unoptimized
          className="col-span-1 !mt-0 mx-auto"
        />
      </div>
    </div>
  );
}
