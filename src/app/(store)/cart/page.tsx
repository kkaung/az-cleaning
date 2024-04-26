import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: `Shopping Cart - ${siteConfig.name}`,
    description:
        'Complete your online shopping experience by reviewing and securing your items in our easy-to-use cart',
    alternates: {
        canonical: '/cart',
    },
};

export default function Page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Cart', href: '/cart' },
                ]}
                dottable={false}
            />
            <PageHeader className="mx-auto">
                <PageHeaderHeading>Your Cart (0 items)</PageHeaderHeading>
            </PageHeader>
            <section className="text-center space-y-4">
                <h3 className="text-center font-semibold text-lg">
                    Your cart is empty
                </h3>
                <Link href="/" className={cn(buttonVariants({}))}>
                    Shop Now
                </Link>
            </section>
        </Shell>
    );
}
