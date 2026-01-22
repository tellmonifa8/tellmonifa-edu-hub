import CTAButton from '@comp/common/CTAButton';
import Icon from '@comp/ui/AppIcon';

interface QuickAccessItem {
  icon: string;
  title: string;
  description: string;
  href: string;
  variant: 'primary' | 'secondary' | 'accent';
}

const QuickAccessSection = () => {
  const quickAccessItems: QuickAccessItem[] = [
    {
      icon: 'PhoneIcon',
      title: 'Crisis Support',
      description:
        'Immediate help available 24/7 for urgent mental health concerns.',
      href: '/support-pathways',
      variant: 'accent',
    },
    {
      icon: 'FolderIcon',
      title: 'Resource Library',
      description:
        'Download guides, worksheets, and tools for self-care and wellness.',
      href: '/resources-library',
      variant: 'secondary',
    },
    {
      icon: 'InformationCircleIcon',
      title: 'About Us',
      description:
        'Learn about our mission, team, and commitment to student mental health.',
      href: '/about',
      variant: 'primary',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Quick Access
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find what you need quickly with our essential resources and support
            options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {quickAccessItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-smooth border border-border text-center"
            >
              <div
                className={`w-16 h-16 rounded-full ${
                  item.variant === 'primary'
                    ? 'bg-primary'
                    : item.variant === 'secondary'
                      ? 'bg-secondary'
                      : 'bg-accent'
                } flex items-center justify-center mx-auto mb-6`}
              >
                <Icon
                  name={item.icon as any}
                  size={32}
                  variant="solid"
                  className="text-white"
                />
              </div>

              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {item.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {item.description}
              </p>

              <CTAButton
                variant={item.variant}
                size="md"
                href={item.href}
                icon="ArrowRightIcon"
                iconPosition="right"
                fullWidth
              >
                Learn More
              </CTAButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessSection;
