import type { Metadata } from 'next';

import HomeInteractive from '@comp/home/HomeInteractive';

export const metadata: Metadata = {
  title: 'StudentMindHub - Mental Health Support for African Students',
  description:
    'Access trusted mental health resources, practical guidance, and professional support designed specifically for African students navigating academic life and personal growth.',
};

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-background pt-20">
        <HomeInteractive />
      </main>
    </>
  );
}
