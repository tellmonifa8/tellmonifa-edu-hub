'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TopicHeaderProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  readTime: string;
}

const TopicHeader = ({
  title,
  description,
  image,
  imageAlt,
  category,
  readTime,
}: TopicHeaderProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl overflow-hidden shadow-md">
        <div className="relative h-64 md:h-80 lg:h-96 bg-muted" />
        <div className="p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-6 w-24 bg-muted rounded" />
            <div className="h-6 w-32 bg-muted rounded" />
          </div>
          <div className="h-10 bg-muted rounded mb-4" />
          <div className="h-20 bg-muted rounded" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-smooth">
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <AppImage
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-md caption font-medium">
            <Icon
              name="BookOpenIcon"
              size={16}
              variant="solid"
            />
            {category}
          </span>
          <span className="inline-flex items-center gap-2 caption text-muted-foreground">
            <Icon
              name="ClockIcon"
              size={16}
            />
            {readTime}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 text-balance">
          {title}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed text-balance">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TopicHeader;
