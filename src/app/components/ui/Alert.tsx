// src/app/components/ui/Alert.tsx

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/utils/cn';

const alertVariants = cva(
  "relative w-full rounded-lg border p-4",
  {
    variants: {
      variant: {
        default: "bg-white text-neutral-900 border-neutral-200",
        primary: "bg-primary-50 text-primary-900 border-primary-200",
        secondary: "bg-secondary-50 text-secondary-900 border-secondary-200",
        accent: "bg-accent-50 text-accent-900 border-accent-200",
        success: "bg-success-50 text-success-900 border-success-200",
        warning: "bg-warning-50 text-warning-900 border-warning-200",
        error: "bg-error-50 text-error-900 border-error-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
}

function Alert({ className, variant, title, children, ...props }: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {title && (
        <h5 className="mb-1 font-medium leading-none tracking-tight">
          {title}
        </h5>
      )}
      <div className={cn("text-sm", title && "mt-1")}>
        {children}
      </div>
    </div>
  );
}

export { Alert, alertVariants };
