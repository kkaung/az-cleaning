import { notFound } from 'next/navigation';
import { type Author, allAuthors, allPosts } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx/mdx-components';
import Image from 'next/image';
import Link from 'next/link';
import { type Metadata } from 'next';
import { env } from '@/env.mjs';
import { absoluteUrl, cn, formatDate } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { headingVariants } from '@/components/page-header';
import { getPathname } from '@/lib/next';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';

import Dot from '@/components/dot';
import { cities } from '@/configs/location';

interface PostPageProps {
    params: {
        slug: string[];
    };
}

async function getPostFromParams(params: any) {
    const slug = params?.slug?.join('/');
    const post = allPosts.find(post => post.slugAsParams === slug);

    if (!post) null;

    return post;
}

export async function generateMetadata({
    params,
}: PostPageProps): Promise<Metadata> {
    const pathname = getPathname();

    const post = await getPostFromParams(params);

    if (!post) return {};

    const url = env.NEXT_PUBLIC_APP_URL;

    const ogUrl = new URL(`${url}/api/og`);
    ogUrl.searchParams.set('heading', post.title);
    ogUrl.searchParams.set('type', 'Blog Post');
    ogUrl.searchParams.set('mode', 'dark');

    const author = allAuthors.find(
        author => author.slugAsParams === post.author
    ) as Author;

    return {
        title: post.title,
        description: post.description,
        alternates: {
            canonical: pathname,
        },
        authors: [
            {
                name: author.title,
                url: absoluteUrl(`/authors/${author.slugAsParams}`),
            },
        ],
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

    const author = allAuthors.find(
        author => author.slugAsParams === post.author
    ) as Author;

    return (
        <section className="container relative max-w-3xl py-6 lg:py-10">
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
                <h1 className={cn(headingVariants({}))}>{post.title}</h1>
                <div className="mt-4">
                    {post.date && (
                        <time
                            dateTime={post.date}
                            className="block text-sm text-muted-foreground mb-2"
                        >
                            Updated on {formatDate(post.date)}
                        </time>
                    )}
                </div>
                <div className="mt-4 flex space-x-4">
                    <div
                        key={author._id}
                        className="flex gap-2 items-center justify-center"
                    >
                        <Image
                            src={author.avatar}
                            alt={author.title}
                            width={42}
                            height={42}
                            className="rounded-full bg-white"
                        />
                        <div className="flex flex-col ">
                            <div className="flex items-center gap-2">
                                <p className="font-semibold">
                                    by
                                    <Link
                                        href={`/authors/${author.slugAsParams}`}
                                        className="ml-1 hover:underline"
                                    >
                                        {author.title}
                                    </Link>
                                </p>
                                <Dot />
                                <p className="text-muted-foreground font-medium text-sm">
                                    {post.readingTime} min read
                                </p>
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
            <section className="my-8">
                <Card className="border-0 bg-secondary/50 rounded-xl">
                    <CardHeader>
                        <div className="flex gap-4">
                            <CardTitle>
                                <Avatar>
                                    <AvatarImage
                                        src={author.avatar}
                                        alt="Author Avatar"
                                    />
                                    <AvatarFallback>
                                        {author.title.charAt(0).toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                            </CardTitle>
                            <div className="font-semibold">
                                <p className="text-xs text-muted-foreground">
                                    Article by
                                </p>
                                <Link href={`/authors/${author.slugAsParams}`}>
                                    <p className="relative text-primary hover:underline">
                                        {author.title}
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4 text-foreground">
                        <p className="text-foreground">{author.description}</p>
                        <div className="flex gap-4">
                            <Link aria-label="Linkin" target="_blank" href="/">
                                <Icons.linkin aria-hidden className="h-4 w-4" />
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </section>
            <section
                id="bond-cleaners"
                className="bg-secondary/50 p-6 rounded-lg space-y-4"
            >
                <div className="space-y-2">
                    <h3 className="font-semibold text-lg">
                        Find bond cleaners in your city
                    </h3>
                    <p className="text-sm">
                        BondToClean&apos;s network of verified local cleaners
                        operates Australia-wide. Choose your city and get
                        started now.
                    </p>
                </div>
                <ul className="grid grid-cols-1 gap-x-4 gap-y-2 text-foreground/80 text-sm sm:grid-cols-2 md:grid-cols-3">
                    {cities.map((city, idx) => (
                        <li key={idx} className="group">
                            <Link
                                href={`/bond-cleaning-${city.toLowerCase()}`}
                                className="hover:underline"
                                title={`Bond Cleaner ${city}`}
                            >
                                <Icons.mapPin
                                    className="w-4 h-4 inline mr-1 text-foreground/80"
                                    aria-hidden
                                />
                                <span>Bond Cleaner {city}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'Blog', href: '/blog' },
                ]}
                dottable={false}
                className="mt-12 mb-6"
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
        </section>
    );
}
