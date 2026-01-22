'use client';

import { useState } from 'react';

import CTAButton from '@comp/common/CTAButton';
import Icon from '@comp/ui/AppIcon';

interface PathwayStep {
  id: number;
  title: string;
  description: string;
  action?: string;
  actionLink?: string;
  icon: string;
}

interface PathwayCardProps {
  title: string;
  description: string;
  steps: PathwayStep[];
  variant: 'crisis' | 'therapy' | 'peer' | 'self';
  icon: string;
}

const PathwayCard = ({
  title,
  description,
  steps,
  variant,
  icon,
}: PathwayCardProps) => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const variantStyles = {
    crisis: 'border-error bg-error/5',
    therapy: 'border-primary bg-primary/5',
    peer: 'border-secondary bg-secondary/5',
    self: 'border-accent bg-accent/5',
  };

  const variantIconColors = {
    crisis: 'text-error',
    therapy: 'text-primary',
    peer: 'text-secondary',
    self: 'text-accent',
  };

  const toggleStep = (stepId: number) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <div
      className={`rounded-lg border-2 ${variantStyles[variant]} p-6 lg:p-8 transition-smooth`}
    >
      <div className="flex items-start gap-4 mb-6">
        <div
          className={`flex-shrink-0 w-14 h-14 rounded-lg bg-card flex items-center justify-center ${variantIconColors[variant]}`}
        >
          <Icon
            name={icon as any}
            size={28}
            variant="solid"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl lg:text-2xl font-heading font-semibold text-foreground mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="relative"
          >
            {index < steps.length - 1 && (
              <div
                className="absolute left-6 top-14 bottom-0 w-0.5 bg-border"
                aria-hidden="true"
              />
            )}

            <button
              onClick={() => toggleStep(step.id)}
              className="w-full text-left bg-card rounded-lg p-4 hover:shadow-md transition-smooth press-effect focus-ring"
              aria-expanded={expandedStep === step.id}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full ${variantIconColors[variant]} bg-background flex items-center justify-center font-heading font-semibold text-lg relative z-10`}
                >
                  {index + 1}
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-heading font-semibold text-foreground">
                      {step.title}
                    </h4>
                    <Icon
                      name={
                        expandedStep === step.id
                          ? 'ChevronUpIcon'
                          : 'ChevronDownIcon'
                      }
                      size={20}
                      className="text-muted-foreground flex-shrink-0"
                    />
                  </div>
                </div>
              </div>
            </button>

            {expandedStep === step.id && (
              <div className="ml-16 mt-3 p-4 bg-muted rounded-lg">
                <p className="text-foreground mb-4">{step.description}</p>
                {step.action && step.actionLink && (
                  <CTAButton
                    variant={variant === 'crisis' ? 'accent' : 'primary'}
                    size="sm"
                    href={step.actionLink}
                    icon={step.icon}
                    iconPosition="right"
                  >
                    {step.action}
                  </CTAButton>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PathwayCard;
