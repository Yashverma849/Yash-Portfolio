import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
  titleClassName?: string;
};

export const SectionHeader = forwardRef<HTMLHeadingElement, SectionHeaderProps>(
  function SectionHeader(
    { title, subtitle, align = 'center', className, titleClassName },
    ref,
  ) {
    return (
      <header
        className={cn(
          'section-header',
          align === 'center' ? 'text-center items-center' : 'text-left items-start',
          className,
        )}
      >
        <h2 ref={ref} className={cn('section-title', titleClassName)}>
          {title}
        </h2>
        {subtitle && (
          <p className={cn('section-subtitle', align === 'center' && 'max-w-2xl mx-auto')}>
            {subtitle}
          </p>
        )}
      </header>
    );
  },
);
