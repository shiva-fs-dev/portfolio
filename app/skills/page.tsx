import Image from 'next/image';
export default function SkillsPage() {
  const skills_arr = [
    {
      title: 'Frontend',
      items: [
        {
          tech: 'Next JS',
          logo: 'https://cdn.brandfetch.io/id2alue-rx/theme/dark/idqNI71Hra.svg?c=1dxbfHSJFAPEGdCLU4o5B',
          exp: '',
          source: 'Self Learned',
        },
        {
          tech: 'React',
          logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
          exp: '2 yrs',
          source: 'Company Projects',
        },
        {
          tech: 'TypeScript',
          logo: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
          exp: '2 yrs',
          source: 'Company Projects',
        },
        {
          tech: 'Tailwind CSS',
          logo: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg',
          exp: '',
          source: 'Self Learned',
        },
        {
          tech: 'JS',
          logo: 'https://www.svgrepo.com/show/353925/javascript.svg',
          exp: '5 yrs',
          source: 'Academic + Company Projects',
        },
        {
          tech: 'HTML/CSS',
          logo: 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
          exp: '5 yrs',
          source: 'Academic + Company Projects',
        },
      ],
    },
    {
      title: 'Backend',
      items: [
        {
          tech: 'Adobe ColdFusion',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Adobe_ColdFusion_logo_2021.svg',
          exp: '2 yrs',
          source: 'Company Projects',
        },
        {
          tech: 'Lucee',
          logo: 'https://avatars.githubusercontent.com/u/10973141',
          exp: '1 yrs',
          source: 'Company Projects',
        },
        {
          tech: 'Java',
          logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968282.png',
          exp: '2 yrs',
          source: 'Company Projects',
        },
        {
          tech: 'REST APIs',
          logo: 'https://img.icons8.com/ios-filled/50/api.png',
          exp: '2 yr',
          source: 'Company Projects',
        },
        {
          tech: 'SQL',
          logo: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg',
          exp: '2 yrs',
          source: 'Academic + Company Projects',
        },
      ],
    },
    {
      title: 'Other Skills',
      items: [
        {
          tech: 'Git & GitHub',
          logo: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
          exp: '3 yrs',
          source: 'Company + Side Projects',
        },
        {
          tech: 'VSCode',
          logo: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg',
          exp: '3 yrs',
          source: 'Daily Use',
        },
        {
          tech: 'Postman',
          logo: 'https://cdn.worldvectorlogo.com/logos/postman.svg',
          exp: '1 yr',
          source: 'API Testing at Work',
        },
      ],
    },
  ];
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 hidden md:block">Skills</h1>
      <div className="space-y-8">
        {skills_arr.map(({ title, items }) => (
          <div key={title}>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {items.map(({ tech, logo, exp, source }) => (
                <div
                  key={tech}
                  className="flex flex-col items-center p-4 rounded-xl shadow hover:shadow-lg hover:dark:shadow-gray-800 cursor-pointer transition duration-300 text-center"
                >
                  <Image
                    alt="tce logo"
                    src={logo}
                    width={60}
                    height={60}
                    unoptimized
                    className="w-12 h-12 mb-2"
                  />
                  <div className="text-sm font-medium">{tech}</div>
                  <div className="text-xs text-zinc-500">{exp}</div>
                  <div className="text-xs text-zinc-400 italic">{source}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
