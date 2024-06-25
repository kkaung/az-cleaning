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
    title: `Cleaning Services in Melbourne`,
    description: `🥇 Cleaning Services in Melbourne ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
    alternates: {
        canonical: '/services',
    },
    robots: {
        index: false,
    },
};

export default function Page() {
    return (
        <Shell>
            <PageHeader>
                <PageHeaderHeading>
                    The #1 Cleaning Services in Melbourne
                </PageHeaderHeading>
                <PageHeaderDescription></PageHeaderDescription>
            </PageHeader>
        </Shell>
    );
}
