import { getPathname } from '@/lib/next';
import { type Metadata } from 'next';

export const getMetadata = (location: string): Metadata => {
    const pathname = getPathname();

    return {
        title: `Office Cleaning Service In ${location} - Commercial Cleaning ${location}`,
        description: `Get a sparkling clean office with our professional office cleaners. Gold Coast's trusted commercial office cleaning service. Book online in 60 seconds!`,
        alternates: {
            canonical: pathname,
        },
    };
};
