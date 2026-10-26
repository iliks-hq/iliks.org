import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import type React from 'react';

export type Props = React.ComponentProps<'a'> & VariantProps<typeof buttonVariants>;

export function ButtonLink({ variant = 'default', size = 'default', className, ...props }: Props) {
  return (
    <a
      className={cn(
        buttonVariants({ variant, size }),
        'group-hover:cursor-pointer hover:cursor-pointer',
        className
      )}
      {...props}
    >
      {props.children}
    </a>
  );
}
