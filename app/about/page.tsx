import ContactButton from '@/components/ContactButton';
export default function AboutPage() {
  return (
    <div className="p-2 md:p-8">
      <section className="bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white px-6 py-2 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">
            👨🏻‍💻 Full Stack Developer
          </h1>

          <div className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            <div className="max-w-4xl mx-auto p-6 bg-gray-900 shadow-lg border border-gray-200 rounded-xl md:text-justify">
              <p className="md:text-2xl font-bold text-white">
                Hi, I’m a software engineer with 2+ years of experience in
                building scalable, data-driven web applications. I specialize in
                using technologies like{' '}
                <span className="text-teal-500">ColdFusion, Lucee, SQL</span> and <span className="text-indigo-500">React</span> to create
                seamless, responsive user experiences.
              </p>

              {/* <p className="mt-10 text-lg text-gray-300">
                My passion lies in writing clean, efficient code and optimizing
                application performance. Always focusing on delivering
                high-quality solutions.
              </p> */}

              <p className="mt-4 text-lg text-gray-300">
                Currently, I’m diving into{' '}
                <span className="text-yellow-500 dark:text-yellow-300 text-2xl font-bold">
                  AWS
                </span>
                {` to take my skills to the next level, and I’m always looking for
                ways to improve and learn new things. Whether it's solving bugs,
                optimizing workflows, or building something from scratch — I’m
                here for it all.`}
              </p>

              <p className="mt-6 text-lg text-gray-100">
                {`If you're looking for a developer who’s passionate about both
                the tech and the process of building awesome things, `}
                {/* <a
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-2 border-b-4 border-blue-800 hover:border-blue-700 rounded shadow transition"
                >
                  let’s connect 🚀
                </a> */}
                <ContactButton />
              </p>
            </div>
          </div>

          {/* <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            📩 Let’s Work Together
          </a> */}
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white px-6 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-lg md:text-xl text-gray-300 leading-relaxed mb-3">
            <div className="max-w-4xl mx-auto p-6 bg-gray-900 shadow-lg border border-gray-200 rounded-xl md:text-justify">
              <div className="text-left md:text-justify">
                <h2 className="md:text-2xl font-bold mb-4 text-white">
                  How I Can Help Your Team?
                </h2>
                <ul className="list-disc pl-5 space-y-3 text-gray-300 text-lg">
                  <li>
                    🛠️Maintain legacy ColdFusion codebases and modernize without
                    breaking flow
                  </li>
                  <li>
                    🚑Fix critical production bugs quickly and efficiently to
                    reduce downtime
                  </li>
                  <li>📈Enhancing application performance</li>
                  <li>🎨Redesign UI using React + Tailwind for better UX</li>
                  {/* <li>
                    ☁️Assist in cloud readiness and help with AWS integration
                    and deployment planning
                  </li> */}
                  <li>
                    🤝Collaborate with both technical and non-technical
                    stakeholders to deliver practical, business-aligned
                    solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            📩 Let’s Work Together
          </a> */}
        </div>
      </section>
    </div>
  );
}
