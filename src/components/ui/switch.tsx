'use client';

import * as React from 'react';

import { Label } from '@radix-ui/react-label';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

type SwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
> & {
  label: string;
};

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, label, ...props }, ref) => (
  <Label
    className={'flex items-center gap-2 cursor-pointer pointer-events-none'}
  >
    <SwitchPrimitives.Root
      className={cn(
        `peer group inline-flex h-8 w-[52px] shrink-0 pointer-events-auto cursor-pointer items-center rounded-full border-transparent transition-colors 
        
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background

        disabled:cursor-not-allowed disabled:!bg-neutral-200
        
        data-[state=checked]:bg-black data-[state=unchecked]:bg-neutral-300`,

        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'pointer-events-none block h-[28px] w-[28px] relative left-[2px] rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[20px] data-[state=unchecked]:translate-x-0'
        )}
      />
    </SwitchPrimitives.Root>
    <div
      className={
        'peer-disabled:text-neutral-200 peer-disabled:pointer-events-none pointer-events-auto'
      }
    >
      {label}
    </div>
  </Label>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
