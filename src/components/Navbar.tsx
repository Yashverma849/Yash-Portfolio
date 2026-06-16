'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1));

export default function Navbar() {
  const [activeHref, setActiveHref] = useState('#home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  const shellRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const updateIndicator = useCallback((href: string) => {
    const nav = navRef.current;
    const link = linkRefs.current[href];
    if (!nav || !link) return;

    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    setIndicator({
      left: linkRect.left - navRect.left + linkRect.width / 2,
      width: Math.min(linkRect.width * 0.45, 36),
      ready: true,
    });
  }, []);

  useEffect(() => {
    updateIndicator(activeHref);
    const onResize = () => updateIndicator(activeHref);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [activeHref, updateIndicator]);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: '-40% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section!));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveHref(href);
    }
    setMobileOpen(false);
  };

  const glassNav =
    'nav-glass backdrop-blur-xl backdrop-saturate-150 border border-border/50 shadow-soft';

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] isolate pointer-events-none">
      <div
        ref={shellRef}
        className="relative mx-auto flex justify-center px-4 pt-4 pb-2 pointer-events-none"
      >
        <nav
          ref={navRef}
          aria-label="Primary"
          className={cn(
            'pointer-events-auto relative flex items-center gap-1 rounded-full px-2 py-1.5',
            glassNav,
          )}
        >
          <span
            aria-hidden
            className={cn(
              'absolute -top-px h-[3px] rounded-full bg-accent transition-all duration-300 ease-out',
              'shadow-[0_0_12px_2px_hsl(var(--accent)/0.55)]',
              indicator.ready ? 'opacity-100' : 'opacity-0',
            )}
            style={{
              left: indicator.left,
              width: indicator.width,
              transform: 'translateX(-50%)',
            }}
          />

          <a
            href="#home"
            aria-label="Home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#home');
            }}
            className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-card/80 p-1.5 ring-1 ring-border/60 backdrop-blur-sm"
          >
            <Image
              src="/assets/yv-logo.png"
              alt="Yash Verma"
              width={28}
              height={28}
              className="h-full w-full object-contain"
              priority
            />
          </a>

          <div className="mx-0.5 hidden h-5 w-px bg-border/60 md:block" aria-hidden />

          <ul className="hidden md:flex items-center gap-0.5 list-none m-0 p-0">
            {NAV_ITEMS.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <li key={item.href}>
                  <a
                    ref={(el) => {
                      linkRefs.current[item.href] = el;
                    }}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className={cn(
                      'relative block rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200',
                      'hover:text-foreground hover:bg-secondary/50',
                      isActive && 'bg-secondary/70 text-foreground',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary/50 hover:text-foreground transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="pointer-events-auto absolute top-full left-4 right-4 mt-2 md:hidden">
            <ul className={cn('list-none m-0 flex flex-col gap-1 rounded-2xl p-2', glassNav)}>
              {NAV_ITEMS.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(item.href);
                      }}
                      className={cn(
                        'block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors',
                        isActive
                          ? 'bg-secondary/70 text-foreground'
                          : 'hover:bg-secondary/50 hover:text-foreground',
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
