import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import Breadcrumb from '@/components/common/Breadcrumb';
import ResourcesLibraryInteractive from './components/ResourcesLibraryInteractive';

export const metadata: Metadata = {
  title: 'Resources Library - StudentMindHub',
  description:
    'Access comprehensive downloadable mental health resources, worksheets, and guides designed specifically for African students to support their mental wellness journey.',
};

export default function ResourcesLibraryPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <ResourcesLibraryInteractive />
    </>
  );
}
