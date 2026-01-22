import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface FeaturedGuide {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  badge: string;
}

interface FeaturedGuidesProps {
  guides: FeaturedGuide[];
}

const FeaturedGuides = ({ guides }: FeaturedGuidesProps) => {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Icon
          name="StarIcon"
          size={24}
          className="text-accent"
          variant="solid"
        />
        <h2 className="text-2xl font-heading font-semibold text-foreground">
          Featured Guides
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {guides.map((guide) => (
          <article
            key={guide.id}
            className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg shadow-md hover:shadow-lg transition-smooth overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-48 h-48 overflow-hidden bg-muted flex-shrink-0">
                <AppImage
                  src={guide.image}
                  alt={guide.alt}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground caption px-3 py-1.5 rounded-md font-medium shadow-sm">
                  {guide.badge}
                </span>
              </div>

              <div className="p-6 flex flex-col justify-center flex-grow">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {guide.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {guide.description}
                </p>
                <div className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-smooth focus-ring rounded-md px-2 -mx-2 w-fit">
                  <span>Explore Guide</span>
                  <Icon
                    name="ArrowRightIcon"
                    size={18}
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGuides;
