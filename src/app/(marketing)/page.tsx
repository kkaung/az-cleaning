import { Shell } from '@/components/shell';
import { type Metadata } from 'next';
import React from 'react';

import Hero from './_components/hero';
import HowWork from './_components/how-work';
import WhyUs from '@/components/why-us';
import Features from '@/app/(marketing)/_components/features';
import FAQs from './_components/faqs';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: `#1 Cleaning Service in Wollongong - Cleaner Wollongong`,
    description: '',
};

export default function Page() {
    return (
        <Shell>
            <Hero />
            <HowWork />
            <Features location="Wollongong" />
            <WhyUs />
            <FAQs />
        </Shell>
    );
}
