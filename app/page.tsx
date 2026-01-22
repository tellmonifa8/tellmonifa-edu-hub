import type { Metadata } from 'next';

import Breadcrumb from '@comp/common/Breadcrumb';
import Header from '@comp/common/Header';
import HomeInteractive from '@comp/home/HomeInteractive';

export const metadata: Metadata = {
  title: 'StudentMindHub - Mental Health Support for African Students',
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
