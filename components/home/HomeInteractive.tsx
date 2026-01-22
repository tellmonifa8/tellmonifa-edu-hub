'use client';

import { useRouter } from 'next/navigation';

interface NavigationCardData {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  href: string;
  ctaText: string;
  ctaVariant: 'primary' | 'secondary' | 'accent';
}

interface FeaturedResource {
  title: string;
  description: string;
  image: string;
  alt: string;
  category: string;
  readTime: string;
  href: string;
}

const HomeInteractive = () => {
  const router = useRouter();

  const navigationCards: NavigationCardData[] = [
    {
      title: 'Explore Topics',
      description:
        'Discover comprehensive information about common mental health challenges faced by students, from academic stress to life transitions.',
      icon: 'BookOpenIcon',
      iconColor: 'bg-primary',
      href: '/topics-overview',
      ctaText: 'Browse Topics',
      ctaVariant: 'primary',
    },
    {
      title: 'Practical Guides',
      description:
        'Access actionable tools and step-by-step guidance for managing stress, building resilience, and improving your mental wellness.',
      icon: 'LightBulbIcon',
      iconColor: 'bg-secondary',
      href: '/practical-guides',
      ctaText: 'View Guides',
      ctaVariant: 'secondary',
    },
    {
      title: 'Seek Help',
      description:
        'Find clear pathways to professional support, crisis resources, and answers to common questions about seeking mental health help.',
      icon: 'HeartIcon',
      iconColor: 'bg-accent',
      href: '/support-pathways',
      ctaText: 'Get Support',
      ctaVariant: 'accent',
    },
  ];

  const featuredResources: FeaturedResource[] = [
    {
      title: 'Managing Exam Anxiety: A Student Guide',
      description:
        'Learn evidence-based techniques to reduce exam stress and perform at your best during assessment periods.',
      image:
        'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
      alt: 'African student studying at desk with open textbooks and laptop in bright library setting',
      category: 'Study Skills',
      readTime: '8 min read',
      href: '/practical-guides',
    },
    {
      title: 'Building Healthy Study Habits',
      description:
        'Discover sustainable approaches to academic work that protect your mental health and enhance learning outcomes.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      alt: 'Group of diverse students collaborating around table with notebooks and digital devices',
      category: 'Wellness',
      readTime: '6 min read',
      href: '/practical-guides',
    },
    {
      title: 'Connecting with Campus Support Services',
      description:
        'Navigate available mental health resources at your institution and learn how to access professional support.',
      image: 'https://pixabay.com/get/g0d4c7a8f8c8e8f8e8f',
      alt: 'Student meeting with campus counselor in welcoming office environment',
      category: 'Resources',
      readTime: '5 min read',
      href: '/support-pathways',
    },
  ];

  return (
    <div className="container mx-auto px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-12 lg:py-20 text-center">
        <h1 className="font-heading font-bold text-4xl lg:text-6xl text-foreground mb-6">
          Your Mental Health Matters
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Access trusted mental health resources, practical guidance, and
          professional support designed specifically for African students
          navigating academic life and personal growth.
        </p>
      </section>

      {/* Navigation Cards */}
      <section className="py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {navigationCards.map((card) => (
            <div
              key={card.href}
              className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-smooth hover-lift"
            >
              <div
                className={`${card.iconColor} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}
              >
                <div className="w-8 h-8 bg-white/20 rounded" />
              </div>
              <h2 className="font-heading font-semibold text-2xl text-card-foreground mb-4">
                {card.title}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {card.description}
              </p>
              <button
                onClick={() => router.push(card.href)}
                className={`
                  px-6 py-3 rounded-md font-medium transition-smooth press-effect
                  ${
                    card.ctaVariant === 'primary'
                      ? 'bg-primary text-primary-foreground hover:opacity-90'
                      : card.ctaVariant === 'secondary'
                        ? 'bg-secondary text-secondary-foreground hover:opacity-90'
                        : 'bg-accent text-accent-foreground hover:opacity-90'
                  }
                `}
              >
                {card.ctaText}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12 lg:py-16">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Featured Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our most popular guides and resources to support your mental
            wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredResources.map((resource, index) => (
            <div
              key={index}
              onClick={() => router.push(resource.href)}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-smooth hover-lift cursor-pointer"
            >
              <div className="aspect-video bg-muted relative">
                <img
                  src={resource.image}
                  alt={resource.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="caption text-primary font-medium">
                    {resource.category}
                  </span>
                  <span className="caption text-muted-foreground">
                    {resource.readTime}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-card-foreground mb-3">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {resource.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeInteractive;
