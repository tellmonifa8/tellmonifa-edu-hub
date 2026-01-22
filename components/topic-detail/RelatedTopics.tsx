import Icon from '@comp/ui/AppIcon';
import AppImage from '@comp/ui/AppImage';
import Link from 'next/link';

interface RelatedTopic {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
}

interface RelatedTopicsProps {
  topics: RelatedTopic[];
}

const RelatedTopics = ({ topics }: RelatedTopicsProps) => {
  return (
    <section className="bg-muted/30 rounded-xl p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-6">
        <Icon
          name="SparklesIcon"
          size={28}
          className="text-accent"
          variant="solid"
        />
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
          Related Topics
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, index) => (
          <Link
            key={index}
            href="/topic-detail"
            className="group bg-card rounded-lg overflow-hidden  transition-smooth focus-ring"
          >
            <div className="relative h-40 overflow-hidden">
              <AppImage
                src={topic.image}
                alt={topic.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              />
              <div className="absolute top-3 right-3 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon
                  name={topic.icon as any}
                  size={20}
                  className="text-primary-foreground"
                  variant="solid"
                />
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                {topic.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {topic.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedTopics;
