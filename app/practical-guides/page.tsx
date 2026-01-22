import type { Metadata } from 'next';

import Breadcrumb from '@comp/common/Breadcrumb';
import Header from '@comp/common/Header';
import PracticalGuidesInteractive from '@comp/practical-guides/PracticalGuidesInteractive';

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
