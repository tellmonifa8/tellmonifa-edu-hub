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
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
    alt: 'African student studying at desk with laptop and books in well-lit room',
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
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    alt: 'Young African woman sitting thoughtfully by window with natural lighting',
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
      'https://images.pixabay.com/photo/2016/11/29/03/36/woman-1867093_1280.jpg',
    alt: 'Student writing exam in classroom with focused concentration',
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
    image: 'https://images.pexels.com/photos/3808904/pexels-photo-3808904.jpeg',
    alt: 'African student sitting with head in hands looking stressed in library',
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
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    alt: 'Young African woman sitting alone on bench outdoors looking contemplative',
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
      'https://images.pixabay.com/photo/2017/08/06/12/52/woman-2592247_1280.jpg',
    alt: 'African student walking on university campus with backpack and confident posture',
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
