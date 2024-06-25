import React from 'react';
import { type Metadata } from 'next';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { allPosts } from 'contentlayer/generated';
import {
    PaginationPrevious,
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationEllipsis,
    PaginationNext,
} from '@/components/ui/pagination';
import { getPathname } from '@/lib/next';
import { Shell } from '@/components/shell';
import { allCategories } from '@/configs/category';

import { BlogTabs } from '../../_components/blog-tabs';
import PostCard from '../../_components/post-card';

interface PageProps {
    params: {
        slug: string[];
    };
}

function getCategoryFromParam(params: any) {
    const slug = params?.slug?.join('/');

    const category = allCategories.find(cateogry => cateogry.slug === slug);

    if (!category) return null;

    return category;
}

export function generateMetadata({ params }: PageProps): Metadata {
    const pathname = getPathname();

    const slug = params?.slug?.join('/');

    const category = allCategories.find(cateogry => cateogry.slug === slug)!;

    return {
        title: `${category.title}`,
        description: `${category.description}`,
        alternates: {
            canonical: pathname,
        },
    };
}

export default function Page({ params }: PageProps) {
    const category = getCategoryFromParam(params)!;

    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Blog', href: '/blog' },
                    {
                        title: category.title,
                        href: category.slug,
                    },
                ]}
                dottable={false}
            />
            <PageHeader className="text-center space-y-4">
                <PageHeaderHeading>{category.title}</PageHeaderHeading>
                <PageHeaderDescription className="mx-auto">
                    {category.description}
                </PageHeaderDescription>
            </PageHeader>
            <section className="mt-8 max-w-5xl w-full mx-auto">
                <BlogTabs />
                <div className="grid gap-6 grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3">
                    {allPosts.map((post, idx) => {
                        return <PostCard key={idx} post={post} />;
                    })}
                </div>
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
