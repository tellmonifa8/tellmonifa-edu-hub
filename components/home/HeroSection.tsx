import CTAButton from '@comp/common/CTAButton';

interface HeroSectionProps {
  onExploreTopics: () => void;
}

const HeroSection = ({ onExploreTopics }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,124,89,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(107,142,122,0.06),transparent_50%)]" />

      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="caption text-primary font-medium">
              Supporting African Students' Mental Wellness
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground mb-6 text-balance">
            Your Mental Health Matters
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            Access trusted mental health resources, practical guidance, and
            professional support designed specifically for African students
            navigating academic life and personal growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton
              variant="primary"
              size="lg"
              icon="BookOpenIcon"
              iconPosition="left"
              onClick={onExploreTopics}
            >
              Explore Topics
            </CTAButton>
            <CTAButton
              variant="secondary"
              size="lg"
              href="/support-pathways"
              icon="HeartIcon"
              iconPosition="left"
            >
              Get Support Now
            </CTAButton>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                <span className="text-success font-semibold">✓</span>
              </div>
              <span>Culturally Sensitive</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                <span className="text-success font-semibold">✓</span>
              </div>
              <span>Evidence-Based Resources</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
                <span className="text-success font-semibold">✓</span>
              </div>
              <span>Professional Support Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
