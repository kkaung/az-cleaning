import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import React, { type HTMLAttributes } from 'react';
import { headingVariants } from './page-header';

interface WhyUsProps extends HTMLAttributes<HTMLElement> {}

export default function WhyUs({ ...props }: WhyUsProps) {
    return (
        <section
            id="how-works"
            aria-labelledby="how-works-heading"
            className={cn(props.className, 'space-y-12 py-12')}
            {...props}
        >
            <h2 className={headingVariants({})}>Why You Should Choose Us?</h2>
            <p>
                At {siteConfig.name}, we&apos;re dedicated to providing you with
                cleaning services that exceed your expectations. Our experienced
                and professional team uses eco-friendly cleaning products and
                the latest techniques to ensure a spotless finish. We&apos;re
                insured, reliable, and committed to your satisfaction. Ready to
                experience the joy of a cleaner home?
            </p>
        </section>
    );
}
