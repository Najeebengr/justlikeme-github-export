// src/app/components/ui/Badge.tsx

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/utils/cn';

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary-100 text-primary-800 hover:bg-primary-200",
        secondary: "bg-secondary-100 text-secondary-800 hover:bg-secondary-200",
        accent: "bg-accent-100 text-accent-800 hover:bg-accent-200",
        success: "bg-success-100 text-success-800 hover:bg-success-200",
        warning: "bg-warning-100 text-warning-800 hover:bg-warning-200",
        error: "bg-error-100 text-error-800 hover:bg-error-200",
        outline: "text-neutral-900 border border-neutral-300 hover:bg-neutral-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
