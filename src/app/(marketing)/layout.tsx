import { type PropsWithChildren } from 'react';
import { SiteHeader } from '@/components/layouts/site-header';
import SiteFooter from '@/components/layouts/site-footer';
import Script from 'next/script';
import { graphSchemas } from '@/lib/dts-schema';

export default async function Layout({ children }: PropsWithChildren) {
    const graph = graphSchemas;

    return (
        <>
            <div className="relative h-full flex min-h-screen flex-col">
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
            </div>
            <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
                strategy="afterInteractive"
            />
        </>
    );
}
