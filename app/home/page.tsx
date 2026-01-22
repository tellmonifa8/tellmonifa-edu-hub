import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Breadcrumb from '@/components/common/Breadcrumb';
import HomeInteractive from './components/HomeInteractive';

export const metadata: Metadata = {
  title: 'Home - StudentMindHub',
  description:
    'Access trusted mental health resources, practical guidance, and professional support designed specifically for African students navigating academic life and personal growth.',
};

export default function HomePage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen bg-background pt-20">
        <HomeInteractive />
      </main>
    </>
  );
}
