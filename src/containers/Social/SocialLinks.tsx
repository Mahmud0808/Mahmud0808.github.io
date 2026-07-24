import { author } from '@/lib/content/portfolio';
import { socialSection } from '@/lib/content/social';

import { SocialIcon } from '@/components';

const SocialLinks = ({
  className = '',
  withEmail = false,
}: {
  className?: string;
  withEmail?: boolean;
}) => {
  const { socialLinks } = socialSection;
  return (
    <ul className={className}>
      {socialLinks.map(({ icon, url, name }) => (
        <SocialIcon key={url} icon={icon} url={url} name={name} />
      ))}
      {withEmail && (
        <SocialIcon
          icon="tabler:mail"
          url={`mailto:${author.email}`}
          name="Email"
        />
      )}
    </ul>
  );
};

export default SocialLinks;
