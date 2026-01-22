'use client';

import { useEffect, useState } from 'react';

import Icon from '@comp/ui/AppIcon';
import AppImage from '@comp/ui/AppImage';
import Link from 'next/link';

interface TopicCardProps {
  topic: {
    id: string;
    slug: string;
    title: string;
    description: string;
    preview: string;
    image: string;
    alt: string;
    icon: string;
  };
}

const TopicCard = ({ topic }: TopicCardProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-card rounded-xl overflow-hidden transition-smooth h-full flex flex-col">
        <div className="relative h-48 bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
              <div className="w-5 h-5 bg-primary/20 rounded" />
            </div>
            <h3 className="font-heading font-semibold text-xl text-foreground">
              {topic.title}
            </h3>
          </div>
          <p className="text-muted-foreground mb-4 flex-1">
            {topic.description}
          </p>
          <div className="pt-4 border-t border-border">
            <p className="caption text-muted-foreground line-clamp-2">
              {topic.preview}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/topic-detail?topic=${topic.slug}`}
      className="bg-card rounded-xl overflow-hidden transition-smooth hover-lift press-effect focus-ring h-full flex flex-col group"
    >
      <div className="relative h-48 bg-muted overflow-hidden">
        <AppImage
          src={topic.image}
          alt={topic.alt}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 transition-smooth group-hover:bg-primary/20">
            <Icon
              name={topic.icon as any}
              size={20}
              className="text-primary"
              variant="solid"
            />
          </div>
          <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-smooth">
            {topic.title}
          </h3>
        </div>

        <p className="text-muted-foreground mb-4 flex-1">{topic.description}</p>

        <div className="pt-4 border-t border-border">
          <p className="caption text-muted-foreground line-clamp-2 mb-3">
            {topic.preview}
          </p>
          <div className="flex items-center gap-2 text-primary font-medium">
            <span>Learn more</span>
            <Icon
              name="ArrowRightIcon"
              size={16}
              className="transition-smooth group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopicCard;
