import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Home() {
  const projects = [
    {
      title: "Auto Parts E-Commerce Platform",
      summary:
        "Contributed as a full-stack developer to a shop-in-shop e-commerce platform for automobile parts, built with MERN and containerized with Docker.",
      stack: "MERN",
      github: "#",
    },
    {
      title: "Travel Destination Sharing App",
      summary:
        "A web app where users can sign up and share travel destinations with images and location details.",
      stack: "MERN",
      github: "#",
    },
    {
      title: "React Quiz App",
      summary:
        "An interactive quiz application using React, featuring multiple-choice questions with a countdown timer, real-time answer validation, and score calculation at the end.",
      stack: "React",
      github: "#",
    },
  ];

  const skillCategories = [
    {
      label: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      label: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs"],
    },
    {
      label: "Tools & DevOps",
      skills: ["Git", "Docker", "VS Code"],
    },
  ];

  return (
    <div className="portfolio-shell">
      <div className="portfolio-noise" aria-hidden="true" />
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-6 sm:px-10 lg:px-16">
        <header className="portfolio-header sticky top-3 z-20 mb-10 rounded-full px-5 py-3">
          <div className="flex items-center justify-between gap-4 text-sm">
            <p className="portfolio-brand font-semibold tracking-[0.2em]">Tharin Jayasekara</p>
            <nav>
              <ul className="portfolio-nav flex flex-wrap items-center gap-4 sm:gap-6">
                <li>
                  <a href="#about" className="portfolio-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="portfolio-link">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="portfolio-link">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="portfolio-link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <section className="portfolio-hero animate-rise" aria-labelledby="hero-title">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="portfolio-eyebrow mb-5 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
                Full-Stack Developer
              </p>
              <h1
                id="hero-title"
                className="portfolio-title max-w-4xl font-sans text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl"
              >
                Building reliable, scalable, and user-focused software solutions
              </h1>
              <p className="portfolio-copy mt-5 max-w-2xl text-base leading-8 sm:text-lg">
                I design and ship fast, intentional products with clean code, expressive visuals, and clear business outcomes.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="portfolio-button-primary" href="#projects">
                  View Projects
                </a>
                <a className="portfolio-button-secondary" href="#contact">
                  Let&apos;s Talk
                </a>
              </div>
            </div>

            <figure className="portfolio-photo-frame justify-self-start lg:justify-self-end">
              <Image
                src="/profile.jpeg"
                alt="Portrait of Tharin"
                width={520}
                height={640}
                priority
                className="portfolio-photo"
              />
              <figcaption className="sr-only">Profile photo</figcaption>
            </figure>
          </div>
        </section>

        <section id="about" className="portfolio-panel animate-rise-delay mt-10" aria-labelledby="about-title">
          <h2 id="about-title" className="portfolio-section-title">
            About
          </h2>
          <p className="portfolio-copy leading-8">
            I&apos;m Tharin, an undergraduate in Information Technology at the University of Moratuwa with a passion for building scalable, user-focused web applications. I enjoy turning ideas into practical solutions using modern technologies such as React, Node.js, Express, MongoDB, TypeScript, and Docker.
          </p>
          <p className="portfolio-copy mt-4 leading-8">
            Through academic and personal projects, I&apos;ve gained experience in full-stack development, REST API design, database management, and responsive UI development. I&apos;m always eager to learn new technologies, solve challenging problems, and write clean, maintainable code.
          </p>
          <p className="portfolio-copy mt-4 leading-8">
            I&apos;m currently seeking opportunities to grow as a Software Engineering Intern, collaborate with talented teams, and contribute to impactful real-world products.
          </p>
        </section>

        <AnimateOnScroll>
          <section id="projects" className="mt-12" aria-labelledby="projects-title">
            <h2 id="projects-title" className="portfolio-section-title mb-5">
              Featured Projects
            </h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="portfolio-card">
                  <h3 className="portfolio-card-title text-2xl font-sans font-semibold">{project.title}</h3>
                  <p className="portfolio-copy mt-3 leading-7">{project.summary}</p>
                  <p className="portfolio-stack mt-5 text-sm font-semibold tracking-wide">{project.stack}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio-card-link"
                  >
                    View Code <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <section id="skills" className="portfolio-panel mt-12" aria-labelledby="skills-title">
            <h2 id="skills-title" className="portfolio-section-title">
              Skills &amp; Toolkit
            </h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {skillCategories.map((category) => (
                <div key={category.label}>
                  <p className="portfolio-skill-category">{category.label}</p>
                  <ul className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="portfolio-chip">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <section id="contact" className="portfolio-contact mt-12" aria-labelledby="contact-title">
            <h2 id="contact-title" className="portfolio-title font-sans text-4xl font-semibold sm:text-5xl">
              Let&apos;s Build Something Great
            </h2>
            <p className="portfolio-copy mt-4 max-w-2xl leading-8">
              I&apos;m currently seeking Software Engineering internship opportunities where I can contribute, learn, and grow. If you&apos;re looking for a motivated developer to help build scalable, user-focused applications, I&apos;d love to connect.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="portfolio-button-primary" href="mailto:tharinjayasekara@gmail.com">
                tharinjayasekara@gmail.com
              </a>
              <a className="portfolio-button-secondary" href="https://github.com/tharinrj" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="portfolio-button-secondary" href="https://www.linkedin.com/in/tharin-jayasekara/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </section>
        </AnimateOnScroll>

        <footer className="portfolio-footer">
          <p>© {new Date().getFullYear()} Tharin Jayasekara · Built with Next.js</p>
        </footer>
      </main>
    </div>
  );
}
