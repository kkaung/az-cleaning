import { headingVariants } from '@/components/page-header';
import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';

interface AboutPropse extends HTMLAttributes<HTMLElement> {}
export default function About({ ...props }: AboutPropse) {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className={cn(
                props.className,
                'p-12 space-y-12 bg-secondary rounded-lg'
            )}
        >
            <h3 className={cn(headingVariants({}))}>About {siteConfig.name}</h3>
            <div className="space-y-6">
                <p>
                    We are RZCleaning, Australia’s leading online platform for
                    matching customers up with the best end of lease, bond
                    cleaners across major cities in Australia.
                </p>
                <p>
                    Founded in 2013, RZCleaning is committed to enhancing the
                    cleaning experience in Australia. We empower customers and
                    cleaning professionals with a streamlined platform, making
                    the entire process faster, smoother, and more
                    straightforward.
                </p>
            </div>
        </section>
    );
}
