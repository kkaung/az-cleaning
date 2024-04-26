import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { siteConfig } from '@/configs/site';
import { allProducts } from 'contentlayer/generated';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: `Shop - ${siteConfig.name}`,
    description:
        'Explore our wide range of top-quality cleaning supplies and equipment for your home or business in Geelong - shop online now.',
    alternates: {
        canonical: '/products',
    },
};

export default function Page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Store', href: '/products' },
                ]}
                dottable={false}
            />
            <PageHeader>
                <PageHeaderHeading className="mx-auto">
                    {siteConfig.name} Shop
                </PageHeaderHeading>
            </PageHeader>
            <section className="grid grid-cols-2 lg:grid-cols-6">
                {allProducts.map(product => (
                    <div key={product.slugAsParams}>
                        <Link href={product.slug}>{product.title}</Link>
                    </div>
                ))}
            </section>
        </Shell>
    );
}
