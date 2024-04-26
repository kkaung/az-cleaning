import { type Metadata } from 'next';
import React from 'react';
import { getMetadata } from '../_components/metadata';
import Content from '../_components/content';
import { checkUserAgentForGooglebot, getCityFromPath } from '@/lib/next';
import CloakedContent from '../_components/cloaked-content';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPath();

    return getMetadata(city);
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
                    title: 'Office Cleaning',
                    href: '/office-cleaning-geelong',
                },
            ]}
        />
    );
}
