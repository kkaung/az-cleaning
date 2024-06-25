import React from 'react';
import { Shell } from '@/components/shell';

import Hero from './hero';
import Features from './features';
import HowWork from './how-work';
import About from './about';
import Services from './services';
import Commitment from './commitment';

interface ContentProps {
    location: string;
    suburb?: string;
}

export default function Content({ location }: ContentProps) {
    return (
        <Shell>
            <Hero location={location} />
            <HowWork />
            <Features location={location} />
            <Services location={location} />
            <About location={location} />
            <Commitment />
        </Shell>
    );
}
