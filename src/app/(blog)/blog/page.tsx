import React from 'react';
import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { Shell } from '@/components/shell';
import { siteConfig } from '@/configs/site';
import { allPosts } from 'contentlayer/generated';
import { type Metadata } from 'next';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { getPathname } from '@/lib/next';

import { BlogTabs } from './_components/blog-tabs';

import PostCard from './_components/post-card';

export function generateMetadata(): Metadata {
    const pathname = getPathname();

    return {
        title: 'Expert House Cleaning Tips And Tricks Blog',
        description:
            'Uncover professional insights, expert advice, and clever hacks to make house cleaning a breeze. Get a clean home you love!',
        alternates: {
            canonical: pathname,
        },
    };
}

export default function Page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Blog', href: '/blog' },
                ]}
                dottable={false}
            />
            <PageHeader className="text-center space-y-4">
                <PageHeaderHeading>
                    {siteConfig.name} - House Cleaning Blog
                </PageHeaderHeading>
            </PageHeader>
            <section className="mt-8 max-w-5xl w-full mx-auto">
                <BlogTabs />
                <ul className="grid gap-6 grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3">
                    {allPosts.map((post, idx) => {
                        return (
                            <li key={idx}>
                                <PostCard post={post} />
                            </li>
                        );
                    })}
                </ul>
                <Pagination className="mt-8">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </section>
        </Shell>
    );
}
