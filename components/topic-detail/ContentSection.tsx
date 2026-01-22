import Icon from '@comp/ui/AppIcon';

interface ContentSectionProps {
  title: string;
  icon: string;
  content: string[];
  variant?: 'default' | 'highlight';
}

const ContentSection = ({
  title,
  icon,
  content,
  variant = 'default',
}: ContentSectionProps) => {
  const bgColor = variant === 'highlight' ? 'bg-accent/10' : 'bg-muted/50';
  const iconColor = variant === 'highlight' ? 'text-accent' : 'text-primary';

  return (
    <section className={`${bgColor} rounded-xl p-6 lg:p-8`}>
      <div className="flex items-start gap-4 mb-6">
        <div
          className={`shrink-0 w-12 h-12 rounded-lg bg-card flex items-center justify-center ${iconColor}`}
        >
          <Icon
            name={icon as any}
            size={24}
            variant="solid"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground flex-1">
          {title}
        </h2>
      </div>

      <div className="space-y-4">
        {content.map((paragraph, index) => (
          <p
            key={index}
            className="text-base text-foreground leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
