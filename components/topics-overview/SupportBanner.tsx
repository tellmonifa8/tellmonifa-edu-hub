import CTAButton from '@comp/common/CTAButton';
import Icon from '@comp/ui/AppIcon';

const SupportBanner = () => {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-xl p-6 lg:p-8 mt-12">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/20">
            <Icon
              name="HeartIcon"
              size={32}
              className="text-primary"
              variant="solid"
            />
          </div>
        </div>

        <h3 className="font-heading font-semibold text-2xl text-foreground mb-3">
          Need Immediate Support?
        </h3>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          If you&apos;re experiencing a mental health crisis or need
          professional guidance right now, our support pathways connect you with
          verified therapists and crisis resources available 24/7.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton
            variant="primary"
            size="lg"
            href="/support-pathways"
            icon="HeartIcon"
            iconPosition="left"
          >
            Get Support Now
          </CTAButton>

          <CTAButton
            variant="secondary"
            size="lg"
            href="/practical-guides"
            icon="LightBulbIcon"
            iconPosition="left"
          >
            View Practical Guides
          </CTAButton>
        </div>

        <p className="caption text-muted-foreground mt-6">
          All therapists are verified by the Global Psychotherapy Consortium
        </p>
      </div>
    </div>
  );
};

export default SupportBanner;
