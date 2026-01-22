/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: {
          DEFAULT: 'var(--color-primary)' /* purple #542C85 */,
          foreground: 'var(--color-primary-foreground)' /* white */,
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)' /* teal #28aec0 */,
          foreground: 'var(--color-secondary-foreground)' /* white */,
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)' /* muted red */,
          foreground: 'var(--color-destructive-foreground)' /* white */,
        },
        muted: {
          DEFAULT: 'var(--color-muted)' /* subtle purple-tinted */,
          foreground: 'var(--color-muted-foreground)' /* gray */,
        },
        accent: {
          DEFAULT: 'var(--color-accent)' /* teal #28aec0 */,
          foreground: 'var(--color-accent-foreground)' /* black */,
        },
        popover: {
          DEFAULT: 'var(--color-popover)' /* white */,
          foreground: 'var(--color-popover-foreground)' /* black */,
        },
        card: {
          DEFAULT: 'var(--color-card)' /* subtle purple-tinted */,
          foreground: 'var(--color-card-foreground)' /* black */,
        },
        success: {
          DEFAULT: 'var(--color-success)' /* teal #28aec0 */,
          foreground: 'var(--color-success-foreground)' /* white */,
        },
        warning: {
          DEFAULT: 'var(--color-warning)' /* amber */,
          foreground: 'var(--color-warning-foreground)' /* black */,
        },
        error: {
          DEFAULT: 'var(--color-error)' /* muted red */,
          foreground: 'var(--color-error-foreground)' /* white */,
        },
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      fontFamily: {
        heading: ['Crimson Text', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
        caption: ['Karla', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
      },
      maxWidth: {
        prose: '70ch',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        smooth: '250ms',
      },
      ringWidth: {
        3: '3px',
      },
      ringOffsetWidth: {
        3: '3px',
      },
      scale: {
        97: '0.97',
      },
      zIndex: {
        1: '1',
        50: '50',
        100: '100',
        150: '150',
        200: '200',
        300: '300',
        9999: '9999',
      },
    },
  },
  plugins: [],
};
