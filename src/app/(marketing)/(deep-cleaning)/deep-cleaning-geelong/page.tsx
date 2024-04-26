import { type Metadata } from 'next';
import React from 'react';
import { checkUserAgentForGooglebot, getCityFromPath } from '@/lib/next';

import { getMetadata } from '../_components/metadata';
import Content from '../_components/content';
import CloakedContent from '../_components/cloaked-content';

export async function generateMetadata(): Promise<Metadata> {
    return getMetadata('Geelong');
}

export default function Page() {
    const city = getCityFromPath();

    const isGooglebot = checkUserAgentForGooglebot();

    if (isGooglebot) return <CloakedContent />;

    return (
        <Content
            city={city}
            segments={[
                { title: 'Home', href: '/' },
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning-geelong',
                },
            ]}
        />
    );
}
