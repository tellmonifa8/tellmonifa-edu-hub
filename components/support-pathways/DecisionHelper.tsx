'use client';

import { useState } from 'react';

import CTAButton from '@comp/common/CTAButton';
import Icon from '@comp/ui/AppIcon';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    pathway: string;
    icon: string;
  }[];
}

const DecisionHelper = () => {
  const [selectedPathway, setSelectedPathway] = useState<string | null>(null);

  const question: Question = {
    id: 1,
    question: 'What kind of support are you looking for right now?',
    options: [
      {
        text: "I'm in crisis and need immediate help",
        pathway: 'crisis',
        icon: 'ExclamationTriangleIcon',
      },
      {
        text: 'I want to talk to a professional therapist',
        pathway: 'therapy',
        icon: 'UserGroupIcon',
      },
      {
        text: "I'd like to connect with peers who understand",
        pathway: 'peer',
        icon: 'HeartIcon',
      },
      {
        text: 'I want to explore self-help resources first',
        pathway: 'self',
        icon: 'BookOpenIcon',
      },
    ],
  };

  const pathwayDescriptions: Record<
    string,
    { title: string; description: string; cta: string; link: string }
  > = {
    crisis: {
      title: 'Crisis Support Pathway',
      description:
        'Access immediate professional help through our 24/7 crisis hotline or emergency chat services. Trained counselors are ready to support you right now.',
      cta: 'View Crisis Resources',
      link: '#crisis-pathway',
    },
    therapy: {
      title: 'Professional Therapy Pathway',
      description:
        'Connect with verified GPC-registered therapists through Tellmonifa. Book confidential sessions that fit your schedule and needs.',
      cta: 'Book a Therapist',
      link: 'https://www.tellmonifa.com/book',
    },
    peer: {
      title: 'Peer Support Pathway',
      description:
        "Join moderated support groups and connect with other students who understand what you're going through. Share experiences in a safe space.",
      cta: 'Find Support Groups',
      link: '#peer-pathway',
    },
    self: {
      title: 'Self-Help Resources Pathway',
      description:
        'Explore our library of practical guides, coping strategies, and downloadable resources to support your mental wellness journey.',
      cta: 'Browse Resources',
      link: '/resources-library',
    },
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 lg:p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon
            name="QuestionMarkCircleIcon"
            size={28}
            className="text-primary"
            variant="solid"
          />
        </div>
        <div>
          <h3 className="text-xl lg:text-2xl font-heading font-semibold text-foreground mb-2">
            Not Sure Where to Start?
          </h3>
          <p className="text-muted-foreground">
            Answer this quick question to find the right support pathway for
            you.
          </p>
        </div>
      </div>

      <div className="mb-6">
        <p className="font-medium text-foreground mb-4">{question.question}</p>

        <div className="grid gap-3">
          {question.options.map((option) => (
            <button
              key={option.pathway}
              onClick={() => setSelectedPathway(option.pathway)}
              className={`
                flex items-center gap-4 p-4 rounded-lg border-2 transition-smooth
                hover:shadow-md press-effect focus-ring text-left
                ${
                  selectedPathway === option.pathway
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-background hover:border-primary/30'
                }
              `}
            >
              <div
                className={`
                flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
                ${selectedPathway === option.pathway ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}
              `}
              >
                <Icon
                  name={option.icon as any}
                  size={20}
                  variant={
                    selectedPathway === option.pathway ? 'solid' : 'outline'
                  }
                />
              </div>
              <span className="flex-1 font-medium text-foreground">
                {option.text}
              </span>
              {selectedPathway === option.pathway && (
                <Icon
                  name="CheckCircleIcon"
                  size={24}
                  className="text-primary flex-shrink-0"
                  variant="solid"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {selectedPathway && (
        <div className="bg-muted rounded-lg p-6 border-l-4 border-primary">
          <h4 className="font-heading font-semibold text-foreground mb-2">
            {pathwayDescriptions[selectedPathway].title}
          </h4>
          <p className="text-foreground mb-4">
            {pathwayDescriptions[selectedPathway].description}
          </p>
          <CTAButton
            variant="primary"
            size="md"
            href={pathwayDescriptions[selectedPathway].link}
            icon="ArrowRightIcon"
            iconPosition="right"
          >
            {pathwayDescriptions[selectedPathway].cta}
          </CTAButton>
        </div>
      )}
    </div>
  );
};

export default DecisionHelper;
