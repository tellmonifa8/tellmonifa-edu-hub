'use client';

import { useEffect, useState } from 'react';

import Icon from '@comp/ui/AppIcon';
import EmptyState from './EmptyState';
import FeaturedGuides from './FeaturedGuides';
import FilterBar from './FilterBar';
import GuideCard from './GuideCard';

interface Guide {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
  alt: string;
  isBookmarked: boolean;
  durationMinutes: number;
}

const PracticalGuidesInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  const [selectedDuration, setSelectedDuration] = useState('Any Duration');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels');
  const [guides, setGuides] = useState<Guide[]>([]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      const mockGuides: Guide[] = [
        {
          id: '1',
          title: '5-Minute Breathing Exercise for Exam Anxiety',
          description:
            'A quick and effective breathing technique to calm your nerves before exams. Learn the 4-7-8 method that helps reduce anxiety and improve focus in just minutes.',
          category: 'Anxiety Relief',
          duration: '5 min',
          difficulty: 'Beginner',
          image:
            'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg',
          alt: 'Young African student with eyes closed practicing breathing meditation in peaceful outdoor setting',
          isBookmarked: false,
          durationMinutes: 5,
        },
        {
          id: '2',
          title: 'Study Schedule Planning for Better Balance',
          description:
            'Create a realistic study schedule that prevents burnout. This guide helps you balance academics with self-care, social time, and rest for sustainable success.',
          category: 'Study Skills',
          duration: '15 min',
          difficulty: 'Beginner',
          image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
          alt: 'Organized desk with open planner, colorful sticky notes, and study materials arranged neatly',
          isBookmarked: true,
          durationMinutes: 15,
        },
        {
          id: '3',
          title: 'Progressive Muscle Relaxation for Stress',
          description:
            'Learn to release physical tension through systematic muscle relaxation. This evidence-based technique helps manage stress, improve sleep, and reduce anxiety symptoms.',
          category: 'Stress Management',
          duration: '20 min',
          difficulty: 'Intermediate',
          image:
            'https://images.pixabay.com/photo/2017/08/07/14/02/people-2604149_1280.jpg',
          alt: 'Person lying on yoga mat in relaxation pose with hands resting on abdomen in calm environment',
          isBookmarked: false,
          durationMinutes: 20,
        },
        {
          id: '4',
          title: 'Building a Sleep Routine for Better Rest',
          description:
            'Establish healthy sleep habits that improve your academic performance and mental wellbeing. Learn about sleep hygiene, bedtime routines, and managing late-night study sessions.',
          category: 'Sleep & Rest',
          duration: '10 min',
          difficulty: 'Beginner',
          image:
            'https://images.pexels.com/photos/935777/pexels-photo-935777.jpeg',
          alt: 'Peaceful bedroom with soft lighting, comfortable bed with white linens, and calming decor',
          isBookmarked: false,
          durationMinutes: 10,
        },
        {
          id: '5',
          title: 'Journaling for Emotional Processing',
          description:
            'Use structured journaling prompts to understand and process difficult emotions. This guide provides templates for gratitude, worry management, and self-reflection practices.',
          category: 'Self-Care',
          duration: '15 min',
          difficulty: 'Beginner',
          image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a',
          alt: 'Open journal with handwritten notes, pen resting on page, and cup of tea beside it',
          isBookmarked: true,
          durationMinutes: 15,
        },
        {
          id: '6',
          title: 'Social Connection Strategies for Loneliness',
          description:
            'Practical steps to build meaningful connections on campus. Learn how to initiate conversations, join communities, and maintain friendships while managing academic demands.',
          category: 'Social Connection',
          duration: '12 min',
          difficulty: 'Intermediate',
          image:
            'https://images.pixabay.com/photo/2016/11/29/03/53/architecture-1867187_1280.jpg',
          alt: 'Group of diverse students sitting together on campus lawn, laughing and talking in circle',
          isBookmarked: false,
          durationMinutes: 12,
        },
        {
          id: '7',
          title: 'Mindful Study Breaks for Focus',
          description:
            'Maximize your study effectiveness with strategic breaks. Learn the Pomodoro technique, mindful movement exercises, and quick reset activities that boost concentration.',
          category: 'Study Skills',
          duration: '8 min',
          difficulty: 'Beginner',
          image:
            'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg',
          alt: 'Student stretching arms above head while sitting at desk with laptop and books',
          isBookmarked: false,
          durationMinutes: 8,
        },
        {
          id: '8',
          title: 'Managing Perfectionism in Academics',
          description:
            'Develop a healthier relationship with achievement. This guide addresses perfectionist thinking patterns, sets realistic standards, and builds self-compassion for academic challenges.',
          category: 'Stress Management',
          duration: '25 min',
          difficulty: 'Advanced',
          image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173',
          alt: 'Close-up of hands crumpling paper with crossed-out writing, symbolizing letting go of perfectionism',
          isBookmarked: false,
          durationMinutes: 25,
        },
        {
          id: '9',
          title: 'Quick Grounding Techniques for Panic',
          description:
            'Immediate strategies to manage panic attacks and overwhelming anxiety. Learn the 5-4-3-2-1 sensory technique and other grounding methods you can use anywhere.',
          category: 'Anxiety Relief',
          duration: '5 min',
          difficulty: 'Beginner',
          image:
            'https://images.pixabay.com/photo/2017/03/27/13/28/man-2178721_1280.jpg',
          alt: 'Person sitting on floor with back against wall, hand on chest, practicing grounding technique',
          isBookmarked: true,
          durationMinutes: 5,
        },
        {
          id: '10',
          title: 'Self-Compassion Practices for Difficult Times',
          description:
            'Learn to treat yourself with kindness during academic struggles. This guide teaches self-compassion exercises, positive self-talk, and resilience-building strategies.',
          category: 'Self-Care',
          duration: '18 min',
          difficulty: 'Intermediate',
          image:
            'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg',
          alt: 'Person with gentle smile looking at reflection in mirror, hand placed over heart',
          isBookmarked: false,
          durationMinutes: 18,
        },
        {
          id: '11',
          title: 'Digital Detox for Mental Clarity',
          description:
            'Reduce screen time and social media stress with practical boundaries. Create a healthier relationship with technology while staying connected to what matters.',
          category: 'Self-Care',
          duration: '10 min',
          difficulty: 'Beginner',
          image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
          alt: 'Smartphone placed face-down on wooden table next to open book and cup of coffee',
          isBookmarked: false,
          durationMinutes: 10,
        },
        {
          id: '12',
          title: 'Cognitive Restructuring for Negative Thoughts',
          description:
            'Challenge and reframe unhelpful thinking patterns. This advanced guide teaches cognitive behavioral techniques to manage anxiety, depression, and academic stress.',
          category: 'Stress Management',
          duration: '30 min',
          difficulty: 'Advanced',
          image:
            'https://images.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg',
          alt: 'Notebook with thought patterns written out, arrows showing reframing process from negative to positive',
          isBookmarked: false,
          durationMinutes: 30,
        },
      ];

      setGuides(mockGuides);
    }
  }, [isHydrated]);

  const featuredGuides = [
    {
      id: 'featured-1',
      title: '5-Minute Breathing Exercise for Exam Anxiety',
      description:
        'A quick and effective breathing technique to calm your nerves before exams. Perfect for immediate anxiety relief.',
      image:
        'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg',
      alt: 'Young African student with eyes closed practicing breathing meditation in peaceful outdoor setting',
      badge: 'Most Popular',
    },
    {
      id: 'featured-2',
      title: 'Study Schedule Planning for Better Balance',
      description:
        'Create a realistic study schedule that prevents burnout and promotes sustainable academic success.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
      alt: 'Organized desk with open planner, colorful sticky notes, and study materials arranged neatly',
      badge: "Editor's Pick",
    },
  ];

  const handleBookmark = (id: string) => {
    if (!isHydrated) return;
    setGuides((prevGuides) =>
      prevGuides.map((guide) =>
        guide.id === id
          ? { ...guide, isBookmarked: !guide.isBookmarked }
          : guide,
      ),
    );
  };

  const handleViewGuide = (id: string) => {
    if (!isHydrated) return;
    console.log('Viewing guide:', id);
  };

  const handleClearFilters = () => {
    if (!isHydrated) return;
    setSelectedCategory('All Topics');
    setSelectedDuration('Any Duration');
    setSelectedDifficulty('All Levels');
  };

  const hasActiveFilters =
    selectedCategory !== 'All Topics' ||
    selectedDuration !== 'Any Duration' ||
    selectedDifficulty !== 'All Levels';

  const filteredGuides = guides.filter((guide) => {
    const categoryMatch =
      selectedCategory === 'All Topics' || guide.category === selectedCategory;

    let durationMatch = true;
    if (selectedDuration === 'Under 5 min') {
      durationMatch = guide.durationMinutes < 5;
    } else if (selectedDuration === '5-15 min') {
      durationMatch = guide.durationMinutes >= 5 && guide.durationMinutes <= 15;
    } else if (selectedDuration === '15-30 min') {
      durationMatch = guide.durationMinutes > 15 && guide.durationMinutes <= 30;
    } else if (selectedDuration === '30+ min') {
      durationMatch = guide.durationMinutes > 30;
    }

    const difficultyMatch =
      selectedDifficulty === 'All Levels' ||
      guide.difficulty === selectedDifficulty;

    return categoryMatch && durationMatch && difficultyMatch;
  });

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-12 bg-muted rounded-md w-64 mb-4"></div>
            <div className="h-6 bg-muted rounded-md w-96 mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-card rounded-lg p-6"
                >
                  <div className="h-48 bg-muted rounded-md mb-4"></div>
                  <div className="h-6 bg-muted rounded-md w-3/4 mb-3"></div>
                  <div className="h-4 bg-muted rounded-md w-full mb-2"></div>
                  <div className="h-4 bg-muted rounded-md w-5/6"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Practical Guides
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Discover actionable mental health tools and techniques designed
            specifically for students. Each guide provides step-by-step
            instructions to help you manage stress, improve wellbeing, and
            thrive academically.
          </p>
        </div>

        <FeaturedGuides guides={featuredGuides} />

        <FilterBar
          selectedCategory={selectedCategory}
          selectedDuration={selectedDuration}
          selectedDifficulty={selectedDifficulty}
          onCategoryChange={setSelectedCategory}
          onDurationChange={setSelectedDuration}
          onDifficultyChange={setSelectedDifficulty}
          onClearFilters={handleClearFilters}
          hasActiveFilters={hasActiveFilters}
        />

        {filteredGuides.length === 0 ? (
          <EmptyState onClearFilters={handleClearFilters} />
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing{' '}
                <span className="font-semibold text-foreground">
                  {filteredGuides.length}
                </span>{' '}
                guide{filteredGuides.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredGuides.map((guide) => (
                <GuideCard
                  key={guide.id}
                  guide={guide}
                  onBookmark={handleBookmark}
                  onViewGuide={handleViewGuide}
                />
              ))}
            </div>
          </>
        )}

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-8 lg:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon
                name="HeartIcon"
                size={32}
                className="text-primary"
                variant="solid"
              />
            </div>
            <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-4">
              Need More Support?
            </h2>
            <p className="text-muted-foreground mb-8">
              While these guides are helpful, sometimes you need to talk to
              someone. Our support pathways connect you with professional
              therapists who understand student life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support-pathways"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-md font-medium transition-smooth hover-lift press-effect focus-ring min-h-[48px]"
              >
                <Icon
                  name="HeartIcon"
                  size={20}
                  variant="solid"
                />
                Get Professional Support
              </a>
              <a
                href="/topics-overview"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-card text-foreground border border-border rounded-md font-medium transition-smooth hover-lift press-effect focus-ring min-h-[48px]"
              >
                <Icon
                  name="BookOpenIcon"
                  size={20}
                />
                Explore Topics
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticalGuidesInteractive;
