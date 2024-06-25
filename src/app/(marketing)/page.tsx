import { type Metadata } from 'next';
import React from 'react';

import Content from './_components/content';
import { siteConfig } from '@/configs/site';

export const metadata: Metadata = {
    title: `${siteConfig.name}: House Cleaning Service in Geelong, VIC`,
    description:
        '🥇 House Cleaning Service in Geelong ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking',
};

export default function Page() {
    return <Content location="Geelong" />;
}
