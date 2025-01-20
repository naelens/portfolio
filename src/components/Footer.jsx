import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <div className="flex flex-wrap gap-8 justify-between items-center py-6 px-7.5rem font-inter bg-gray-950">
      <div>
        <Logo />
      </div>

      <div>
        <p className="text-gray-400 text-sm">©2025 | Code and Design By Naelem </p>
      </div>

      <div className="flex gap-4 text-gray-400">
        <a className="hover:text-bglinear" href="https://www.linkedin.com/in/naelem-souza/" target="_blank">
          <LinkedinLogo size={24} />
        </a>
        <a className="hover:text-bglinear" href="https://github.com/naelens" target="_blank">
          <GithubLogo size={24} />
        </a>
      </div>
    </div>
  );
}
