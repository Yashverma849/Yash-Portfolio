import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * Single continuous centerline traced from yv-logo.png (100×100 viewBox).
 * Draw order: top-left → left arm → center → right arm → top-right tip →
 * down through hook → bottom tip → hook junction.
 */
export const LOGO_PATH =
  'M 0.4 0.4 L 6.1 6.1 L 20.8 6.1 L 49.8 35.1 L 78.8 6.1 L 93.5 6.1 L 99.6 0 L 93.1 6.5 L 93.5 16 L 42.4 66.7 L 41.1 72.3 L 50.2 81.4 L 64.5 61';

type YVLogoStrokeProps = {
  className?: string;
  pathClassName?: string;
  pathRef?: React.Ref<SVGPathElement>;
};

const YVLogoStroke = forwardRef<SVGSVGElement, YVLogoStrokeProps>(function YVLogoStroke(
  { className, pathClassName, pathRef },
  ref,
) {
  return (
    <svg
      ref={ref}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn('h-24 w-24 sm:h-28 sm:w-28 text-foreground', className)}
    >
      <path
        ref={pathRef}
        d={LOGO_PATH}
        stroke="currentColor"
        strokeWidth="6.8"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        className={pathClassName}
      />
    </svg>
  );
});

export default YVLogoStroke;
