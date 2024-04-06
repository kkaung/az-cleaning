import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Professional Oven Cleaning Service in ${location}`,
        description: `We are top-rated oven cleaning company in ${location}. Book online in 60 seconds!`,
        alternates: {
            canonical: pathname,
        },
    };
};
