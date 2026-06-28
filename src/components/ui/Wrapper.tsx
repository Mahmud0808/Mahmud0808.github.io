import { m, MotionProps } from 'framer-motion';
import React, { ElementType, HTMLAttributes, ReactNode, useMemo } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string;
  animate?: boolean;
}

const Wrapper = ({
  children,
  as = 'section',
  className = '',
  id = '',
  animate = true,
  ...rest
}: Props & MotionProps) => {
  const MotionTag = useMemo(() => m[as as keyof typeof m] as React.ElementType, [as]);

  if (animate) {

    return (
      <MotionTag id={id} className={`py-24 md:py-32 ${className}`} {...rest}>
        {children}
      </MotionTag>
    );
  }

  if (as === 'section') {
    return (
      <m.section
        id={id}
        className={`py-24 md:py-32 ${className}`}
        {...rest}
      >
        {children}
      </m.section>
    );
  }

  const CustomTag = `${as}` as ElementType;

  return (
    <CustomTag id={id} className={`py-24 md:py-32 ${className}`} {...rest}>
      {children}
    </CustomTag>
  );
};

export default Wrapper;
