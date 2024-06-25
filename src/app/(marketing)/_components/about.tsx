import { headingVariants } from '@/components/page-header';
import { siteConfig } from '@/configs/site';
import React, { HTMLAttributes } from 'react';

interface AboutProps extends HTMLAttributes<HTMLElement> {
    location: string;
}

export default function About({ location, ...props }: AboutProps) {
    return (
        <section className="py-12 space-y-12">
            <h2 className={headingVariants({})}>
                Not Your Average House Cleaning Company in {location}
            </h2>
            <p>{siteConfig.description}</p>
        </section>
    );
}
