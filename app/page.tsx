'use client'

import PillNav from '@/components/PillNav'
import Chatbot from '@/components/chatbot'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import LogoLoop from '@/components/LogoLoop'
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSupabase, SiOpenai, SiGoogle } from 'react-icons/si'
import { Brain, CircuitBoard } from 'lucide-react'

export default function Home() {
  const navigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PillNav
        logo="/assets/yv-logo.png"
        logoAlt="YV Logo"
        items={navigationItems}
        activeHref="#home"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#000000"
        pillTextColor="#000000"
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Chatbot />

      <section className="p-0 mb-2 sm:mb-3 md:mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ height: '48px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={[
                { node: <SiReact />, title: 'React', href: 'https://react.dev' },
                { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
                { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
                { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
                { node: <SiSupabase />, title: 'Supabase', href: 'https://supabase.com' },
                { node: <SiOpenai />, title: 'ChatGPT (OpenAI)', href: 'https://openai.com' },
                { node: <SiGoogle />, title: 'Gemini (Google AI)', href: 'https://ai.google.dev/gemini-api' },
                { node: <Brain />, title: 'AI', href: '#' },
                { node: <CircuitBoard />, title: 'LLM', href: '#' },
              ]}
              speed={120}
              direction="left"
              logoHeight={32}
              gap={40}
              pauseOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </section>
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}
