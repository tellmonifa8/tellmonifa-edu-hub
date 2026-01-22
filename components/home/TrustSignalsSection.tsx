import Icon from '@comp/ui/AppIcon';

interface TrustSignal {
  icon: string;
  title: string;
  description: string;
}

const TrustSignalsSection = () => {
  const trustSignals: TrustSignal[] = [
    {
      icon: 'ShieldCheckIcon',
      title: 'Verified Therapists',
      description:
        'All mental health professionals are GPC-verified and culturally competent in supporting African students.',
    },
    {
      icon: 'AcademicCapIcon',
      title: 'Evidence-Based Content',
      description:
        'Resources developed by mental health experts with deep understanding of student experiences.',
    },
    {
      icon: 'UserGroupIcon',
      title: 'Student-Centered Approach',
      description:
        'Designed specifically for African students navigating academic pressures and life transitions.',
    },
    {
      icon: 'LockClosedIcon',
      title: 'Confidential & Safe',
      description:
        'Your privacy is protected. Access resources and support in a secure, judgment-free environment.',
    },
  ];

  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Why Trust StudentMindHub?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re committed to providing safe, culturally sensitive, and
            professional mental health support for African students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustSignals.map((signal, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 transition-smooth text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={signal.icon as any}
                  size={28}
                  className="text-primary"
                  variant="solid"
                />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                {signal.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignalsSection;
