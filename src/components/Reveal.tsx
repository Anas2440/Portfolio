import React, { type CSSProperties, type ElementType, type ReactNode } from 'react';
import { useInViewOnce } from '../hooks/useReveal';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  style?: CSSProperties;
}

const Reveal = ({
  as: Component = 'div',
  children,
  className = '',
  delay = 0,
  direction = 'up',
  style,
}: RevealProps) => {
  const { ref, isVisible, prefersReducedMotion } = useInViewOnce<HTMLElement>();

  return (
    <Component
      ref={ref}
      className={[
        'reveal',
        direction === 'none' ? '' : `reveal-${direction}`,
        isVisible ? 'is-visible' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        ...style,
        transitionDelay: prefersReducedMotion ? '0ms' : `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
