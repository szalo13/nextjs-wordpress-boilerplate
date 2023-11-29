'use client'

import { useState, useEffect, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

const FadeInAnimation = ({ children, delay = 0, duration = 1000 }: { children: ReactNode, delay?: number, duration?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timeoutId);
    }
  }, [inView, delay]);

  return (
    <div
      ref={ref}
      className={classNames({
        'opacity-0 transform translate-y-4 transition-all': true,
        'opacity-100 translate-y-0': isVisible,
      })}
      style={{
        transitionDuration: `${duration / 1000}s`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInAnimation;