import Icon from '@comp/ui/AppIcon';

interface Strategy {
  title: string;
  description: string;
  icon: string;
}

interface StrategyListProps {
  strategies: Strategy[];
}

const StrategyList = ({ strategies }: StrategyListProps) => {
  return (
    <section className="bg-card rounded-xl p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Icon
          name="LightBulbIcon"
          size={28}
          className="text-accent"
          variant="solid"
        />
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
          Practical Coping Strategies
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {strategies.map((strategy, index) => (
          <div
            key={index}
            className="bg-muted/50 rounded-lg p-5 hover:bg-muted transition-smooth"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon
                  name={strategy.icon as any}
                  size={20}
                  className="text-primary"
                  variant="solid"
                />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground flex-1">
                {strategy.title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed ml-13">
              {strategy.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrategyList;
