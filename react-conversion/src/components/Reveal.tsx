import { useEffect, useRef, useState, type PropsWithChildren, type ElementType } from 'react';

interface RevealProps {
  as?: ElementType;
  className?: string;
  [key: string]: any;
}

/**
 * Wraps any element and adds the `.reveal` / `.in` classes used by the
 * original site's CSS transition, triggered via IntersectionObserver
 * (same behavior as the old vanilla-JS scroll-reveal script).
 */
export default function Reveal({
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}: PropsWithChildren<RevealProps>) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
