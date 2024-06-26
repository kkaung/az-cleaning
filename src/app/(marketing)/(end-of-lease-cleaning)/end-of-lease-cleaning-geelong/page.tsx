import React from 'react';
import { getCityFromPath } from '@/lib/next';
import { type Metadata } from 'next';

import { getMetadata } from '../_components/metadata';
import Content from '../_components/content';

export async function generateMetadata(): Promise<Metadata> {
    const city = getCityFromPath();

    return getMetadata(city);
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
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning-geelong',
                },
            ]}
        />
    );
}
