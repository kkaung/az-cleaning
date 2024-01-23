import { type MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/utils';
import { allPosts, allPages, allAuthors } from 'contentlayer/generated';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const pagesRoutes = allPages.map(page => ({
        url: absoluteUrl(`/${page.slugAsParams}`),
        lastModified: new Date().toISOString(),
    }));

    const postsRoutes = allPosts.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const authorsRoutes = allAuthors.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const routes = ['', '/pricing', '/blog'].map(route => ({
        url: absoluteUrl(route),
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...pagesRoutes, ...postsRoutes, ...authorsRoutes];
}
