import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

type SectionVariant = 'default' | 'alt' | 'compact' | 'flush';

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: SectionVariant;
  narrow?: boolean;
};

const variantStyles: Record<SectionVariant, string> = {
  default: 'section-padding bg-background',
  alt: 'section-padding bg-secondary/30',
  compact: 'section-padding-compact bg-background',
  flush: 'bg-background',
};

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  {
    id,
    children,
    className,
    containerClassName,
    variant = 'default',
    narrow,
  },
  ref,
) {
  return (
    <section
      id={id}
      ref={ref}
      className={cn('relative w-full overflow-x-clip', variantStyles[variant], className)}
    >
      <Container className={containerClassName} narrow={narrow}>
        {children}
      </Container>
    </section>
  );
});
