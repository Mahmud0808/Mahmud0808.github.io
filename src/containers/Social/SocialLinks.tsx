import { socialSection } from '@/lib/content/social';

import { SocialIcon } from '@/components';

const SocialLinks = ({ className = '' }: { className?: string }) => {
  const { socialLinks } = socialSection;
  return (
    <ul className={className}>
      {socialLinks.map(({ icon, url, name }) => (
        <SocialIcon key={url} icon={icon} url={url} name={name} />
      ))}
    </ul>
  );
};

export default SocialLinks;
