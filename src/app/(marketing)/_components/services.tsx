import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';

interface ServicesProps extends HTMLAttributes<HTMLElement> {}

export default function Services({ ...props }: ServicesProps) {
    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className={cn(props.className)}
            {...props}
        >
            <h2 className=''></h2>
        </section>
    );
}
