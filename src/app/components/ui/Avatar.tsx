// src/app/components/ui/Avatar.tsx

import React from 'react';
import { cn } from '@/app/utils/cn';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt = '', size = 'md', fallback, ...props }, ref) => {
    const [imageError, setImageError] = React.useState(false);
    
    const sizeClasses = {
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
      xl: 'h-16 w-16',
    };
    
    const fontSizeClasses = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
      xl: 'text-lg',
    };
    
    const getFallbackInitials = () => {
      if (fallback) return fallback.substring(0, 2).toUpperCase();
      if (alt) {
        return alt
          .split(' ')
          .map(word => word[0])
          .slice(0, 2)
          .join('')
          .toUpperCase();
      }
      return 'JL'; // Just Like Me default
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          'relative rounded-full overflow-hidden flex items-center justify-center bg-primary-100 text-primary-800 font-medium',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className={fontSizeClasses[size]}>{getFallbackInitials()}</span>
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar };
