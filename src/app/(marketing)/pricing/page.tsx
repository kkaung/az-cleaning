import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { siteConfig } from '@/configs/site';
import { formatDate } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from '/public/logo.png';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'House Cleaning Prices in Geelong',
        description: `Get crystal clear pricing on Geelong's top-rated house cleaning services. Find the perfect fit for your budget and needs, with options from weekly refreshes to deep dives.`,
        alternates: {
            canonical: '/pricing',
        },
    };
}

const pricingList = [
    {
        title: '1 Bedroom, 1 Bathroom',
        price: '$339',
    },
    {
        title: '2 Bedroom, 1 Bathroom',
        price: '$400',
    },
    {
        title: '3 Bedroom, 2 Bathroom',
        price: '$469',
    },
    {
        title: '4 Bedroom, 2 Bathroom',
        price: '$549',
    },
    {
        title: '4 Bedroom, 3 Bathroom',
        price: '$579',
    },
    {
        title: '5 Bedroom, 3 Bathroom',
        price: '$659',
    },
    {
        title: '6 Bedroom, 3 Bathroom',
        price: '$709',
    },
];

export default function Page() {

     const items = [
         { title: 'House Cleaning', href: '/' },
         { title: 'Spring Cleaning', href: '/deep-cleaning-geelong' },
         { title: 'Regular Cleaning', href: '/regular-cleaning-geelong' },
         {
             title: 'End Of Lease Cleaning',
             href: '/end-of-lease-cleaning-geelong',
         },
         { title: 'Office Cleaning', href: '/office-cleaning-geelong' },
         { title: 'Oven Cleaning', href: '/oven-cleaning-geelong' },
         { title: 'Carpet Cleaning', href: '/carpet-cleaning-geelong' },
         { title: 'Window Cleaning', href: '/window-cleaning-geelong' },
         {
             title: 'After Builder Cleaning',
             href: '/after-builder-cleaning-geelong',
         },
     ];

    return (
        <Shell as="article">
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Pricing', href: '/pricing' },
                ]}
                dottable={false}
            />
            <PageHeader className="text-center">
                <PageHeaderHeading>
                    House Cleaning Pricing In Geelong
                </PageHeaderHeading>
                <PageHeaderDescription className="mx-auto">
                    <time
                        dateTime={'2024-06-24T00:00:00.000Z'}
                        className="block text-sm text-muted-foreground mb-2"
                    >
                        Updated on {formatDate('2024-06-24T00:00:00.000Z')}
                    </time>
                </PageHeaderDescription>
            </PageHeader>
            <section className="broder max-w-xl mx-auto w-full">
                <Table>
                    <TableCaption>A list of cleaning prices.</TableCaption>
                    <TableHeader>
                        <TableRow className="text-base">
                            <TableHead className="w-[300px]">
                                Home / Apartment
                            </TableHead>
                            <TableHead>Pricing</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {pricingList.map(p => (
                            <TableRow key={p.title} className="text-base">
                                <TableCell className="font-medium">
                                    {p.title}
                                </TableCell>
                                <TableCell>{p.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
            <div className="bg-secondary/50 p-6 rounded-lg space-y-4 mt-8 max-w-xl mx-auto">
                <div className="space-y-2">
                    <div
                        itemScope
                        itemProp="http://schema.org/Person"
                        className="inline-flex items-center gap-2 text-lg font-bold leading-none"
                    >
                        <Image
                            width={32}
                            height={32}
                            src={Logo}
                            alt="Brisbane Bond Cleaner Avatar"
                            itemProp="image"
                            className="h-8 w-8 rounded-full object-cover"
                        />
                        <Link
                            className="font-semibold"
                            href="/"
                            rel="author"
                            itemProp="url"
                        >
                            <span itemProp="name">{siteConfig.name}</span>
                        </Link>
                    </div>
                    <div className="text-sm" itemProp="description">
                        {siteConfig.description}
                    </div>
                </div>
                <div className="flex flex-col gap-2 prose prose-quoteless prose-neutral dark:prose-invert text-sm">
                    <ul>
                        {items.map(i => (
                            <li key={i.title}>
                                <Link href={i.href} className="no-underline">
                                    {i.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Shell>
    );
}
