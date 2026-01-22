import Icon from '@/components/ui/AppIcon';
import CTAButton from '@/components/common/CTAButton';

interface NavigationCardProps {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  href: string;
  ctaText: string;
  ctaVariant?: 'primary' | 'secondary' | 'accent';
}

const NavigationCard = ({
  title,
  description,
  icon,
  iconColor,
  href,
  ctaText,
  ctaVariant = 'primary',
}: NavigationCardProps) => {
  return (
    <div className="group bg-card rounded-xl shadow-md hover:shadow-xl transition-smooth p-8 border border-border hover:border-primary/30 h-full flex flex-col">
      <div
        className={`w-16 h-16 rounded-xl ${iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}
      >
        <Icon
          name={icon as any}
          size={32}
          variant="solid"
          className="text-white"
        />
      </div>

      <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
        {title}
      </h3>

      <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      <CTAButton
        variant={ctaVariant}
        size="md"
        href={href}
        icon="ArrowRightIcon"
        iconPosition="right"
        fullWidth
      >
        {ctaText}
      </CTAButton>
    </div>
  );
};

export default NavigationCard;
