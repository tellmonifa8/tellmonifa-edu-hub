'use client';

import { useState } from 'react';

import Icon from '@comp/ui/AppIcon';
import AppImage from '@comp/ui/AppImage';

interface ResourceCardProps {
  resource: {
    id: number;
    title: string;
    description: string;
    type: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
    downloadCount: number;
    isFeatured: boolean;
  };
  onDownload: (id: number) => void;
}

const ResourceCard = ({ resource, onDownload }: ResourceCardProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    onDownload(resource.id);
    setTimeout(() => setIsDownloading(false), 1500);
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return 'DocumentTextIcon';
      case 'worksheet':
        return 'DocumentIcon';
      case 'guide':
        return 'BookOpenIcon';
      default:
        return 'DocumentIcon';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return 'bg-error/10 text-error';
      case 'worksheet':
        return 'bg-accent/10 text-accent';
      case 'guide':
        return 'bg-primary/10 text-primary';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <article
      className={`
        bg-card rounded-lg overflow-hidden transition-smooth hover-lift
        ${resource.isFeatured ? 'ring-2 ring-accent' : ''}
      `}
    >
      {resource.isFeatured && (
        <div className="bg-accent px-4 py-2 flex items-center gap-2">
          <Icon
            name="StarIcon"
            size={16}
            className="text-accent-foreground"
            variant="solid"
          />
          <span className="caption font-medium text-accent-foreground">
            Featured Resource
          </span>
        </div>
      )}

      <div className="relative h-48 overflow-hidden bg-muted">
        <AppImage
          src={resource.imageUrl}
          alt={resource.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md caption font-medium ${getTypeColor(resource.type)}`}
          >
            <Icon
              name={getTypeIcon(resource.type) as any}
              size={14}
              variant="solid"
            />
            {resource.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2 line-clamp-2">
          {resource.title}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-3">
          {resource.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="caption text-muted-foreground flex items-center gap-1.5">
            <Icon
              name="FolderIcon"
              size={16}
            />
            {resource.category}
          </span>
          <span className="caption text-muted-foreground flex items-center gap-1.5">
            <Icon
              name="ArrowDownTrayIcon"
              size={16}
            />
            {resource.downloadCount} downloads
          </span>
        </div>

        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium transition-smooth hover-lift press-effect focus-ring disabled:opacity-50 disabled:cursor-not-allowed min-h-12"
          aria-label={`Download ${resource.title}`}
        >
          {isDownloading ? (
            <>
              <Icon
                name="ArrowPathIcon"
                size={20}
                className="animate-spin"
                variant="solid"
              />
              <span>Downloading...</span>
            </>
          ) : (
            <>
              <Icon
                name="ArrowDownTrayIcon"
                size={20}
                variant="solid"
              />
              <span>Download Resource</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
};

export default ResourceCard;
