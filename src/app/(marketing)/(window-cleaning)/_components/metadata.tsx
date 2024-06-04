import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Window Cleaner ${location}: #1 Residential Window Cleaning Service in ${location}, VIC`,
        description: `Best Window Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Bond Cleaning ✔️ Trusted & Vetted Cleaner ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
    };
};
