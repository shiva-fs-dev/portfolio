export default function AboutPage() {
  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <section className="dark:bg-gray-950 text-gray-900 dark:text-white px-6 py-12 md:py-20 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            👨🏻‍💻 Full Stack Developer
          </h1>

          <div className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            <div className="max-w-4xl mx-auto p-6 bg-white bg-zinc-50 dark:bg-gray-800 shadow-lg rounded-xl">
              <p className="text-2xl font-bold text-gray-800 dark:text-white">
                Hi, I’m a software engineer with 2+ years of experience in
                building scalable, data-driven web applications. I specialize in
                using technologies like{' '}
                <span className="text-teal-500">ColdFusion, Lucee, SQL</span>,
                and <span className="text-indigo-500">React</span> to
                create seamless, responsive user experiences.
              </p>

              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                My passion lies in writing clean, efficient code and optimizing
                application performance. Always focusing on delivering high-quality solutions.
              </p>

              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                Currently, I’m diving into{' '}
                <span className="text-yellow-500 dark:text-yellow-300 text-2xl font-bold">AWS</span>{' '}
                to take my skills to the next level, and I’m always looking for
                ways to improve and learn new things. {`Whether it's solving bugs`},
                optimizing workflows, or building something from scratch — I’m
                here for it all.
              </p>

              <p className="mt-6 text-lg text-gray-900 dark:text-gray-100">
                {`If you're looking for a developer who’s passionate about both
                                the tech and the process of building awesome things, let’s
                                connect!`} 🚀
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            📩 Let’s Work Together
          </a>
        </div>
      </section>
    </div>
  );
}
