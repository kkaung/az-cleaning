import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface DotProps extends HTMLAttributes<HTMLElement> {}

export default function Dot({ className }: DotProps) {
    return (
        <div
            className={cn(
                'h-[3px] w-[3px] rounded-full bg-muted-foreground',
                className
            )}
        />
    );
}
