import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `After Builder Cleaning in ${location} - Post Construction Cleaning ${location}`,
        description: `Top-rated after builders cleaning services in ${location}. Reliable, experienced & insured cleaners. Book online in 60 seconds!`,
        alternates: {
            canonical: pathname,
        },
    };
};
