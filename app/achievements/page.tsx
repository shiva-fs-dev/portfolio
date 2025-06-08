import Script from 'next/script';
import { RiExternalLinkLine } from 'react-icons/ri';
export default function SkillsPage() {
  const achvm_arr = [
    {
      title: 'Badges',
      items: [
        {
          url: 'https://www.credly.com/badges/7237d245-0d21-439b-8321-0070bf3df149/public_url',
          logo: 'aws-educate-getting-started-with-storage.png',
        },
        {
          url: 'https://www.credly.com/badges/160d5b1b-587a-4472-8f4e-3159798569ec/public_url',
          logo: 'aws-educate-introduction-to-cloud-101.png',
        },
      ],
    },
  ];
  return (
    <div className="p-8">
      <Script
        src="//cdn.credly.com/assets/utilities/embed.js"
        strategy="afterInteractive"
      />
      {achvm_arr.map(({ title, items }) => (
        <>
          <h1 className="text-4xl font-bold mb-6 break-words">{title}</h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {items.map(({ url, logo }, index) => (
                <div
                  key={index}
                  className="flex-grow min-w-[100px] max-w-[200px] m-1"
                >
                  <RiExternalLinkLine className="text-blue-400 float-end"/>
                  <a href={url} target="_blank">
                    <img
                      src={'/achvm/' + logo}
                    />
                  </a>
                </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
