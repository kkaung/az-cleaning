import React from 'react';
import { Shell } from '@/components/shell';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import Commitment from '@/components/commitment';

import Hero from './hero';
import Features from './features';
import HowWork from './how-work';
import Services from './services';

interface ContentProps {
    city: string;
    suburb?: string;
    segments: { title: string; href: string }[];
}

export default function Content({ city, suburb, segments }: ContentProps) {
    return (
        <Shell>
            <Hero location={city} />
            <HowWork />
            <Features location={city} />
            <Services location={city} />
            <Commitment />
            <Breadcrumbs segments={segments} dottable={false} />
        </Shell>
    );
}
