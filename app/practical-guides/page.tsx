import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Breadcrumb from '@/components/common/Breadcrumb';
import PracticalGuidesInteractive from './components/PracticalGuidesInteractive';

export const metadata: Metadata = {
  title: 'Practical Guides - StudentMindHub',
  description:
    'Access actionable mental health tools and techniques designed for students. Learn breathing exercises, stress management, study skills, and self-care practices to support your wellbeing.',
};

export default function PracticalGuidesPage() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <Breadcrumb />
        <PracticalGuidesInteractive />
      </div>
    </>
  );
}
