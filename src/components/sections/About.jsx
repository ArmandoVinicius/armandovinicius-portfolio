import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
  const frontendSkills = [
    'React',
    'Vue',
    'TypeScript',
    'TailwindCSS',
    'Angular',
  ];

  const backendSkills = ['NodeJS', 'Python', 'axios', 'MongoDB', 'C'];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Sobre mim
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur fugiat eaque dolorem nihil natus commodi excepturi
              similique omnis quaerat non, numquam iure quos dolore nemo totam
              incidunt tempora, nulla blanditiis!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Educação </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Bacharelado em Ciência da Computação </strong> -
                  Universidade Federal do Ceará (2022 - Presente)
                </li>
                <li>
                  <strong>Interesses Acadêmicos:</strong> Desenvolvimento Web,
                  Teoria da Computação, Lógica para Computação...
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                💼 Experiência de Trabalho
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Estagiário em{' '}
                    <a
                      href="https://www.instagram.com/oraculos.ia"
                      className="text-blue-500 underline hover:text-blue-600 transition-all"
                      target="_blank"
                    >
                      Oraculos.IA
                    </a>{' '}
                    (2025 - Presente)
                  </h4>
                  <p>
                    Desenvolvi e mantive diversos microserviços relacionados a
                    **
                  </p>
                </div>

                {/* <div>
                <h4 className="font-semibold">Intern at DEF Startup (2019)</h4>
                <p>
                  Assisted in building frontend components and intergrating REST
                  APIs
                </p>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
