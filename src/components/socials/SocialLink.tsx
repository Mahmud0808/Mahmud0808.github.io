type Props = {
  children: React.ReactNode;
  className?: string;
  href: string;
  name?: string;
};

const SocialLink = ({ href, name, children, className = '' }: Props) => {
  return (
    <a
      href={href}
      aria-label={name || 'Social Link'}
      target="_blank"
      className={`block text-sm p-2.5 hover:text-accent hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 ${className}`}
    >
      {children}
    </a>
  );
};

export default SocialLink;
