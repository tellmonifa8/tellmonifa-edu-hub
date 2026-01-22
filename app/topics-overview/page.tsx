import type { Metadata } from 'next';

import Breadcrumb from '@comp/common/Breadcrumb';
import TopicsInteractive from '@comp/topics-overview/TopicsInteractive';

export const metadata: Metadata = {
  title: 'Mental Health Topics - TellmonifaEduHub',
  description:
    'Explore comprehensive mental health topics designed for African students, covering academic stress, anxiety, exam pressure, loneliness, and life transitions with culturally sensitive guidance.',
};

export default function TopicsOverviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        <Breadcrumb />

        <section className="py-8 lg:py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mb-8">
              <h1 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4">
                Mental Health Topics
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore evidence-based guidance on common mental health
                challenges faced by African students. Each topic provides
                empathetic insights and practical strategies.
              </p>
            </div>
          </div>

          <TopicsInteractive />
        </section>
      </main>
    </div>
  );
}
