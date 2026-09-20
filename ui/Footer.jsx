import { Link } from "react-router";
import { FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-neutral-border px-6 pt-12 pb-16 text-xl text-text-primary bg-neutral-card-bg mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold flex gap-2 items-center text-2xl">
            <span>
              <FaGlobe />
            </span>
            <span>Countries Explorer</span>
          </h2>
          <p className="text-text-secondary text-base">
            &copy; {new Date().getFullYear()} Countries Explorer. Institutional Tech Data Portal
          </p>
        </div>
        <div className="flex flex-wrap items-center capitalize gap-6 text-lg">
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
