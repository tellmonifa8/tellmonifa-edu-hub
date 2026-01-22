import type { Metadata } from 'next';

import Breadcrumb from '@/components/common/Breadcrumb';
import Header from '@/components/common/Header';
import TopicsInteractive from './components/TopicsInteractive';

export const metadata: Metadata = {
  title: 'Mental Health Topics - StudentMindHub',
  description:
    'Explore comprehensive mental health topics designed for African students, covering academic stress, anxiety, exam pressure, loneliness, and life transitions with culturally sensitive guidance.',
};

export default function TopicsOverviewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

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

      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="caption text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} StudentMindHub. Empowering
              African students with mental health support.
            </p>
            <div className="flex gap-6">
              <a
                href="https://tellmonifa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="caption text-muted-foreground hover:text-primary transition-smooth focus-ring rounded-sm px-2 -mx-2"
              >
                Tellmonifa.com
              </a>
              <a
                href="/resources-library"
                className="caption text-muted-foreground hover:text-primary transition-smooth focus-ring rounded-sm px-2 -mx-2"
              >
                Resources
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
