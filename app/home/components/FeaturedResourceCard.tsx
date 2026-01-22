import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface FeaturedResourceCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  category: string;
  readTime: string;
  href: string;
}

const FeaturedResourceCard = ({
  title,
  description,
  image,
  alt,
  category,
  readTime,
  href,
}: FeaturedResourceCardProps) => {
  return (
    <a
      href={href}
      className="group bg-card rounded-xl shadow-md hover:shadow-xl transition-smooth overflow-hidden border border-border hover:border-primary/30 block h-full focus-ring"
    >
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full caption">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
          {title}
        </h4>

        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon
              name="ClockIcon"
              size={16}
            />
            <span>{readTime}</span>
          </div>
          <div className="flex items-center gap-2 text-primary font-medium">
            <span className="text-sm">Read More</span>
            <Icon
              name="ArrowRightIcon"
              size={16}
              className="group-hover:translate-x-1 transition-smooth"
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default FeaturedResourceCard;
