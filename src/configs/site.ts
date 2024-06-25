import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook:
        'https://www.facebook.com/people/AZ-Cleaning-Geelong/61560327820373/',
    twitter: 'https://x.com/azcleaning_',
    pinterest: 'https://www.pinterest.com.au/azcleaning_',
    linkedin: 'https://linkin.com',
    instagram: 'https://www.instagram.com/azcleaning_/',
    youtube: 'https://www.youtube.com/@azcleaning_',
};

export const siteConfig = {
    logo: 'AZCleaning',
    name: 'AZ Cleaning Geelong',
    title: 'AZ Cleaning Geelong',
    domain: 'azcleaning.com.au',
    description:
        'AZ Cleaning Geelong is a top-rated cleaning company in Melbourne, VIC. We offer tailored house cleaning and maid services for your homes, apartments and offices.',
    url: 'https://azcleaning.com.au',
    ogImage: 'https://azcleaning.com.au/opengraph-image.png',
    mainNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning',
                    href: '/deep-cleaning-geelong',
                },
                {
                    title: 'Regular Cleaning',
                    href: '/regular-cleaning-geelong',
                },
                {
                    title: 'End Of Lease Cleaning',
                    href: '/end-of-lease-cleaning-geelong',
                },
                {
                    title: 'Office Cleaning',
                    href: '/office-cleaning-geelong',
                },
                {
                    title: 'Oven Cleaning',
                    href: '/oven-cleaning-geelong',
                },
                {
                    title: 'Carpet Cleaning',
                    href: '/carpet-cleaning-geelong',
                },
                {
                    title: 'Window Cleaning',
                    href: '/window-cleaning-geelong',
                },
                {
                    title: 'After Builder Cleaning',
                    href: '/after-builder-cleaning-geelong',
                },
            ],
        },
        {
            title: 'Pricing',
            href: '/pricing',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Services',
            items: [
                {
                    title: 'Deep Cleaning Geelong',
                    href: '/deep-cleaning-geelong',
                },
                {
                    title: 'Regular Cleaning Geelong',
                    href: '/regular-cleaning-geelong',
                },
                {
                    title: 'End Of Lease Cleaning Geelong',
                    href: '/end-of-lease-cleaning-geelong',
                },
                {
                    title: 'Office Cleaning Geelong',
                    href: '/office-cleaning-geelong',
                },
                {
                    title: 'Oven Cleaning Geelong',
                    href: '/oven-cleaning-geelong',
                },
                {
                    title: 'Carpet Cleaning Geelong',
                    href: '/carpet-cleaning-geelong',
                },
                {
                    title: 'Window Cleaning Geelong',
                    href: '/window-cleaning-geelong',
                },
                {
                    title: 'After Builder Cleaning Geelong',
                    href: '/after-builder-cleaning-geelong',
                },
                {
                    title: 'House Cleaning Service Geelong',
                    href: '/',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Contact Us', href: '/contact' },
                { title: 'Blog', href: '/blog' },
                { title: 'Pricing', href: '/pricing' },
                { title: 'Products', href: '/products' },
                { title: 'Services', href: '/services' },
                { title: 'Locations', href: '/locations' },
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
        {
            title: 'Company',
            items: [
                { title: 'About Us', href: '/about' },
                { title: 'Careers', href: '/careers' },
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@azcleaning.com.au',
        phone: '+61 414076980',
        address: '10/104 Little Malop St, Geelong VIC 3220',
        openingHour: 'Mon – Sun: 9:00 AM – 5:00 PM',
        detailsAddress: {
            streetAddress: '10/104 Little Malop St',
            addressLocality: 'Geelong',
            addressRegion: 'VIC',
            postalCode: '3220',
            addressCountry: 'Australia',
        },
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: 1027,
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
