import { type Metadata } from 'next';
import React from 'react';

import { checkUserAgentForGooglebot } from '@/lib/next';
import CloakedContent from './_components/cloaked-content';
import Content from './_components/content';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: `#1 House Cleaning Service in Geelong - Cleaner Near Me in Geelong`,
    description:
        'Best Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking',
};

export default function Page() {
    const isGooglebot = checkUserAgentForGooglebot();

    if (isGooglebot) return <CloakedContent />;

    return <Content location="Geelong" />;
}
