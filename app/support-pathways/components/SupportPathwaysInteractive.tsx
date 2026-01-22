'use client';

import { useEffect, useState } from 'react';
import PathwayCard from './PathwayCard';
import EmergencyBanner from './EmergencyBanner';
import DecisionHelper from './DecisionHelper';
import Icon from '@/components/ui/AppIcon';
import CTAButton from '@/components/common/CTAButton';

interface PathwayStep {
  id: number;
  title: string;
  description: string;
  action?: string;
  actionLink?: string;
  icon: string;
}

interface Pathway {
  id: string;
  title: string;
  description: string;
  steps: PathwayStep[];
  variant: 'crisis' | 'therapy' | 'peer' | 'self';
  icon: string;
}

const SupportPathwaysInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const pathways: Pathway[] = [
    {
      id: 'crisis',
      title: 'Crisis Support Pathway',
      description:
        'Immediate help for mental health emergencies and urgent situations requiring professional intervention.',
      variant: 'crisis',
      icon: 'ExclamationTriangleIcon',
      steps: [
        {
          id: 1,
          title: 'Recognize the Emergency',
          description:
            "If you're experiencing thoughts of self-harm, severe panic, or overwhelming distress that feels unmanageable, this is a mental health emergency. Your safety is the priority.",
          icon: 'ShieldCheckIcon',
        },
        {
          id: 2,
          title: 'Call Crisis Hotline',
          description:
            'Contact our 24/7 crisis support line at 0800-567-567. Trained counselors are available immediately to provide support, safety planning, and guidance.',
          action: 'Call Crisis Line Now',
          actionLink: 'tel:0800-567-567',
          icon: 'PhoneIcon',
        },
        {
          id: 3,
          title: 'Use Emergency Chat',
          description:
            'If you prefer text-based support, access our confidential crisis chat service. Connect with a counselor who can help you through this moment.',
          action: 'Start Crisis Chat',
          actionLink: 'https://www.tellmonifa.com/crisis-chat',
          icon: 'ChatBubbleLeftRightIcon',
        },
        {
          id: 4,
          title: 'Visit Emergency Services',
          description:
            'For life-threatening situations, go to your nearest hospital emergency department or call emergency services. Your life matters, and immediate medical help is available.',
          action: 'Find Nearest Hospital',
          actionLink: 'https://www.google.com/maps/search/hospital+emergency',
          icon: 'BuildingOffice2Icon',
        },
        {
          id: 5,
          title: 'Follow-Up Support',
          description:
            'After the immediate crisis, schedule a follow-up session with a therapist through Tellmonifa to develop ongoing support strategies and prevent future crises.',
          action: 'Book Follow-Up Session',
          actionLink: 'https://www.tellmonifa.com/book',
          icon: 'CalendarIcon',
        },
      ],
    },
    {
      id: 'therapy',
      title: 'Professional Therapy Pathway',
      description:
        'Connect with verified GPC-registered therapists for ongoing mental health support and professional guidance.',
      variant: 'therapy',
      icon: 'UserGroupIcon',
      steps: [
        {
          id: 1,
          title: 'Understand Your Needs',
          description:
            "Reflect on what you're experiencing: persistent anxiety, low mood, academic stress, relationship challenges, or life transitions. Professional therapy can help with all of these.",
          icon: 'LightBulbIcon',
        },
        {
          id: 2,
          title: 'Browse Therapist Profiles',
          description:
            'Visit Tellmonifa to view profiles of GPC-verified therapists. Read about their specializations, approaches, and experience working with students.',
          action: 'View Therapists',
          actionLink: 'https://www.tellmonifa.com/therapists',
          icon: 'MagnifyingGlassIcon',
        },
        {
          id: 3,
          title: 'Book Your First Session',
          description:
            'Choose a therapist and schedule your initial consultation. Sessions are confidential, and you can select times that fit your academic schedule.',
          action: 'Book Appointment',
          actionLink: 'https://www.tellmonifa.com/book',
          icon: 'CalendarDaysIcon',
        },
        {
          id: 4,
          title: 'Attend Your Session',
          description:
            'Join your session via secure video call or in-person (if available). Come prepared to discuss your concerns openly in a safe, judgment-free space.',
          icon: 'VideoCameraIcon',
        },
        {
          id: 5,
          title: 'Continue Your Journey',
          description:
            'Work with your therapist to develop coping strategies, process emotions, and build resilience. Regular sessions create lasting positive change.',
          action: 'Schedule Next Session',
          actionLink: 'https://www.tellmonifa.com/book',
          icon: 'ArrowPathIcon',
        },
      ],
    },
    {
      id: 'peer',
      title: 'Peer Support Pathway',
      description:
        'Connect with fellow students who understand your experiences through moderated support groups and peer networks.',
      variant: 'peer',
      icon: 'HeartIcon',
      steps: [
        {
          id: 1,
          title: 'Explore Support Groups',
          description:
            'Browse available peer support groups focused on topics like exam stress, loneliness, anxiety, or life transitions. Find a community that resonates with your experience.',
          icon: 'UsersIcon',
        },
        {
          id: 2,
          title: 'Join a Group Session',
          description:
            'Register for a moderated group session. These safe spaces allow you to share experiences, learn from others, and build supportive connections with peers.',
          action: 'Find Support Groups',
          actionLink: 'https://www.tellmonifa.com/peer-support',
          icon: 'UserPlusIcon',
        },
        {
          id: 3,
          title: 'Participate Actively',
          description:
            'Share your story if comfortable, listen to others, and engage in group discussions. Remember that all experiences are valid and respected in these spaces.',
          icon: 'ChatBubbleBottomCenterTextIcon',
        },
        {
          id: 4,
          title: 'Build Connections',
          description:
            'Form meaningful connections with peers who understand your challenges. These relationships can provide ongoing support beyond formal group sessions.',
          icon: 'HandRaisedIcon',
        },
        {
          id: 5,
          title: 'Consider Professional Support',
          description:
            'While peer support is valuable, consider complementing it with professional therapy for deeper work on mental health challenges.',
          action: 'Book a Therapist',
          actionLink: 'https://www.tellmonifa.com/book',
          icon: 'AcademicCapIcon',
        },
      ],
    },
    {
      id: 'self',
      title: 'Self-Help Resources Pathway',
      description:
        'Access practical tools, guides, and strategies to support your mental wellness independently.',
      variant: 'self',
      icon: 'BookOpenIcon',
      steps: [
        {
          id: 1,
          title: 'Explore Mental Health Topics',
          description:
            "Learn about common student mental health challenges like anxiety, stress, and loneliness. Understanding what you're experiencing is the first step toward managing it.",
          action: 'Browse Topics',
          actionLink: '/topics-overview',
          icon: 'BookmarkIcon',
        },
        {
          id: 2,
          title: 'Try Practical Guides',
          description:
            'Access step-by-step guides for managing stress, improving sleep, building resilience, and developing healthy coping strategies you can use daily.',
          action: 'View Practical Guides',
          actionLink: '/practical-guides',
          icon: 'ClipboardDocumentListIcon',
        },
        {
          id: 3,
          title: 'Download Resources',
          description:
            'Get downloadable worksheets, mood trackers, breathing exercises, and other tools to support your mental wellness journey.',
          action: 'Access Resources Library',
          actionLink: '/resources-library',
          icon: 'ArrowDownTrayIcon',
        },
        {
          id: 4,
          title: 'Practice Regularly',
          description:
            "Implement the strategies you've learned consistently. Small daily practices create significant improvements in mental wellness over time.",
          icon: 'CheckBadgeIcon',
        },
        {
          id: 5,
          title: 'Know When to Seek Help',
          description:
            "Self-help is valuable, but if you're struggling to manage on your own, professional support can provide additional guidance and personalized strategies.",
          action: 'Talk to a Therapist',
          actionLink: 'https://www.tellmonifa.com/book',
          icon: 'UserCircleIcon',
        },
      ],
    },
  ];

  if (!isHydrated) {
    return (
      <div className="space-y-8">
        <div className="bg-muted rounded-lg p-6 lg:p-8 animate-pulse">
          <div className="h-8 bg-border rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-border rounded w-full mb-2"></div>
          <div className="h-4 bg-border rounded w-5/6"></div>
        </div>
        <div className="grid gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-card rounded-lg border border-border p-6 lg:p-8 animate-pulse"
            >
              <div className="h-6 bg-border rounded w-1/2 mb-4"></div>
              <div className="h-4 bg-border rounded w-full mb-2"></div>
              <div className="h-4 bg-border rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <EmergencyBanner />

      <DecisionHelper />

      <div
        className="grid gap-8"
        id="pathways-section"
      >
        {pathways.map((pathway) => (
          <div
            key={pathway.id}
            id={`${pathway.id}-pathway`}
          >
            <PathwayCard
              title={pathway.title}
              description={pathway.description}
              steps={pathway.steps}
              variant={pathway.variant}
              icon={pathway.icon}
            />
          </div>
        ))}
      </div>

      <div className="bg-primary/5 border-2 border-primary rounded-lg p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center">
            <Icon
              name="InformationCircleIcon"
              size={32}
              className="text-primary-foreground"
              variant="solid"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-xl lg:text-2xl font-heading font-semibold text-foreground mb-2">
              Still Have Questions?
            </h3>
            <p className="text-foreground mb-4">
              Our comprehensive FAQ section answers common questions about
              accessing mental health support, what to expect from therapy, and
              how to navigate different support options.
            </p>
            <CTAButton
              variant="primary"
              size="md"
              href="/practical-guides"
              icon="QuestionMarkCircleIcon"
              iconPosition="left"
            >
              View Help & FAQs
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPathwaysInteractive;
