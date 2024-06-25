import { type Metadata } from 'next';
import React from 'react';
import { getCityFromPath } from '@/lib/next';

import { getMetadata } from '../_components/metadata';
import Content from '../_components/content';

export async function generateMetadata(): Promise<Metadata> {
    return getMetadata('Geelong');
}

export default function Page() {
    const city = getCityFromPath();

    return (
        <Content
            city={city}
            segments={[
                { title: 'Home', href: '/' },
                { title: 'Services', href: '/services' },
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning-geelong',
                },
            ]}
        />
    );
}
