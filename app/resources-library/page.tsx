import type { Metadata } from 'next';

import Breadcrumb from '@comp/common/Breadcrumb';
import Header from '@comp/common/Header';
import ResourcesLibraryInteractive from '@comp/resources-library/ResourcesLibraryInteractive';

export const metadata: Metadata = {
  title: 'Resources Library - TellmonifaEduHub',
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
