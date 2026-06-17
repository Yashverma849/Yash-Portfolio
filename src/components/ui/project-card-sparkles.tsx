const SPARKLES = [
  { top: '10%', left: '14%', delay: '0s', size: 6 },
  { top: '22%', left: '78%', delay: '0.35s', size: 5 },
  { top: '38%', left: '32%', delay: '0.7s', size: 7 },
  { top: '52%', left: '68%', delay: '0.2s', size: 5 },
  { top: '64%', left: '18%', delay: '0.55s', size: 6 },
  { top: '72%', left: '84%', delay: '0.9s', size: 4 },
  { top: '18%', left: '48%', delay: '1.1s', size: 4 },
  { top: '46%', left: '52%', delay: '0.45s', size: 7 },
  { top: '80%', left: '42%', delay: '0.15s', size: 5 },
  { top: '30%', left: '92%', delay: '0.8s', size: 4 },
  { top: '58%', left: '8%', delay: '1.25s', size: 5 },
  { top: '88%', left: '62%', delay: '0.6s', size: 6 },
] as const;

export function ProjectCardSparkles() {
  return (
    <div
      className="project-card-sparkles pointer-events-none absolute inset-0 z-[15] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
      aria-hidden
    >
      {SPARKLES.map((sparkle, index) => (
        <span
          key={index}
          className="project-card-sparkle absolute"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            width: sparkle.size,
            height: sparkle.size,
            animationDelay: sparkle.delay,
          }}
        />
      ))}
    </div>
  );
}
