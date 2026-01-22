import CTAButton from '@comp/common/CTAButton';
import Icon from '@comp/ui/AppIcon';

interface SignItem {
  text: string;
  icon: string;
}

interface SeekHelpSectionProps {
  signs: SignItem[];
}

const SeekHelpSection = ({ signs }: SeekHelpSectionProps) => {
  return (
    <section className="bg-gradient-to-br from-error/10 to-warning/10 rounded-xl p-6 lg:p-8 border-2 border-error/20">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-error/20 flex items-center justify-center">
          <Icon
            name="ExclamationTriangleIcon"
            size={24}
            className="text-error"
            variant="solid"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-2">
            When to Seek Professional Help
          </h2>
          <p className="text-base text-muted-foreground">
            It's important to reach out to a mental health professional if you
            experience any of these signs:
          </p>
        </div>
      </div>

      <div className="grid gap-3 mb-6 md:grid-cols-2">
        {signs.map((sign, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-card rounded-lg p-4"
          >
            <Icon
              name={sign.icon as any}
              size={20}
              className="text-error flex-shrink-0 mt-0.5"
              variant="solid"
            />
            <span className="text-sm text-foreground leading-relaxed">
              {sign.text}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-lg p-6">
        <p className="text-base text-foreground mb-4 leading-relaxed">
          Remember: Seeking help is a sign of strength, not weakness.
          Professional support can make a significant difference in your mental
          health journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <CTAButton
            variant="primary"
            size="lg"
            href="/support-pathways"
            icon="HeartIcon"
            iconPosition="left"
          >
            Find Support Now
          </CTAButton>
          <CTAButton
            variant="secondary"
            size="lg"
            href="/practical-guides"
            icon="BookOpenIcon"
            iconPosition="left"
          >
            View Practical Guides
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default SeekHelpSection;
