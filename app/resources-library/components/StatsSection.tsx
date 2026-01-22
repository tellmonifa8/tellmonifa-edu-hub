import Icon from '@/components/ui/AppIcon';

interface StatsSectionProps {
  totalResources: number;
  totalDownloads: number;
}

const StatsSection = ({
  totalResources,
  totalDownloads,
}: StatsSectionProps) => {
  const stats = [
    {
      icon: 'DocumentTextIcon',
      label: 'Total Resources',
      value: totalResources.toString(),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: 'ArrowDownTrayIcon',
      label: 'Total Downloads',
      value: totalDownloads.toLocaleString(),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: 'UserGroupIcon',
      label: 'Students Helped',
      value: '15,000+',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-lg p-6 shadow-sm transition-smooth hover-lift"
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
            >
              <Icon
                name={stat.icon as any}
                size={24}
                className={stat.color}
                variant="solid"
              />
            </div>
            <div>
              <p className="caption text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-2xl font-heading font-semibold text-foreground">
                {stat.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
