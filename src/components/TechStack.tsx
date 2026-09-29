import { abbreviations } from '@/lib/content/about';
import { techIcon } from '@/lib/utils/tech-icons';

type Props = {
  items: string[];
  label: string;
  withIcons?: boolean;
};

const TechStack = ({ items, label, withIcons = false }: Props) => (
  <ul className="stack" aria-label={label}>
    {items.map((item) => {
      const icon = withIcons ? techIcon(item) : undefined;
      const title = abbreviations[item];
      return (
        <li key={item}>
          {icon && (
            <svg viewBox={icon.viewBox} aria-hidden="true" focusable="false">
              <path d={icon.path} />
            </svg>
          )}
          {title ? <abbr title={title}>{item}</abbr> : item}
        </li>
      );
    })}
  </ul>
);

export default TechStack;
