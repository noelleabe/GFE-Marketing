import { FaGithub } from "react-icons/fa";
import Credits from "./ui/Credits";
import { routes, RouteType } from "@/app/constants/routes";
import NavLinkItem from "./ui/NavLinkItem";

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
            {routes.map(({ title, to, id }: RouteType) => (
              <NavLinkItem title={title} to={to} key={id} />
            ))}
          </ol>
        </nav>
      </main>
      <footer>
        <Credits />
      </footer>
    </div>
  );
}
