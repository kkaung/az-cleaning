import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { siteConfig } from '@/configs/site';
import { formatDate } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'House Cleaning Prices In Geelong',
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
                        dateTime={'2024-01-04T00:00:00.000Z'}
                        className="block text-sm text-muted-foreground mb-2"
                    >
                        Updated on {formatDate('2024-01-04T00:00:00.000Z')}
                    </time>
                </PageHeaderDescription>
            </PageHeader>
            <div className="mx-auto prose prose-quoteless prose-neutral dark:prose-invert">
                <p>
                    Coast Maid provides a range of high-quality cleaning
                    services, from house cleaning to{' '}
                    <Link href="/office-cleaning-wollongong">
                        office cleaning
                    </Link>
                    ,{' '}
                    <Link href="/bond-cleaning-wollongong">
                        end of lease cleaning
                    </Link>{' '}
                    and{' '}
                    <Link href="/carpet-cleaning-wollongong">
                        carpet cleaning
                    </Link>
                    . We cater to homes throughout Gold Coast, offering
                    top-notch cleaning solutions at affordable prices, ensuring
                    accessibility to the best cleaners in the city for all.
                </p>
                <p>
                    This guide unveils the secrets to sparkling spaces without
                    the shocking bill. From hourly rates to flat fees, discover
                    the perfect cleaning solution for your home and budget.
                    Breathe easy knowing you&apos;re getting expert service
                    without the stress of hidden fees.
                </p>
            </div>
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
            <section className="my-8 max-w-xl mx-auto">
                <Card className="border-0 bg-secondary/50 rounded-xl">
                    <CardHeader>
                        <div className="flex gap-4">
                            <div className="font-semibold">
                                <Link
                                    href="/"
                                    className="relative text-primary hover:underline"
                                >
                                    {siteConfig.name}
                                </Link>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 text-foreground">
                        <div className="flex gap-4"></div>
                    </CardContent>
                </Card>
            </section>
        </Shell>
    );
}
