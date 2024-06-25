import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { siteConfig } from '@/configs/site';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: ``,
    description: ``,
    alternates: {
        canonical: '/locations',
    },
    robots: {
        index: false,
    },
};

export default function Page() {
    return (
        <Shell>
            <PageHeader>
                <PageHeaderHeading>Locations</PageHeaderHeading>
                <PageHeaderDescription></PageHeaderDescription>
            </PageHeader>
        </Shell>
    );
}
