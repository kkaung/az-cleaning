import { headingVariants } from '@/components/page-header';
import { locations } from '@/configs/location';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';

interface SuburbsProps extends HTMLAttributes<HTMLElement> {}

export default function Suburbs({ ...props }: SuburbsProps) {
    const location = locations.find(l => l.title === 'Sydney')!;

    return (
        <section
            id="suburbs"
            aria-labelledby="suburbs-heading"
            className={cn(props.className, 'py-12 space-y-12')}
        >
            <h2 className={cn(headingVariants({}), 'md:text-center')}>
                Wherever We Serve In Sydney
            </h2>
            <ul className="flex items-center flex-wrap gap-2">
                {location.items.map(i => (
                    <li
                        key={i.title}
                        className="border p-1 px-2 rounded-full text-sm bg-secondary"
                    >
                        {i.title}
                    </li>
                ))}
            </ul>
        </section>
    );
}
