'use client';

import * as React from 'react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Label } from '@radix-ui/react-label';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

type CheckboxProps = {
  label?: string;
};

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps
>(({ className, label, ...props }, ref) => (
  <Label
    className={'flex items-center gap-2 cursor-pointer pointer-events-none'}
  >
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        'relative pointer-events-auto group peer h-4 w-4 shrink-0 rounded-sm border-2 border-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-500 disabled:cursor-not-allowed disabled:data-[state=checked]:bg-neutral-200  disabled:pointer-events-none disabled:border-neutral-200 data-[state=checked]:bg-black data-[state=checked]:text-primary-foreground',
        className
      )}
      {...props}
    >
      <div
        className={
          'absolute content-[""] inset-0 bg-neutral-100 -z-10 opacity-0 scale-0 group-hover:opacity-100 transition-all group-hover:scale-[1.9] rounded-sm'
        }
      />
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <CheckIcon className='h-4 w-4 relative stroke-[3px] -top-[2px]' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    <div
      className={
        'peer-disabled:text-neutral-200 peer-disabled:pointer-events-none pointer-events-auto'
      }
    >
      {label}
    </div>
  </Label>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
