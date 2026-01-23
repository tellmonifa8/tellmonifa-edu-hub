'use client';

import ContentSection from './ContentSection';
import ExperienceCard from './ExperienceCard';
import QuickActions from './QuickActions';
import RelatedTopics from './RelatedTopics';
import SeekHelpSection from './SeekHelpSection';
import StrategyList from './StrategyList';
import TopicHeader from './TopicHeader';

interface Strategy {
  title: string;
  description: string;
  icon: string;
}

interface Experience {
  title: string;
  description: string;
}

interface SignItem {
  text: string;
  icon: string;
}

interface RelatedTopic {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
}

interface TopicData {
  header: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    category: string;
    readTime: string;
  };
  understanding: {
    title: string;
    icon: string;
    content: string[];
  };
  africanContext: {
    title: string;
    icon: string;
    content: string[];
  };
  strategies: Strategy[];
  experiences: Experience[];
  seekHelp: {
    signs: SignItem[];
  };
  relatedTopics: RelatedTopic[];
}

const TopicDetailInteractive = () => {
  const topicData: TopicData = {
    header: {
      title: 'Managing Academic Stress',
      description:
        'Understanding and overcoming the pressures of academic life while maintaining your mental wellbeing. Learn practical strategies tailored for African students navigating educational challenges.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
      imageAlt:
        'Young Black African student studying at desk with open textbooks and laptop in bright library setting',
      category: 'Academic Wellness',
      readTime: '8 min read',
    },
    understanding: {
      title: 'Understanding Academic Stress',
      icon: 'AcademicCapIcon',
      content: [
        'Academic stress is a common experience among students, characterized by feelings of pressure, anxiety, and overwhelm related to educational demands. It can stem from various sources including exam preparation, assignment deadlines, performance expectations, and balancing multiple responsibilities.',
        'For African students, academic stress may be compounded by additional factors such as family expectations, limited resources, large class sizes, and the pressure to succeed in competitive educational environments. Understanding that these feelings are normal and shared by many students is the first step toward managing them effectively.',
        "It's important to recognize that experiencing academic stress doesn't mean you're failing or inadequate. Rather, it's a signal that you need to develop healthy coping strategies and seek support when needed.",
      ],
    },
    africanContext: {
      title: 'Academic Stress in African Context',
      icon: 'GlobeAltIcon',
      content: [
        'In many African educational systems, students face unique challenges including overcrowded classrooms, limited access to learning materials, and high-stakes examination systems. The cultural emphasis on academic achievement as a pathway to family prosperity can create additional pressure.',
        'Many African students are first-generation university attendees, carrying the hopes and expectations of their entire families and communities. This can create a sense of responsibility that intensifies academic stress, making it difficult to ask for help or admit struggles.',
        'Understanding these contextual factors helps normalize your experience and reminds you that seeking support is not a sign of weakness, but a practical step toward achieving your educational goals while maintaining your mental health.',
      ],
    },
    strategies: [
      {
        title: 'Time Management',
        description:
          'Create a realistic study schedule that breaks large tasks into manageable chunks. Use techniques like the Pomodoro method (25 minutes focused work, 5 minutes break) to maintain concentration without burnout.',
        icon: 'ClockIcon',
      },
      {
        title: 'Study Groups',
        description:
          'Form or join study groups with classmates. Collaborative learning reduces isolation, provides different perspectives, and makes studying more engaging and less stressful.',
        icon: 'UserGroupIcon',
      },
      {
        title: 'Physical Activity',
        description:
          'Incorporate regular physical activity into your routine. Even 20 minutes of walking, dancing, or stretching can significantly reduce stress hormones and improve focus.',
        icon: 'HeartIcon',
      },
      {
        title: 'Healthy Sleep',
        description:
          'Prioritize 7-8 hours of sleep nightly. Adequate rest improves memory consolidation, concentration, and emotional regulation—all crucial for academic success.',
        icon: 'MoonIcon',
      },
      {
        title: 'Mindful Breaks',
        description:
          'Take regular breaks during study sessions. Practice deep breathing, listen to music, or step outside. These moments of rest enhance productivity and reduce stress accumulation.',
        icon: 'SparklesIcon',
      },
      {
        title: 'Seek Support',
        description:
          "Don't hesitate to reach out to lecturers, academic advisors, or counselors when struggling. Asking for help demonstrates maturity and commitment to your success.",
        icon: 'ChatBubbleLeftRightIcon',
      },
    ],
    experiences: [
      {
        title: 'Feeling overwhelmed by multiple deadlines',
        description:
          "It's common to feel paralyzed when facing several assignments or exams simultaneously. This often leads to procrastination, which increases stress. Breaking tasks into smaller steps and prioritizing based on urgency and importance can help regain control.",
      },
      {
        title: 'Comparing yourself to other students',
        description:
          'Seeing classmates who seem to manage everything effortlessly can trigger feelings of inadequacy. Remember that everyone has different strengths, resources, and challenges. Focus on your own progress rather than comparing your journey to others.',
      },
      {
        title: 'Fear of disappointing family',
        description:
          "Many students carry the weight of family expectations and fear letting loved ones down. It's important to communicate openly with family about challenges while remembering that your worth isn't determined solely by academic performance.",
      },
      {
        title: 'Physical symptoms of stress',
        description:
          "Academic stress often manifests physically through headaches, stomach problems, fatigue, or difficulty sleeping. These symptoms are your body's way of signaling that stress levels need attention through self-care and possibly professional support.",
      },
      {
        title: 'Loss of motivation and interest',
        description:
          'Prolonged stress can lead to feeling disconnected from your studies and losing sight of why you started. Reconnecting with your goals, taking breaks, and seeking support can help reignite your motivation and passion for learning.',
      },
    ],
    seekHelp: {
      signs: [
        {
          text: 'Persistent feelings of hopelessness or inability to cope',
          icon: 'ExclamationCircleIcon',
        },
        {
          text: 'Significant changes in sleep patterns or appetite',
          icon: 'MoonIcon',
        },
        {
          text: 'Withdrawal from friends, family, and activities you once enjoyed',
          icon: 'UserMinusIcon',
        },
        {
          text: 'Difficulty concentrating or making decisions',
          icon: 'BoltIcon',
        },
        {
          text: 'Physical symptoms that interfere with daily functioning',
          icon: 'HeartIcon',
        },
        {
          text: 'Thoughts of self-harm or suicide',
          icon: 'ShieldExclamationIcon',
        },
      ],
    },
    relatedTopics: [
      {
        title: 'Managing Exam Anxiety',
        description:
          'Learn techniques to stay calm and focused during high-pressure examination periods.',
        image:
          'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
        imageAlt:
          'Young Black African student writing exam in classroom with focused expression',
        icon: 'DocumentTextIcon',
      },
      {
        title: 'Dealing with Loneliness',
        description:
          'Strategies for building connections and overcoming feelings of isolation at university.',
        image:
          'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800',
        imageAlt:
          'Young Black African woman sitting alone on campus bench looking thoughtful, dealing with loneliness',
        icon: 'UserIcon',
      },
      {
        title: 'Life Transitions',
        description:
          'Navigate major changes like starting university or moving to a new city with confidence.',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
        imageAlt:
          'Young Black African students walking together on university campus with backpacks, navigating transitions',
        icon: 'ArrowPathIcon',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <TopicHeader
              title={topicData.header.title}
              description={topicData.header.description}
              image={topicData.header.image}
              imageAlt={topicData.header.imageAlt}
              category={topicData.header.category}
              readTime={topicData.header.readTime}
            />

            <ContentSection
              title={topicData.understanding.title}
              icon={topicData.understanding.icon}
              content={topicData.understanding.content}
            />

            <ContentSection
              title={topicData.africanContext.title}
              icon={topicData.africanContext.icon}
              content={topicData.africanContext.content}
              variant="highlight"
            />

            <StrategyList strategies={topicData.strategies} />

            <ExperienceCard experiences={topicData.experiences} />

            <SeekHelpSection signs={topicData.seekHelp.signs} />

            <RelatedTopics topics={topicData.relatedTopics} />
          </div>

          <div className="lg:col-span-4">
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicDetailInteractive;
