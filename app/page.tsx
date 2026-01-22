import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Breadcrumb from '@/components/common/Breadcrumb';
import HomeInteractive from './home/components/HomeInteractive';

export const metadata: Metadata = {
  title: 'StudentMindHub - Mental Health Support for African Students',
  description: 'Access trusted mental health resources, practical guidance, and professional support designed specifically for African students navigating academic life and personal growth.',
};

export default function LandingPage() {
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
