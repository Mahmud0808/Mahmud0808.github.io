import { sourceRepo } from '@/lib/content/portfolio';

const Footer = () => (
  <footer className="foot">
    <p>© {new Date().getFullYear()}</p>
    <p>
      <a href={sourceRepo} target="_blank" rel="noopener noreferrer">
        Source on GitHub
      </a>
    </p>
  </footer>
);

export default Footer;
