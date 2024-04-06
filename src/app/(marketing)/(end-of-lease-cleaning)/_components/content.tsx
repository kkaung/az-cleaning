import React from 'react';
import { Shell } from '@/components/shell';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import Hero from './hero';
import Features from './features';
import HowWork from './how-work';
import FAQs from './faqs';

interface ContentProps {
    city: string;
    suburb?: string;
    segments: { title: string; href: string }[];
}

export default function Content({ city, suburb, segments }: ContentProps) {
    return (
        <>
            <Shell>
                <Hero location={city} />
                <HowWork location={city} />
                <Features location={city} />
                <FAQs location={city} />
                <Breadcrumbs segments={segments} dottable={false} />
            </Shell>
        </>
    );
}
