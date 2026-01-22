import TopicCard from './TopicCard';

interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  preview: string;
  image: string;
  alt: string;
  icon: string;
}

interface TopicsGridProps {
  topics: Topic[];
}

const TopicsGrid = ({ topics }: TopicsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
        />
      ))}
    </div>
  );
};

export default TopicsGrid;
