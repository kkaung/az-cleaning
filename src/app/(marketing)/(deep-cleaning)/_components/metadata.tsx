import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Spring Cleaning ${location}: Deep Cleaning Service in ${location}, VIC`,
        description: `🥇 Spring Cleaning Service in ${location} ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning Service ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
    };
};
