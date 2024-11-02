'use client';

import { ButtonHTMLAttributes, forwardRef, useState } from 'react';

import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  `relative inline-flex items-center justify-center gap-2 whitespace-nowrap leading-6 rounded-sm tracking-[1px] transition-colors 
  
  focus-visible:outline-none focus-visible:before:border-teal-500 
  
  disabled:pointer-events-none

  [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0

  before:content-[""] before:inset-0 before:border-2 before:absolute before:border-[transparent] before:rounded-sm`,
  {
    variants: {
      variant: {
        primary:
          'bg-secondary text-white [&_svg]:fill-white hover:bg-neutral-400 disabled:bg-neutral-200 disabled:text-black [&_svg]:disabled:fill-black',
        secondary:
          'border-2 border-black bg-background hover:border-neutral-400 hover:text-neutral-400 before:inset-[-2px] disabled:border-neutral-200 disabled:bg-neutral-100 [&_svg]:fill-black',
        tertiary:
          'bg-primary text-white hover:bg-blue-600 disabled:bg-neutral-200 disabled:text-black [&_svg]:fill-white [&_svg]:disabled:fill-black'
      },
      size: {
        default: 'h-[42px] p-2',
        sm: 'h-[34px] px-2 py-1'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children: string;
  icon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, children, icon, variant, size, asChild = false, ...props },
    ref
  ) => {
    const [isPressed, setIsPressed] = useState(false);
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        style={{
          backgroundColor: (() => {
            switch (variant) {
              case 'primary':
                return isPressed ? '#23263B' : undefined;
              case 'tertiary':
                return isPressed ? '#0E297E' : undefined;
              default:
                return undefined;
            }
          })(),
          borderColor:
            variant === 'secondary' && isPressed ? '#23263B' : undefined,
          color: variant === 'secondary' && isPressed ? '#23263B' : undefined
        }}
      >
        {icon && <span>{icon}</span>}
        <span>{children}</span>
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
