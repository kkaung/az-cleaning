import { Shell } from '@/components/shell';
import { type Metadata } from 'next';
import React from 'react';
import WhyUs from '@/components/why-us';

import Hero from './_components/hero';
import HowWork from './_components/how-work';
import Features from '@/app/(marketing)/_components/features';
import FAQs from './_components/faqs';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: `#1 House Cleaning Service in Geelong - Cleaner Geelong`,
    description:
        'Expert cleaning services in Geelong. We provides top-rated house and office cleaning. Insured, reliable, and affordable. Book online today!',
};

export default function Page() {
    return (
        <Shell>
            <Hero />
            <HowWork />
            <Features location="Geelong" />
            <WhyUs />
            <FAQs />
        </Shell>
    );
}
