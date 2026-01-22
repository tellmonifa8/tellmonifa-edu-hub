import ResourceCard from './ResourceCard';

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

interface ResourcesGridProps {
  resources: Resource[];
  onDownload: (id: number) => void;
}

const ResourcesGrid = ({ resources, onDownload }: ResourcesGridProps) => {
  if (resources.length === 0) {
    return (
      <div className="bg-card rounded-lg p-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
            No Resources Found
          </h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria to find relevant
            resources.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource) => (
        <ResourceCard
          key={resource.id}
          resource={resource}
          onDownload={onDownload}
        />
      ))}
    </div>
  );
};

export default ResourcesGrid;
