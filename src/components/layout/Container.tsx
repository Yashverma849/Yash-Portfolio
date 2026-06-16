import { cn } from '@/lib/utils';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Narrower max-width for forms / focused content */
  narrow?: boolean;
  as?: 'div' | 'article';
};

export function Container({ children, className, narrow, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag
      className={cn(
        'container-max w-full',
        narrow && '!max-w-5xl',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
