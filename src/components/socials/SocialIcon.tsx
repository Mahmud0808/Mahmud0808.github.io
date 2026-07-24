import { SocialLinkType } from '@/lib/types';

import SocialLink from './SocialLink';
import Icon from '@/components/ui/Icon';

const SocialIcon = ({ icon, url, name }: SocialLinkType) => {
  return (
    <li>
      <SocialLink href={url} name={name}>
        <Icon icon={icon} width={24} height={24} />
      </SocialLink>
    </li>
  );
};

export default SocialIcon;
