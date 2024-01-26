import { Shell } from '@/components/shell';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import React from 'react';

import Hero from './hero';
import HowWork from './how-work';
import FAQs from './faqs';
import Features from './features';
import Gurantee from './guarantee';
import Reviews from './reviews';

import Commitment from '../../_components/commitment';
import LatestBlog from '../../_components/latest-blog';
import About from '../../_components/about';

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
                <Reviews />
                <HowWork />
                <Features />
                <Gurantee />
                <FAQs />
                <About />
                <LatestBlog />
                <Commitment />
                <Breadcrumbs segments={segments} dottable={false} />
            </Shell>
        </>
    );
}
