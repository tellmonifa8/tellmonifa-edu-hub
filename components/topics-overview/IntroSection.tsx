import Icon from '@comp/ui/AppIcon';

const IntroSection = () => {
  return (
    <div className="bg-card rounded-xl p-6 lg:p-8 mb-8 lg:mb-12">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 shrink-0">
          <Icon
            name="BookOpenIcon"
            size={24}
            className="text-primary"
            variant="solid"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-heading font-semibold text-2xl text-foreground mb-3">
            Understanding Your Mental Health Journey
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            As an African student, you face unique challenges balancing academic
            demands, cultural expectations, and personal growth. These topics
            are designed to help you understand common mental health experiences
            and provide practical guidance rooted in cultural sensitivity.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Each topic offers empathetic insights, actionable strategies, and
            pathways to professional support when needed. Remember, seeking help
            is a sign of strength, not weakness.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon
            name="CheckCircleIcon"
            size={18}
            className="text-success"
            variant="solid"
          />
          <span>Culturally sensitive content</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon
            name="CheckCircleIcon"
            size={18}
            className="text-success"
            variant="solid"
          />
          <span>Evidence-based strategies</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon
            name="CheckCircleIcon"
            size={18}
            className="text-success"
            variant="solid"
          />
          <span>Professional support pathways</span>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
