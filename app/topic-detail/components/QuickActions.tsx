import CTAButton from '@/components/common/CTAButton';
import Icon from '@/components/ui/AppIcon';

const QuickActions = () => {
  return (
    <aside className="bg-card rounded-xl p-6 shadow-md sticky top-24">
      <div className="flex items-center gap-3 mb-6">
        <Icon
          name="BoltIcon"
          size={24}
          className="text-accent"
          variant="solid"
        />
        <h3 className="text-xl font-heading font-semibold text-foreground">
          Quick Actions
        </h3>
      </div>

      <div className="space-y-3">
        <CTAButton
          variant="primary"
          size="md"
          href="/support-pathways"
          icon="HeartIcon"
          iconPosition="left"
          fullWidth
        >
          Get Support
        </CTAButton>

        <CTAButton
          variant="secondary"
          size="md"
          href="/practical-guides"
          icon="LightBulbIcon"
          iconPosition="left"
          fullWidth
        >
          View Guides
        </CTAButton>

        <CTAButton
          variant="accent"
          size="md"
          href="/resources-library"
          icon="FolderIcon"
          iconPosition="left"
          fullWidth
        >
          Browse Resources
        </CTAButton>
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <div className="bg-accent/10 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Icon
              name="InformationCircleIcon"
              size={20}
              className="text-accent flex-shrink-0 mt-0.5"
            />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">
                Need Immediate Help?
              </p>
              <p className="text-xs text-muted-foreground mb-3">
                Connect with verified therapists through our partner platform.
              </p>
              <a
                href="https://tellmonifa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-smooth focus-ring rounded-sm px-1 -mx-1"
              >
                Visit Tellmonifa
                <Icon
                  name="ArrowTopRightOnSquareIcon"
                  size={16}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default QuickActions;
