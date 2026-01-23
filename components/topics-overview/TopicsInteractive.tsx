'use client';

import { useEffect, useState } from 'react';

import IntroSection from './IntroSection';
import SupportBanner from './SupportBanner';
import TopicsGrid from './TopicsGrid';

interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  preview: string;
  image: string;
  alt: string;
  icon: string;
}

const mockTopics: Topic[] = [
  {
    id: '1',
    slug: 'academic-stress',
    title: 'Academic Stress',
    description:
      'Managing the pressure of coursework, deadlines, and academic expectations while maintaining your wellbeing.',
    preview:
      'Learn practical strategies to balance your studies with self-care, set realistic goals, and develop healthy study habits that support both academic success and mental health.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    alt: 'Young Black African student studying at desk with laptop and books in well-lit room, managing academic stress',
    icon: 'AcademicCapIcon',
  },
  {
    id: '2',
    slug: 'anxiety',
    title: 'Anxiety',
    description:
      'Understanding and managing feelings of worry, nervousness, and unease that affect your daily life.',
    preview:
      'Discover evidence-based techniques to recognize anxiety triggers, practice grounding exercises, and build resilience through culturally appropriate coping strategies.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
    alt: 'Young Black African woman sitting thoughtfully by window with natural lighting, managing anxiety',
    icon: 'ExclamationTriangleIcon',
  },
  {
    id: '3',
    slug: 'exam-pressure',
    title: 'Exam Pressure',
    description:
      'Coping with the intense stress and anxiety that comes with examination periods and performance expectations.',
    preview:
      'Explore effective revision techniques, stress management tools, and mindset strategies to approach exams with confidence and maintain perspective during high-pressure periods.',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
    alt: 'Young Black African student writing exam in classroom with focused concentration, dealing with exam pressure',
    icon: 'DocumentTextIcon',
  },
  {
    id: '4',
    slug: 'feeling-overwhelmed',
    title: 'Feeling Overwhelmed',
    description:
      'Navigating moments when life demands feel too much to handle and everything seems impossible.',
    preview:
      'Learn to break down overwhelming situations into manageable steps, prioritize effectively, and recognize when to seek support from peers, family, or professionals.',
    image: 'https://i.pinimg.com/1200x/4e/77/cb/4e77cb582c46af34f1e317c9eeb7ca15.jpg',
    alt: 'Young Black African student sitting with head in hands looking overwhelmed in library',
    icon: 'CloudIcon',
  },
  {
    id: '5',
    slug: 'loneliness',
    title: 'Loneliness',
    description:
      'Addressing feelings of isolation and disconnection, especially when away from home or family.',
    preview:
      'Understand the difference between being alone and feeling lonely, discover ways to build meaningful connections, and find community support that honors your cultural background.',
    image: 'https://i.pinimg.com/736x/10/26/0b/10260b281a4f5dc0be56c8ffc165496a.jpg',
    alt: 'Young Black African woman sitting alone on bench outdoors looking contemplative, experiencing loneliness',
    icon: 'UserIcon',
  },
  {
    id: '6',
    slug: 'life-transitions',
    title: 'Life Transitions',
    description:
      'Adapting to major changes like starting university, moving cities, or entering new life phases.',
    preview:
      'Navigate transitions with confidence by understanding common adjustment challenges, building new routines, and maintaining connections to your roots while embracing growth.',
    image:
      'https://i.pinimg.com/736x/a8/12/23/a8122371092ccca168276dc5b5a06cf1.jpg',
    alt: 'Young Black African student walking on university campus with backpack, navigating life transitions',
    icon: 'ArrowPathIcon',
  },
];

const TopicsInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="container mx-auto px-6 lg:px-8 py-8">
        <IntroSection />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {mockTopics.map((topic) => (
            <div
              key={topic.id}
              className="bg-card rounded-xl h-96 animate-pulse"
            />
          ))}
        </div>
        <SupportBanner />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 lg:px-8 py-8">
      <IntroSection />
      <TopicsGrid topics={mockTopics} />
      <SupportBanner />
    </div>
  );
};

export default TopicsInteractive;
