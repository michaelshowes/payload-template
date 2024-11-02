'use client';

import { cn } from '@/lib/utils';

type Args = {
  children: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  active?: boolean;
};

export default function Chip({
  children,
  leftIcon,
  rightIcon,
  className,
  active
}: Args) {
  return (
    <button
      className={cn(
        `relative flex items-center justify-center gap-x-2 py-1 px-2 bg-neutral-100 rounded-sm [&_svg]:size-4 min-h-[34px] transition-colors

        focus-visible:outline-none focus-visible:before:border-teal-500 

        hover:bg-transparent hover:text-black hover:before:border-neutral-200

        before:content-[""] before:inset-0 before:border-2 before:absolute before:rounded-sm`,

        active && 'bg-black text-white before:border-transparent',
        !active && 'before:border-neutral-200',
        className
      )}
    >
      {leftIcon && <span>{leftIcon}</span>}
      <span className={'leading-[17px] text-xs'}>{children}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
}
