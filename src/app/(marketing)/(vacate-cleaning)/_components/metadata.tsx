import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Move Out Cleaning ${location} - Vacate Cleaning`,
        description: `Professional move out cleaning service in ${location} with 100% Bond Back Guarantee. Book online inless than 60 seconds.`,
        alternates: {
            canonical: pathname,
        },
    };
};
