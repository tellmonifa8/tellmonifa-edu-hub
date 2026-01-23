'use client';

import { useEffect, useState } from 'react';

import CTAButton from '@comp/common/CTAButton';
import FeaturedSection from './FeaturedSection';
import ResourcesGrid from './ResourcesGrid';
import SearchFilters from './SearchFilters';
import StatsSection from './StatsSection';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  downloadCount: number;
  isFeatured: boolean;
  audience: string;
}

const ResourcesLibraryInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    type: 'All Types',
    category: 'All Categories',
    audience: 'All Audiences',
  });
  const [sortBy, setSortBy] = useState('recent');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockResources: Resource[] = [
    {
      id: 1,
      title: 'Managing Academic Stress: A Complete Guide',
      description:
        'Comprehensive strategies for handling academic pressure, time management techniques, and stress reduction methods specifically designed for students.',
      type: 'PDF',
      category: 'Academic Stress',
      imageUrl:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
      imageAlt:
        'Young Black African student studying at desk with laptop and books in bright library setting',
      downloadCount: 2847,
      isFeatured: true,
      audience: 'University Students',
    },
    {
      id: 2,
      title: 'Anxiety Management Worksheet Pack',
      description:
        'Interactive worksheets with breathing exercises, thought challenging techniques, and daily anxiety tracking tools for students.',
      type: 'Worksheet',
      category: 'Anxiety Management',
      imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800',
      imageAlt:
        'Young Black African student writing in journal with colorful pens on wooden desk',
      downloadCount: 1923,
      isFeatured: true,
      audience: 'Secondary Students',
    },
    {
      id: 3,
      title: 'Exam Preparation Success Toolkit',
      description:
        'Study planning templates, revision strategies, exam day preparation checklist, and techniques to manage exam anxiety effectively.',
      type: 'Guide',
      category: 'Exam Preparation',
      imageUrl:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
      imageAlt:
        'Young Black African student studying with organized notes and highlighters spread across desk',
      downloadCount: 3156,
      isFeatured: true,
      audience: 'University Students',
    },
    {
      id: 4,
      title: 'Crisis Support Quick Reference Card',
      description:
        'Essential contact numbers, immediate coping strategies, and step-by-step guidance for mental health emergencies.',
      type: 'PDF',
      category: 'Crisis Support',
      imageUrl:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800',
      imageAlt:
        'Supportive counselor meeting with young Black African student in comfortable therapy room',
      downloadCount: 1567,
      isFeatured: false,
      audience: 'All Audiences',
    },
    {
      id: 5,
      title: 'Building Healthy Study Habits',
      description:
        'Evidence-based techniques for creating sustainable study routines, avoiding burnout, and maintaining work-life balance.',
      type: 'Guide',
      category: 'Academic Stress',
      imageUrl: 'https://i.pinimg.com/736x/10/6a/54/106a54aecf99c4bb28471d705816756f.jpg',
      imageAlt:
        'Young Black African student with organized study space including laptop, planner, and coffee cup on clean desk',
      downloadCount: 2234,
      isFeatured: false,
      audience: 'University Students',
    },
    {
      id: 6,
      title: 'Mindfulness for Students Workbook',
      description:
        'Guided mindfulness exercises, meditation scripts, and daily practices to reduce anxiety and improve focus.',
      type: 'Worksheet',
      category: 'Anxiety Management',
      imageUrl:
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
      imageAlt: 'Young Black African student meditating in quiet outdoor garden setting',
      downloadCount: 1789,
      isFeatured: false,
      audience: 'Secondary Students',
    },
    {
      id: 7,
      title: "Parent's Guide to Supporting Student Mental Health",
      description:
        'Practical advice for parents on recognizing mental health concerns, starting conversations, and finding appropriate support.',
      type: 'PDF',
      category: 'Crisis Support',
      imageUrl:
        'https://i.pinimg.com/1200x/ad/61/66/ad6166663bd179a688228d6ded75166b.jpg',
      imageAlt: 'Parent and young Black African student having supportive conversation at kitchen table',
      downloadCount: 1456,
      isFeatured: false,
      audience: 'Parents & Guardians',
    },
    {
      id: 8,
      title: 'Pre-Exam Relaxation Techniques',
      description:
        'Quick relaxation exercises, visualization methods, and breathing techniques to use before and during exams.',
      type: 'Worksheet',
      category: 'Exam Preparation',
      imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800',
      imageAlt:
        'Young Black African student practicing breathing exercises with eyes closed in peaceful setting',
      downloadCount: 2678,
      isFeatured: false,
      audience: 'University Students',
    },
    {
      id: 9,
      title: "Understanding Student Anxiety: Educator's Resource",
      description:
        'Comprehensive guide for educators on identifying anxiety in students, classroom accommodations, and referral pathways.',
      type: 'Guide',
      category: 'Anxiety Management',
      imageUrl:
        'https://i.pinimg.com/1200x/57/5e/19/575e19b9870d83ee1655a265ca080521.jpg',
      imageAlt:
        'Teacher having one-on-one supportive discussion with young Black African student in classroom',
      downloadCount: 987,
      isFeatured: false,
      audience: 'Educators',
    },
    {
      id: 10,
      title: 'Time Management Mastery for Students',
      description:
        'Practical time management strategies, priority setting frameworks, and tools to balance academics with self-care.',
      type: 'PDF',
      category: 'Academic Stress',
      imageUrl:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
      imageAlt:
        'Young Black African student planning schedule in colorful planner with sticky notes and markers',
      downloadCount: 2145,
      isFeatured: false,
      audience: 'Secondary Students',
    },
    {
      id: 11,
      title: 'Sleep Hygiene for Better Academic Performance',
      description:
        'Evidence-based sleep strategies, bedtime routines, and techniques to improve sleep quality for enhanced learning.',
      type: 'Guide',
      category: 'Academic Stress',
      imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800',
      imageAlt:
        'Young Black African student in peaceful bedroom setup with comfortable bed and calming nighttime lighting',
      downloadCount: 1834,
      isFeatured: false,
      audience: 'University Students',
    },
    {
      id: 12,
      title: 'Emergency Mental Health Action Plan',
      description:
        'Customizable template for creating personal crisis plans, including warning signs, coping strategies, and emergency contacts.',
      type: 'Worksheet',
      category: 'Crisis Support',
      imageUrl:
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
      imageAlt:
        'Young Black African student with emergency contact list and mental health resources laid out on desk',
      downloadCount: 1623,
      isFeatured: false,
      audience: 'All Audiences',
    },
  ];

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="h-12 bg-muted rounded-md animate-pulse mb-8" />
          <div className="h-64 bg-muted rounded-lg animate-pulse" />
        </div>
      </div>
    );
  }

  const filterResources = () => {
    let filtered = mockResources;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (resource) =>
          resource.title.toLowerCase().includes(query) ||
          resource.description.toLowerCase().includes(query),
      );
    }

    if (activeFilters.type !== 'All Types') {
      filtered = filtered.filter(
        (resource) => resource.type === activeFilters.type,
      );
    }

    if (activeFilters.category !== 'All Categories') {
      filtered = filtered.filter(
        (resource) => resource.category === activeFilters.category,
      );
    }

    if (activeFilters.audience !== 'All Audiences') {
      filtered = filtered.filter(
        (resource) =>
          resource.audience === activeFilters.audience ||
          resource.audience === 'All Audiences',
      );
    }

    if (sortBy === 'popular') {
      filtered.sort((a, b) => b.downloadCount - a.downloadCount);
    } else if (sortBy === 'recent') {
      filtered.sort((a, b) => b.id - a.id);
    }

    return filtered;
  };

  const filteredResources = filterResources();
  const totalDownloads = mockResources.reduce(
    (sum, resource) => sum + resource.downloadCount,
    0,
  );

  const handleDownload = (id: number) => {
    console.log(`Downloading resource ${id}`);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="font-heading text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Resources Library
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Access our comprehensive collection of downloadable mental health
              resources, worksheets, and guides designed specifically for
              African students.
            </p>
          </div>

          <StatsSection
            totalResources={mockResources.length}
            totalDownloads={totalDownloads}
          />

          <SearchFilters
            onSearchChange={setSearchQuery}
            onTypeFilter={(type) =>
              setActiveFilters({ ...activeFilters, type })
            }
            onCategoryFilter={(category) =>
              setActiveFilters({ ...activeFilters, category })
            }
            onAudienceFilter={(audience) =>
              setActiveFilters({ ...activeFilters, audience })
            }
            activeFilters={activeFilters}
          />

          <div className="flex items-center justify-between my-8">
            <p className="text-muted-foreground">
              Showing{' '}
              <span className="font-semibold text-foreground">
                {filteredResources.length}
              </span>{' '}
              of{' '}
              <span className="font-semibold text-foreground">
                {mockResources.length}
              </span>{' '}
              resources
            </p>
            <div className="flex items-center gap-3">
              <label
                htmlFor="sort-select"
                className="caption text-muted-foreground"
              >
                Sort by:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-card border border-border rounded-md text-foreground caption focus:outline-none focus:ring-2 focus:ring-ring transition-smooth"
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          {searchQuery === '' &&
            activeFilters.type === 'All Types' &&
            activeFilters.category === 'All Categories' &&
            activeFilters.audience === 'All Audiences' && (
              <FeaturedSection
                resources={mockResources}
                onDownload={handleDownload}
              />
            )}

          <section>
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
              {searchQuery ||
              activeFilters.type !== 'All Types' ||
              activeFilters.category !== 'All Categories' ||
              activeFilters.audience !== 'All Audiences'
                ? 'Search Results'
                : 'All Resources'}
            </h2>
            <ResourcesGrid
              resources={filteredResources}
              onDownload={handleDownload}
            />
          </section>

          <div className="mt-16 bg-primary/5 rounded-lg p-8 lg:p-12 text-center">
            <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-4">
              Need Personalized Support?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              While our resources provide valuable guidance, speaking with a
              professional therapist can offer personalized support tailored to
              your unique situation.
            </p>
            <CTAButton
              variant="primary"
              size="lg"
              href="/support-pathways"
              icon="HeartIcon"
            >
              Explore Support Options
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesLibraryInteractive;
