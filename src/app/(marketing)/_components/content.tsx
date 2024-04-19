import React from 'react';
import { Shell } from '@/components/shell';

import Hero from './hero';
import Features from './features';
import HowWork from './how-work';
import FAQs from './faqs';

interface ContentProps {
    location: string;
    suburb?: string;
}

export default function Content({ location }: ContentProps) {
    return (
        <Shell>
            <Hero />
            <HowWork />
            <Features location={location} />
            <FAQs />
        </Shell>
    );
}
