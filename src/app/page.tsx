import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <header>
          <h1>
            {"Great FrontEnd Projects - "}
            <a
              href="https://www.greatfrontend.com/projects/tracks/marketing"
              target="_blank"
              className="hover:underline hover:text-pink-500"
            >
              Marketing components
            </a>
          </h1>
        </header>
        <nav>
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              <a href="/testimonial-card" className="hover:underline hover:text-pink-500">
                Testimonial Card
              </a>
            </li>
          </ol>
        </nav>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/noelleabe/GFE-Marketing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub aria-hidden title="Github Icon" />
          My GitHub
        </a>
      </footer>
    </div>
  );
}
