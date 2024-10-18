import React from "react";
import { FaGithub } from "react-icons/fa";
export default function Credits() {
  return (
    <div className="credits" data-gfe-screenshot-exclude="true">
      {`A challenge by `}
      <a
        href="https://www.greatfrontend.com/projects?ref=challenges"
        target="_blank"
      >
        GreatFrontEnd Projects
      </a>
      {`. Built by `}
      <a
        href="https://www.greatfrontend.com/projects/u/noelleabe"
        target="_blank"
      >
        noelleabe
      </a>
      .
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://github.com/noelleabe/GFE-Marketing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub aria-hidden title="Github Icon" />
        My GitHub
      </a>
    </div>
  );
}
