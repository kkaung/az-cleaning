import React from 'react';
import { Shell } from '@/components/shell';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { toTitleCase, unslugify } from '@/lib/utils';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { allAuthors, allPosts } from 'contentlayer/generated';
import { type Metadata } from 'next';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { Icons } from '@/components/icons';
import Link from 'next/link';
import { getPathname } from '@/lib/next';

import PostCard from '../../blog/_components/post-card';

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const pathname = getPathname();

    const author = allAuthors.find(
        author => author.slugAsParams === params.slug
    )!;

    return {
        title: `${author.title}'s Post Archive`,
        description: `Explore a curated collection of insightful posts from ${author.title}'s archive.`,
        alternates: {
            canonical: pathname,
        },
    };
}

interface PageProps {
    params: {
        slug: string;
    };
}

export default function Page({ params }: PageProps) {
    const title = toTitleCase(unslugify(params.slug));

    const author = allAuthors.find(
        author => author.slugAsParams === params.slug
    );

    if (!author) redirect('/blog');

    const posts = allPosts.filter(post => {
        return post.author.includes(author?.slugAsParams ?? '');
    });

    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Blog', href: '/blog' },
                    { title: title, href: `/author/${params.slug}` },
                ]}
                dottable={false}
            />
            <PageHeader className="relative grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl w-full mx-auto py-12">
                <div className="space-y-4">
                    <PageHeaderHeading>{author.title}</PageHeaderHeading>
                    <PageHeaderDescription className="mx-auto" size="sm">
                        {author.description}
                    </PageHeaderDescription>
                    <div>
                        <Link
                            href={`https://www.linkedin.com/in/${author.linkin}`}
                            target="_blank"
                        >
                            <Icons.linkin aria-hidden className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
                <Image
                    width={300}
                    height={300}
                    src={author.avatar}
                    alt={`${author.title}`}
                    className="hidden bg-cover object-cover rounded-xl sm:block"
                />
            </PageHeader>
            <section className="mx-auto w-full max-w-4xl gap-6">
                <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {posts.map((post, key) => (
                        <li key={key}>
                            <PostCard post={post} author={author} />
                        </li>
                    ))}
                </ul>
            </section>
        </Shell>
    );
}
