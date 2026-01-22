'use client';

import { usePathname } from 'next/navigation';

import Icon from '@comp/ui/AppIcon';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumb = () => {
  const pathname = usePathname();

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    if (pathname === '/topic-detail') {
      return [
        { label: 'Home', path: '/' },
        { label: 'Topics', path: '/topics-overview' },
        { label: 'Topic Detail', path: '/topic-detail' },
      ];
    }

    const pathSegments = pathname.split('/').filter(Boolean);

    if (pathSegments.length === 0 || pathname === '/') {
      return [];
    }

    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', path: '/' }];

    const routeLabels: Record<string, string> = {
      'topics-overview': 'Topics',
      'practical-guides': 'Guides',
      'support-pathways': 'Get Support',
      'resources-library': 'Resources',
    };

    pathSegments.forEach((segment, index) => {
      const path = '/' + pathSegments.slice(0, index + 1).join('/');
      const label =
        routeLabels[segment] ||
        segment
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

      breadcrumbs.push({ label, path });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  if (breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="py-4 px-6 lg:px-8"
    >
      <ol className="flex items-center gap-2 flex-wrap">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li
              key={crumb.path}
              className="flex items-center gap-2"
            >
              {index > 0 && (
                <Icon
                  name="ChevronRightIcon"
                  size={16}
                  className="text-muted-foreground shrink-0"
                />
              )}
              {isLast ? (
                <span
                  className="caption text-foreground font-medium"
                  aria-current="page"
                >
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.path}
                  className="caption text-muted-foreground hover:text-primary transition-smooth focus-ring rounded-sm px-1 -mx-1"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
