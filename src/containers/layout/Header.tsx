import Link from 'next/link';

import { navLinks } from '@/lib/content/portfolio';

import ThemeControls from '@/components/ThemeControls';

const Header = () => (
  <header className="masthead">
    <nav aria-label="Sections">
      <ul>
        {navLinks.map(({ name, id }) => (
          <li key={id}>
            <Link href={`/#${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <ThemeControls />
  </header>
);

export default Header;
