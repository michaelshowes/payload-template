import * as React from 'react';

import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex text-white items-center rounded-sm text-xs focus:outline-none uppercase font-medium',
  {
    variants: {
      variant: {
        orange: 'bg-orange',
        green: 'bg-green-500',
        blue: 'bg-cyan'
      },
      size: {
        default: 'font-xs px-3 py-[3px] leading-[17px]',
        sm: 'font-[9px] px-2 py-[2px] leading-[12px]'
      }
    },
    defaultVariants: {
      variant: 'orange',
      size: 'default'
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
