import { navLinks } from '@/lib/content/portfolio';
import { prefix } from '@/lib/utils/config';

import ThemeControls from '@/components/ThemeControls';

const Header = () => (
  <header className="masthead">
    <nav aria-label="Sections">
      <ul>
        {navLinks.map(({ name, id }) => (
          <li key={id}>
            <a href={`${prefix}/#${id}`}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
    <ThemeControls />
  </header>
);

export default Header;
