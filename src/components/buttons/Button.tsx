'use client';
import { removeKeys } from '@/lib/utils/helper';

import { motion, MotionProps } from 'framer-motion';
import Link from 'next/link';

interface DefaultProps {
  children: React.ReactNode | string;
  className?: string;
  size?: 'lg' | 'sm';
  center?: boolean;
}

interface LinkProps extends DefaultProps {
  href: string;
  sameTab?: boolean;
}

interface ButtonProps extends DefaultProps {
  onClick?: (event: React.MouseEvent) => void;
}

type Props =
  | ({
      type?: 'button';
    } & ButtonProps)
  | ({
      type: 'link';
    } & LinkProps);

// For separating animation props from button props
const buttonProps: Array<keyof Props | keyof LinkProps> = [
  'center',
  'children',
  'className',
  'size',
  'type',
  'href',
];

const Button = (props: Props & MotionProps) => {
  const {
    className,
    children,
    type = 'button',
    size = 'sm',
    center = false,
  } = props;

  const classes = `${
    size === 'sm'
      ? 'p-2 px-4 text-sm border-[1.5px] '
      : 'text-sm p-4 px-6 border-2'
  } block ${
    center ? 'mx-auto' : ''
  } w-fit font-mono capitalize rounded-full border-accent text-accent bg-bg hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-0 cursor-pointer ${className}`;

  if (props.type === 'link') {
    const { sameTab, ...motionProps } = props;
    removeKeys<Props & LinkProps>(motionProps, buttonProps);

    const isStaticFile = props.href.match(
      /\.(pdf|docx?|txt|csv|zip|png|jpe?g|webp|svg|mp4|mp3)$/i
    );

    if (isStaticFile) {
      return (
        <motion.span {...motionProps}>
          <a
            href={props.href}
            className={classes}
            target={sameTab ? '_self' : '_blank'}
            rel="noopener noreferrer"
          >
            {children}
          </a>
        </motion.span>
      );
    }

    return (
      <motion.span {...motionProps}>
        <Link
          className={classes}
          href={props.href}
          target={sameTab ? '_self' : '_blank'}
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      </motion.span>
    );
  }

  if (type == 'button') {
    return (
      <button type={type} className={classes} onClick={props.onClick}>
        {children}
      </button>
    );
  }

  return <></>;
};

export default Button;
