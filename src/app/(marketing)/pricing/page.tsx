import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
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
import { getPathname } from '@/lib/next';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
    const pathname = getPathname();

    return {
        title: 'End Of Lease - Bond Cleaning Pricing ',
        description:
            'Check our detailed cleaning pricing list. Professional & reliable service, 100% satisfaction guarantee. Book online in 60 seconds.',
        alternates: {
            canonical: pathname,
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
        <Shell>
            <PageHeader className="text-center">
                <PageHeaderHeading>End Of Lease Pricing</PageHeaderHeading>
                <PageHeaderDescription className="mx-auto mt-6">
                    You might recognise it as bond cleaning, end of lease
                    cleaning, or vacate cleaning. It’s all one and the same for
                    us. See below a detailed list of our end of cleaning service
                    prices. At
                    <Link href="/" className="underline mx-1">
                        {siteConfig.name}
                    </Link>
                    , our prices are super affordable and will not break the
                    bank.
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
        </Shell>
    );
}
