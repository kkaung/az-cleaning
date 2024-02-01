import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { getCity } from '@/lib/next';
import { type Metadata } from 'next';
import React from 'react';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: 'End Of Lease Cleaning - Bond Cleaning Checklist',
    description: '',
};

export default function Page() {
    const city = getCity();

    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Checklist', href: '/bond-cleaning-checklist' },
                ]}
                dottable={false}
            />
            <PageHeader>
                <PageHeaderHeading>
                    End Of Lease & Bond Cleaning Checklist For {city}
                </PageHeaderHeading>
            </PageHeader>
        </Shell>
    );
}
