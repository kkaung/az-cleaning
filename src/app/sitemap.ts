import { type MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/utils';
import { allPosts, allPages } from 'contentlayer/generated';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const pagesRoutes = allPages.map(page => ({
        url: absoluteUrl(`/${page.slugAsParams}`),
        lastModified: new Date().toISOString(),
    }));

    const postsRoutes = allPosts.map(post => ({
        url: absoluteUrl(`${post.slug}`),
        lastModified: new Date().toISOString(),
    }));

    const routes = [
        '',
        '/pricing',
        '/blog',
        '/about',

        '/deep-cleaning-geelong',
        '/regular-cleaning-geelong',
        '/office-cleaning-geelong',
        '/end-of-lease-cleaning-geelong',
        '/carpet-cleaning-geelong',
        '/window-cleaning-geelong',
        '/oven-cleaning-geelong',
        '/after-builder-cleaning-geelong',
    ].map(route => ({
        url: absoluteUrl(route),
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...pagesRoutes, ...postsRoutes];
}
