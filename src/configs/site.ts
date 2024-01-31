import { Icons } from '@/components/icons';
import type { FooterItem, MainNavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

const links = {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://instagram.com/',
    twitter: 'https://twitter.com/',
    pinterest: 'https://pinterest.com/',
    linkin: 'https://linkin.com',
    youtube: 'https://youtube.com',
};

export const siteConfig = {
    logo: 'AZCleaning',
    name: 'AZ Cleaning',
    title: ``,
    description: '',
    url: 'https://rzcleaning.com.au',
    ogImage: 'https://rzcleaning.com.au/opengraph-image.png',
    mainNav: [
        {
            title: 'Pricing',
            href: '/pricing',
        },
    ] satisfies MainNavItem[],
    links,
    footerNav: [
        {
            title: 'Bond Cleaning',
            items: [
                {
                    title: 'Bond Cleaning Sydney',
                    href: '/bond-cleaning-sydney',
                },
                {
                    title: 'Bond Cleaning Brisbane',
                    href: '/bond-cleaning-brisbane',
                },
                {
                    title: 'Bond Cleaning Canberra',
                    href: '/bond-cleaning-canberra',
                },
                {
                    title: 'Bond Cleaning Gold Coast',
                    href: '/bond-cleaning-gold-coast',
                },
                {
                    title: 'Bond Cleaning Perth',
                    href: '/bond-cleaning-perth',
                },
                {
                    title: 'Bond Cleaning Adelaide',
                    href: '/bond-cleaning-adelaide',
                },
            ],
        },
        {
            title: 'Vacate Cleaning',
            items: [
                {
                    title: 'Vacate Cleaning Sydney',
                    href: '/vacate-cleaning-sydney',
                },
                {
                    title: 'Vacate Cleaning Brisbane',
                    href: '/vacate-cleaning-brisbane',
                },
                {
                    title: 'Vacate Cleaning Canberra',
                    href: '/vacate-cleaning-canberra',
                },
                {
                    title: 'Vacate Cleaning Gold Coast',
                    href: '/vacate-cleaning-gold-coast',
                },
                {
                    title: 'Vacate Cleaning Perth',
                    href: '/vacate-cleaning-perth',
                },
                {
                    title: 'Vacate Cleaning Adelaide',
                    href: '/vacate-cleaning-adelaide',
                },
            ],
        },
        {
            title: 'Useful Links',
            items: [
                { title: 'Contact Us', href: '/contact' },
                { title: 'About Us', href: '/about' },
                { title: 'Blog', href: '/blog' },
                { title: 'Pricing', href: '/pricing' },
                { title: 'Checklist', href: '/checklist' },
                { title: 'FAQs', href: '/frequently-asked-questions' },
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms And Conditions', href: '/terms' },
            ],
        },
    ] satisfies FooterItem[],
    business: {
        email: 'contact@azcleaning.com.au',
        phone: '1300 245 417',
        address: '7/24-26 Blaxland Road, Ryde, NSW 2112',
        openingHour: 'Mon – Sat: 9:00 AM – 5:00 PM',
    },
    rating: {
        ratingValue: '4.9',
        ratingCount: '727',
    },
};

export const siteServices: {
    title: string;
    slug: string;
    icon?: keyof typeof Icons;
}[] = [];
