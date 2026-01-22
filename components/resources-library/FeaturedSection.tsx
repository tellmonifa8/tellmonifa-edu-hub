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

interface FeaturedSectionProps {
  resources: Resource[];
  onDownload: (id: number) => void;
}

const FeaturedSection = ({ resources, onDownload }: FeaturedSectionProps) => {
  const featuredResources = resources.filter((r) => r.isFeatured).slice(0, 3);

  if (featuredResources.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <svg
            className="w-6 h-6 text-accent"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <h2 className="font-heading text-2xl font-semibold text-foreground">
          Featured Resources
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredResources.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            onDownload={onDownload}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
