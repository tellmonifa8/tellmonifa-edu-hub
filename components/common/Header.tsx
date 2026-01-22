'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

interface NavigationItem {
  label: string;
  path: string;
  icon: string;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems: NavigationItem[] = [
    { label: 'Home', path: '/home', icon: 'HomeIcon' },
    { label: 'Topics', path: '/topics-overview', icon: 'BookOpenIcon' },
    { label: 'Guides', path: '/practical-guides', icon: 'LightBulbIcon' },
    { label: 'Get Support', path: '/support-pathways', icon: 'HeartIcon' },
    { label: 'Resources', path: '/resources-library', icon: 'FolderIcon' },
  ];

  const isActivePath = (path: string) => {
    if (path === '/home') {
      return pathname === '/' || pathname === '/home';
    }
    return pathname === path || pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-100 bg-card shadow-md transition-smooth">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20 px-6 lg:px-8">
            <Link
              href="/home"
              className="flex items-center gap-3 hover-lift transition-smooth focus-ring"
              aria-label="StudentMindHub Home"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary">
                <Icon
                  name="AcademicCapIcon"
                  size={28}
                  className="text-primary-foreground"
                  variant="solid"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-semibold text-foreground leading-tight">
                  StudentMindHub
                </span>
                <span className="text-xs caption text-muted-foreground">
                  Mental Wellness Support
                </span>
              </div>
            </Link>

            <nav
              className="hidden lg:flex items-center gap-2"
              aria-label="Primary navigation"
            >
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-md transition-smooth
                    hover-lift press-effect focus-ring
                    ${
                      isActivePath(item.path)
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-foreground hover:bg-muted'
                    }
                  `}
                  aria-current={isActivePath(item.path) ? 'page' : undefined}
                >
                  <Icon
                    name={item.icon as any}
                    size={20}
                    variant={isActivePath(item.path) ? 'solid' : 'outline'}
                  />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-md hover:bg-muted transition-smooth press-effect focus-ring"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={24}
                className="text-foreground"
              />
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-200 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div
            className="fixed inset-0 bg-background"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          <nav
            id="mobile-menu"
            className="fixed top-20 left-0 right-0 bottom-0 bg-card overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col gap-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={closeMobileMenu}
                    className={`
                      flex items-center gap-4 px-6 py-4 rounded-md transition-smooth
                      press-effect focus-ring min-h-[44px]
                      ${
                        isActivePath(item.path)
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'text-foreground hover:bg-muted'
                      }
                    `}
                    aria-current={isActivePath(item.path) ? 'page' : undefined}
                  >
                    <Icon
                      name={item.icon as any}
                      size={24}
                      variant={isActivePath(item.path) ? 'solid' : 'outline'}
                    />
                    <span className="text-lg font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="bg-muted rounded-lg p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Icon
                      name="InformationCircleIcon"
                      size={24}
                      className="text-primary flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        Need Immediate Help?
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Access crisis support and professional resources
                        anytime.
                      </p>
                      <Link
                        href="/support-pathways"
                        onClick={closeMobileMenu}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-smooth hover-lift press-effect focus-ring"
                      >
                        <Icon
                          name="HeartIcon"
                          size={20}
                          variant="solid"
                        />
                        Get Support Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
