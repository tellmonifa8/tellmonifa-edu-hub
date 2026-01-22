import type { Metadata } from 'next';

import Breadcrumb from '@comp/common/Breadcrumb';
import Header from '@comp/common/Header';
import TopicDetailInteractive from '@comp/topic-detail/TopicDetailInteractive';

export const metadata: Metadata = {
  title: 'Managing Academic Stress - StudentMindHub',
  description:
    'Comprehensive guide to understanding and managing academic stress for African students. Learn practical coping strategies, recognize warning signs, and discover when to seek professional support.',
};

export default function TopicDetailPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Breadcrumb />
        <TopicDetailInteractive />
      </main>
    </>
  );
}
