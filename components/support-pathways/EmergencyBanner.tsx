import CTAButton from '@comp/common/CTAButton';
import Icon from '@comp/ui/AppIcon';

const EmergencyBanner = () => {
  return (
    <div className="bg-error/10 border-2 border-error rounded-lg p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
        <div className="shrink-0 w-16 h-16 rounded-full bg-error flex items-center justify-center">
          <Icon
            name="ExclamationTriangleIcon"
            size={32}
            className="text-white"
            variant="solid"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-xl lg:text-2xl font-heading font-semibold text-foreground mb-2">
            In Crisis? Get Immediate Help
          </h3>
          <p className="text-foreground mb-4">
            If you're experiencing a mental health emergency or having thoughts
            of self-harm, please reach out for immediate support. You're not
            alone, and help is available 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <CTAButton
              variant="accent"
              size="md"
              href="tel:0800-567-567"
              icon="PhoneIcon"
              iconPosition="left"
            >
              Call Crisis Line: 2335-565-788-44
            </CTAButton>

            <CTAButton
              variant="primary"
              size="md"
              href="https://www.tellmonifa.com/auth/login"
              icon="ChatBubbleLeftRightIcon"
              iconPosition="left"
            >
              Chat with Counselor
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
