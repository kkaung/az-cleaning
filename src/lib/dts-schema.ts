import { siteConfig } from '@/configs/site';
import type {
    Graph,
    Organization,
    Product,
    WebSite,
    LocalBusiness,
} from 'schema-dts';
import { absoluteUrl } from './utils';

const isBrowser = typeof window !== 'undefined';

export const OrganizationSchema: Organization = {
    '@type': 'Organization',
    name: siteConfig.title,
    description: siteConfig.description,
    logo: absoluteUrl('/images/logo.png'),
    ...(isBrowser && { url: absoluteUrl(window.location.pathname) }),
    email: siteConfig.business.email,
    telephone: siteConfig.business.phone,
    address: {
        '@type': 'PostalAddress',
        streetAddress: '10/104 Little Malop St',
        postalCode: '3220',
        addressLocality: 'Geelong',
        addressCountry: 'Australia',
    },
    sameAs: [
        siteConfig.links.facebook,
        siteConfig.links.twitter,
        siteConfig.links.linkedin,
        siteConfig.links.pinterest,
        siteConfig.links.youtube,
        siteConfig.links.instagram,
    ],
};

export const ProductSchema: Product = {
    '@type': 'Product',
    name: siteConfig.title,
    description: siteConfig.description,
    image: absoluteUrl('/images/logo.png'),
    brand: {
        '@type': 'Brand',
        name: siteConfig.title,
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        bestRating: '5',
        worstRating: '1',
        ratingValue: siteConfig.rating.ratingValue,
        ratingCount: siteConfig.rating.ratingCount,
    },
};

export const LocalBusinessSchema: LocalBusiness = {
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    image: absoluteUrl('/images/logo.png'),
    email: siteConfig.business.email,
    telephone: siteConfig.business.phone,
    address: {
        '@type': 'PostalAddress',
        streetAddress: '10/104 Little Malop St',
        postalCode: '3220',
        addressLocality: 'Geelong',
        addressCountry: 'Australia',
    },
};

export const WebSiteSchema: WebSite = {
    '@type': 'WebSite',
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: 'en-GB',
};

export const graphSchemas: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
        OrganizationSchema,
        WebSiteSchema,
        ProductSchema,
        LocalBusinessSchema,
    ],
};
