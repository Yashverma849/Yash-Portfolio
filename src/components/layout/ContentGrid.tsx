import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type GridCols = 1 | 2 | 3 | 4;

type ContentGridProps = {
  children: React.ReactNode;
  cols?: GridCols;
  className?: string;
};

const colClasses: Record<GridCols, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
};

export const ContentGrid = forwardRef<HTMLDivElement, ContentGridProps>(
  function ContentGrid({ children, cols = 2, className }, ref) {
    return (
      <div ref={ref} className={cn('content-grid', colClasses[cols], className)}>
        {children}
      </div>
    );
  },
);
