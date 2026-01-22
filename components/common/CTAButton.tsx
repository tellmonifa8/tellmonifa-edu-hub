'use client';

import Icon from '@comp/ui/AppIcon';
import Link from 'next/link';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  icon?: string;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

const CTAButton = ({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  iconPosition = 'left',
  children,
  className = '',
  disabled = false,
  fullWidth = false,
}: CTAButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-medium rounded-md transition-smooth hover-lift press-effect focus-ring disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0';

  const variantStyles = {
    primary: 'bg-primary text-primary-foreground',
    secondary:
      'bg-secondary text-secondary-foreground',
    accent: 'bg-accent text-accent-foreground',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm min-h-[36px]',
    md: 'px-7 py-3.5 text-base min-h-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[56px]',
  };

  const iconSizes = {
    sm: 18,
    md: 20,
    lg: 24,
  };

  const combinedStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <Icon
          name={icon as any}
          size={iconSizes[size]}
          variant="solid"
        />
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <Icon
          name={icon as any}
          size={iconSizes[size]}
          variant="solid"
        />
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={combinedStyles}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
      type="button"
    >
      {content}
    </button>
  );
};

export default CTAButton;
