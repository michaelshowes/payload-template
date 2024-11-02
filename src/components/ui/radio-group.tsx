'use client';

import * as React from 'react';

import { Label } from '@radix-ui/react-label';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { cn } from '@/lib/utils';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

type RadioGroupItemProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
> & {
  label: string;
};

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, label, ...props }, ref) => {
  return (
    <Label
      className={'flex items-center gap-2 cursor-pointer pointer-events-none'}
    >
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          `relative pointer-events-none peer group aspect-square h-4 w-4 rounded-full border-2 border-black text-black

          focus:outline-none focus-visible:ring-1 focus-visible:ring-ring

          disabled:cursor-not-allowed disabled:border-neutral-200`,

          className
        )}
        {...props}
      >
        <div
          className={
            'absolute content-[""] inset-0 bg-neutral-100 -z-10 opacity-0 scale-0 group-hover:opacity-100 transition-all group-hover:scale-[1.9] rounded-sm border-[.5px] border-neutral-200'
          }
        />
        <RadioGroupPrimitive.Indicator className='flex items-center justify-center pointer-events-auto'>
          <div
            className={'justify-center h-[8px] w-[8px] bg-black rounded-full'}
          />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <div
        className={
          'peer-disabled:text-neutral-200 peer-disabled:pointer-events-none pointer-events-auto'
        }
      >
        {label}
      </div>
    </Label>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
