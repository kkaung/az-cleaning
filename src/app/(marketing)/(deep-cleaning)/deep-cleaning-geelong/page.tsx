import { type Metadata } from 'next';
import React from 'react';
import { getMetadata } from '../_components/metadata';
import Content from '../_components/content';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
    return getMetadata('Geelong');
}

export default function Page() {
    return (
        <Content
            city="Geelong"
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
