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
  const MotionTag = useMemo(
    () => m[as as keyof typeof m] as React.ElementType,
    [as]
  );
  const skipContentVisibility = !id || id === 'hero' || id === 'about';
  const baseClassName = `py-24 md:py-32 ${
    skipContentVisibility ? '' : 'cv-auto '
  }${className}`;

  if (animate) {
    return (
      <MotionTag id={id} className={baseClassName} {...rest}>
        {children}
      </MotionTag>
    );
  }

  if (as === 'section') {
    return (
      <m.section id={id} className={baseClassName} {...rest}>
        {children}
      </m.section>
    );
  }

  const CustomTag = `${as}` as ElementType;

  return (
    <CustomTag id={id} className={baseClassName} {...rest}>
      {children}
    </CustomTag>
  );
};

export default Wrapper;
