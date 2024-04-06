import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Deep Cleaning Service In ${location} | One-off cleaning | Spring Cleaning ${location}`,
        description: `Spring cleaning services for a healthier & happier ${location} home with flexible scheduling for busy lifestyles. Book online in 60 seconds!`,
        alternates: {
            canonical: pathname,
        },
    };
};
