'use client';

import { useEffect, useState } from 'react';

import Icon from '@comp/ui/AppIcon';

interface Experience {
  title: string;
  description: string;
}

interface ExperienceCardProps {
  experiences: Experience[];
}

const ExperienceCard = ({ experiences }: ExperienceCardProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const toggleExpand = (index: number) => {
    if (!isHydrated) return;
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (!isHydrated) {
    return (
      <section className="bg-secondary/10 rounded-xl p-6 lg:p-8">
        <div className="h-8 w-64 bg-muted rounded mb-6" />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-16 bg-muted rounded"
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-secondary/10 rounded-xl p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Icon
          name="UserGroupIcon"
          size={28}
          className="text-secondary"
          variant="solid"
        />
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
          Common Experiences
        </h2>
      </div>

      <div className="space-y-3">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-smooth"
          >
            <button
              onClick={() => toggleExpand(index)}
              className="w-full flex items-center justify-between p-5 text-left focus-ring"
              aria-expanded={expandedIndex === index}
            >
              <span className="text-lg font-medium text-foreground pr-4">
                {experience.title}
              </span>
              <Icon
                name="ChevronDownIcon"
                size={20}
                className={`text-muted-foreground flex-shrink-0 transition-transform ${
                  expandedIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {expandedIndex === index && (
              <div className="px-5 pb-5 pt-0">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceCard;
