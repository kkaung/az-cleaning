import { notFound } from 'next/navigation';
import { allPages } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx/mdx-components';
import { Metadata } from 'next';
import { env } from '@/env.mjs';
import { siteConfig } from '@/configs/site';
import { absoluteUrl, cn } from '@/lib/utils';
import { headingVariants } from '@/components/page-header';
import { Shell } from '@/components/shell';
import { getPathname } from '@/lib/next';

interface PageProps {
    params: {
        slug: string[];
    };
}

async function getPageFromParams(params: { slug: string[] }) {
    const slug = params?.slug?.join('/');
    const page = allPages.find(page => page.slugAsParams === slug);

    if (!page) null;

    return page;
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const pathname = getPathname();

    const page = await getPageFromParams(params);

    if (!page) return {};

    const url = env.NEXT_PUBLIC_APP_URL;

    const ogUrl = new URL(`${url}/api/og`);
    ogUrl.searchParams.set('heading', page.title);
    ogUrl.searchParams.set('type', siteConfig.name);
    ogUrl.searchParams.set('mode', 'light');

    return {
        title: page.title,
        description: page.description,
        alternates: {
            canonical: pathname,
        },
        openGraph: {
            title: page.title,
            description: page.description,
            type: 'article',
            url: absoluteUrl(page.slug),
            images: [
                {
                    url: ogUrl.toString(),
                    width: 1200,
                    height: 630,
                    alt: page.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: page.title,
            description: page.description,
            images: [ogUrl.toString()],
        },
    };
}

export async function generateStaticParams(): Promise<PageProps['params'][]> {
    return allPages.map(page => ({
        slug: page.slugAsParams.split('/'),
    }));
}

export default async function PagePage({ params }: PageProps) {
    const page = await getPageFromParams(params);

    if (!page) notFound();

    return (
        <Shell variant="markdown">
            <div className="space-y-4">
                <h1 className={cn(headingVariants({}))}>{page.title}</h1>
                {page.description && (
                    <p className="text-xl text-muted-foreground">
                        {page.description}
                    </p>
                )}
            </div>
            <hr className="my-4" />
            <Mdx code={page.body.code} />
        </Shell>
    );
}
