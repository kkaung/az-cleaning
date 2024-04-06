import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Residential Window Cleaning Service In ${location} - Window Cleaning ${location}`,
        description: `Crystal clear windows in ${location}! Get a free quote for professional residential window cleaning from trusted local companies.`,
        alternates: {
            canonical: pathname,
        },
    };
};
