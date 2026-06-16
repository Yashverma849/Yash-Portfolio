'use client';

import { Gallery4, type Gallery4Item } from '@/components/ui/gallery4';

const achievementItems: Gallery4Item[] = [
  {
    id: 'smart-india-hackathon',
    title: 'Smart India Hackathon',
    label: 'Frontend Developer',
    description:
      'Participated in Smart India Hackathon building innovative solutions for national-level challenges alongside a collaborative engineering team.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'finzarc-internship',
    title: 'Finzarc Internship',
    label: 'Full Stack Developer',
    description:
      'Built Expensiq with Gemini AI integration for automated expense tracking and financial insights during a hands-on product internship.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'ai-saas-prototypes',
    title: 'AI SaaS Prototypes',
    label: 'Product Developer',
    description:
      'Created multiple AI-powered SaaS prototypes focusing on automation and intelligent solutions that solve real-world business problems.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'ai-voice-calling-agent',
    title: 'AI Voice Calling Agent',
    label: 'Voice AI Engineer',
    description:
      'Built an AI-powered voice calling agent using Twilio SIP trunking, Sarvam AI STT and TTS, and an LLM for intelligent responses and call analysis — designed to scale and replace traditional call centers.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    id: 'instagram-publishing-system',
    title: 'Instagram Publishing System',
    label: 'Automation Engineer',
    description:
      'Automated social media publishing for Instagram with yt-dlp reel downloads, FFmpeg cropping, and Gemini API for frame-dimension analysis, title extraction, and caption parsing.',
    href: '#',
    image:
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
];

const Achievements = () => {
  return (
    <Gallery4
      id="achievements"
      title="Achievements"
      description="Highlights from hackathons, internships, and AI product work."
      items={achievementItems}
      className="bg-secondary/30 !pt-8 sm:!pt-10 md:!pt-12"
      centered
      autoPlay
      hideControls
    />
  );
};

export default Achievements;
