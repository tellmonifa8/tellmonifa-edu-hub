'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface GuideCardProps {
  guide: {
    id: string;
    title: string;
    description: string;
    category: string;
    duration: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    image: string;
    alt: string;
    isBookmarked: boolean;
  };
  onBookmark: (id: string) => void;
  onViewGuide: (id: string) => void;
}

const GuideCard = ({ guide, onBookmark, onViewGuide }: GuideCardProps) => {
  const [imageError, setImageError] = useState(false);

  const difficultyColors = {
    Beginner: 'bg-success/10 text-success',
    Intermediate: 'bg-warning/10 text-warning',
    Advanced: 'bg-accent/10 text-accent',
  };

  return (
    <article className="bg-card rounded-lg shadow-md hover:shadow-lg transition-smooth overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-muted">
        <AppImage
          src={guide.image}
          alt={guide.alt}
          className="w-full h-full object-cover hover:scale-105 transition-smooth"
        />
        <button
          onClick={() => onBookmark(guide.id)}
          className="absolute top-4 right-4 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-smooth press-effect focus-ring"
          aria-label={guide.isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          <Icon
            name="BookmarkIcon"
            size={20}
            variant={guide.isBookmarked ? 'solid' : 'outline'}
            className={guide.isBookmarked ? 'text-accent' : 'text-foreground'}
          />
        </button>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="caption text-primary font-medium">
            {guide.category}
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="caption text-muted-foreground">
            {guide.duration}
          </span>
        </div>

        <h3 className="text-xl font-heading font-semibold text-foreground mb-3 line-clamp-2">
          {guide.title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
          {guide.description}
        </p>

        <div className="flex items-center justify-between gap-4 mt-auto">
          <span
            className={`caption px-3 py-1.5 rounded-md font-medium ${difficultyColors[guide.difficulty]}`}
          >
            {guide.difficulty}
          </span>

          <button
            onClick={() => onViewGuide(guide.id)}
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-smooth focus-ring rounded-md px-2 -mx-2"
            aria-label={`View ${guide.title} guide`}
          >
            <span>View Guide</span>
            <Icon
              name="ArrowRightIcon"
              size={18}
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default GuideCard;
