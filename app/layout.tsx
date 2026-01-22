import { ThemeProvider } from '@comp/providers/ThemeProvider';
import type { Metadata, Viewport } from 'next';

import Header from '@comp/common/Header';
import localFont from 'next/font/local';

import './globals.css';

const pallyFont = localFont({
  src: '../public/Pally-Variable.woff2',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Next.js with Tailwind CSS',
  description: 'A boilerplate project with Next.js and Tailwind CSS',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${pallyFont.className}`}>
        <ThemeProvider>
          <Header />
          {children}
          <footer className="bg-card border-t border-border mt-16">
            <div className="container mx-auto px-6 lg:px-8 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="caption text-muted-foreground text-center md:text-left">
                  &copy; {new Date().getFullYear()} TellmonifaEduHub. Empowering
                  African students with mental health support.
                </p>
                <div className="flex gap-6">
                  <a
                    href="https://tellmonifa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caption text-muted-foreground hover:text-primary transition-smooth focus-ring rounded-sm px-2 -mx-2"
                  >
                    Tellmonifa.com
                  </a>
                  <a
                    href="/resources-library"
                    className="caption text-muted-foreground hover:text-primary transition-smooth focus-ring rounded-sm px-2 -mx-2"
                  >
                    Resources
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>

        <script
          type="module"
          async
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fstudentmin6372back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.14"
        />
        <script
          type="module"
          defer
          src="https://static.rocket.new/rocket-shot.js?v=0.0.2"
        />
      </body>
    </html>
  );
}
