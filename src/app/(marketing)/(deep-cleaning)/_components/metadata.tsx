import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `#1 Deep Cleaning Service in ${location} - Spring Cleaning ${location}`,
        description: `Best Cleaning Service ✔️ 100% Guarantee ✔️ 5 Star-Rated Cleaning Service ✔️ Trusted & Vetted Cleaners ✔️ Instant Online Booking`,
        alternates: {
            canonical: pathname,
        },
    };
};
