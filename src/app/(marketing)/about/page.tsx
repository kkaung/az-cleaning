import { type Metadata } from 'next';
import { Shell } from '@/components/shell';
import { siteConfig } from '@/configs/site';
import React from 'react';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: `About Us - ${siteConfig.name}`,
    description: `Join us on our journey to revolutionize the cleaning industry! Get acquainted with our dedicated field and office staff members, and learn about the inception of ${siteConfig.name}.`,
    alternates: {
        canonical: '/about',
    },
};

export default function page() {
    return (
        <Shell>
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    { title: 'About Us', href: '/about-us' },
                ]}
                dottable={false}
            />
            <PageHeader className="mx-auto">
                <PageHeaderHeading>{siteConfig.name} Story</PageHeaderHeading>
                <PageHeaderDescription className="mx-auto">
                    Turning houses into homes.
                </PageHeaderDescription>
            </PageHeader>
            <div className="mx-auto prose prose-quoteless prose-neutral dark:prose-invert">
                <section>
                    <h2>The Genesis</h2>
                    <p>
                        resident deeply attuned to the transformative influence
                        of a tidy home on personal well-being. Recognizing the
                        fast pace of contemporary living, Haroun conceptualized
                        a dependable, top-tier cleaning service aimed at
                        affording individuals the luxury of time and the
                        serenity of a pristine living space.
                    </p>
                </section>
                <section>
                    <h2>The Mission</h2>
                    <p>
                        Under Kaung&apos;s visionary leadership, Coast Maid
                        transcended its origins as a mere cleaning service,
                        evolving into a catalyst for enhanced lifestyles. By
                        relieving individuals of the burdensome task of
                        household chores, Coast Maid strives to elevate the
                        overall quality of life. Kaung perceives his company not
                        only as a business entity but also as an indispensable
                        cornerstone of the community.
                    </p>
                </section>
                <section>
                    <h2>The Future</h2>
                    <p>
                        Kaung&apos;s aspirations for Coast Maid reach far beyond
                        traditional cleaning services. His goal is to
                        revolutionize customer satisfaction within the industry,
                        constantly adapting to meet the changing needs of
                        clients. While services may expand and diversify, the
                        core mission remains unchanged: transforming houses into
                        homes, one immaculate room at a time.
                    </p>
                </section>
            </div>
        </Shell>
    );
}
