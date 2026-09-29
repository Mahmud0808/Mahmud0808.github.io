import { socialLinks } from '@/lib/content/portfolio';

import { SocialIcon } from './Icons';

const SocialLinks = () => (
  <ul className="social" aria-label="Profiles">
    {socialLinks.map(({ name, href }) => (
      <li key={name}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
        >
          <SocialIcon name={name} />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
