import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx/mdx-components';
import Image from 'next/image';
import Link from 'next/link';
import { type Metadata } from 'next';
import { env } from '@/env.mjs';
import { absoluteUrl, cn, formatDate } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { headingVariants } from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';
import { getPathname } from '@/lib/next';
import Logo from '/public/logo.png';

import Dot from '@/components/dot';
import { siteConfig } from '@/configs/site';
import { Graph, NewsArticle } from 'schema-dts';
import { allCategories } from '@/configs/category';
import Script from 'next/script';

interface PostPageProps {
    params: {
        slug: string[];
    };
}

async function getPostFromParams(params: any) {
    const slug = params?.slug?.join('/');
    const post = allPosts.find(post => post.slugAsParams === slug);

    if (!post) return null;

    return post;
}

export async function generateMetadata({
    params,
}: PostPageProps): Promise<Metadata> {
    const post = await getPostFromParams(params);

    const pathname = getPathname();

    if (!post) return {};

    const url = env.NEXT_PUBLIC_APP_URL;

    const ogUrl = new URL(`${url}/api/og`);
    ogUrl.searchParams.set('heading', post.title);
    ogUrl.searchParams.set('type', 'Blog Post');
    ogUrl.searchParams.set('mode', 'dark');

    return {
        title: post.title,
        description: post.description,
        authors: [
            {
                name: siteConfig.name,
                url: absoluteUrl('/'),
            },
        ],
        alternates: {
            canonical: pathname,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: absoluteUrl(post.slug),
            images: [
                {
                    url: ogUrl.toString(),
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [ogUrl.toString()],
        },
    };
}

export async function generateStaticParams(): Promise<
    PostPageProps['params'][]
> {
    return allPosts.map(post => ({
        slug: post.slugAsParams.split('/'),
    }));
}

export default async function PostPage({ params }: PostPageProps) {
    const post = await getPostFromParams(params);

    if (!post) notFound();

    const isReviewArticle = post.category === 'reviews';

    const category = allCategories.find(c => c.slug === post.category)!;

    const NewsArticleSchema: NewsArticle = {
        '@type': 'NewsArticle',
        '@id': post.slugAsParams,
        headline: post.title,
        datePublished: post.date,
        dateModified: post.date,
        author: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: absoluteUrl('/'),
            telephone: siteConfig.business.phone,
            description: siteConfig.description,
            address: {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.business.detailsAddress.streetAddress,
                postalCode: siteConfig.business.detailsAddress.postalCode,
                addressRegion: siteConfig.business.detailsAddress.addressRegion,
                addressLocality:
                    siteConfig.business.detailsAddress.addressLocality,
                addressCountry:
                    siteConfig.business.detailsAddress.addressCountry,
            },
        },
        publisher: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: absoluteUrl('/'),
            logo: absoluteUrl('/logo.png'),
            telephone: siteConfig.business.phone,
            description: siteConfig.description,
            address: {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.business.detailsAddress.streetAddress,
                postalCode: siteConfig.business.detailsAddress.postalCode,
                addressRegion: siteConfig.business.detailsAddress.addressRegion,
                addressLocality:
                    siteConfig.business.detailsAddress.addressLocality,
                addressCountry:
                    siteConfig.business.detailsAddress.addressCountry,
            },
        },
        ...(isReviewArticle && {
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: post.ratingValue,
                reviewCount: post.ratingCount,
                worstRating: 1,
                bestRating: 5,
            },
        }),
        articleSection: [''],
        inLanguage: 'en-US',
    };

    const graphSchemas: Graph = {
        '@context': 'https://schema.org',
        '@graph': [NewsArticleSchema],
    };

    return (
        <article className="container relative max-w-3xl py-6 lg:py-10">
            <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(graphSchemas),
                }}
                strategy="afterInteractive"
            />
            <Link
                href="/blog"
                className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'absolute left-[-200px] top-14 hidden xl:inline-flex'
                )}
            >
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                See all posts
            </Link>
            <div>
                <h1 itemProp="headline" className={headingVariants({})}>
                    {post.title}
                </h1>
                <div className="mt-4 flex space-x-4">
                    <div className="flex gap-2 items-center justify-center">
                        <div className="flex flex-col ">
                            <div className="flex items-center gap-3">
                                <span
                                    itemType="https://schema.org/Organization"
                                    itemScope
                                    itemProp="author"
                                >
                                    <Link
                                        href="/"
                                        className="text-sm ml-1 font-semibold sm:text-base hover:underline"
                                        rel="author"
                                        itemProp="url"
                                    >
                                        <span itemProp="name">
                                            {siteConfig.name}
                                        </span>
                                    </Link>
                                </span>
                                <Dot />
                                {post.date && (
                                    <time
                                        dateTime={post.date}
                                        className="text-sm text-muted-foreground"
                                    >
                                        {formatDate(post.date)}
                                    </time>
                                )}
                                <Dot />
                                <span className="text-muted-foreground font-medium text-sm">
                                    {post.readingTime} min read
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {post.image && (
                <Image
                    src={post.image}
                    alt={post.title}
                    width={720}
                    height={405}
                    className="my-8 rounded-xl border bg-muted transition-colors"
                    priority
                />
            )}
            <Mdx code={post.body.code} />
            <div className="bg-secondary/50 p-6 rounded-lg space-y-4 mt-8">
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
                    <p className="text-sm" itemProp="description">
                        {siteConfig.description}
                    </p>
                </div>
            </div>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Blog', href: '/blog' },
                    {
                        title: category.title,
                        href: `/blog/${category.slug}`,
                    },
                ]}
                dottable={false}
                className="mt-12"
            />
            <div className="flex justify-center py-6 lg:py-10">
                <Link
                    href="/blog"
                    className={cn(buttonVariants({ variant: 'ghost' }))}
                >
                    <Icons.chevronLeft className="mr-2 h-4 w-4" />
                    See all posts
                </Link>
            </div>
        </article>
    );
}
