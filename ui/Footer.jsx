import { Link } from "react-router";
import { FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-neutral-border px-5 sm:px-8 lg:px-12 pt-10 pb-12 text-text-primary bg-neutral-card-bg mt-16">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-display font-bold flex gap-2 items-center text-xl">
            <span>
              <FaGlobe />
            </span>
            <span>Countries Explorer</span>
          </h2>
          <p className="text-text-secondary text-xs font-mono uppercase tracking-wide">
            &copy; {new Date().getFullYear()} Countries Explorer. Institutional
            Tech Data Portal
          </p>
        </div>
        <div className="flex flex-wrap items-center uppercase tracking-wider gap-5 text-xs font-bold">
          <a
            href="https://restcountries.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-accent transition-colors"
          >
            documentation
          </a>
          <a
            href="https://github.com/yunus601/Country-Explorer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-accent transition-colors"
          >
            source
          </a>
          <Link to="/" className="hover:text-brand-accent transition-colors">
            privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
