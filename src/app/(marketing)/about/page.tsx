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
import Link from 'next/link';

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
                <Link href="/">{siteConfig.name}</Link> was founded in 2015 by
                husband and wife team Alex and Zara, two hardworking locals who
                saw a need for a truly reliable,
                <Link href="/">professional house cleaning service</Link> in
                their hometown. Inspired by their own struggles to find a
                trustworthy cleaner they felt comfortable having in their home
                with young children, they created AZ with a mission to raise the
                standard for <Link href="/">domestic cleaning in Geelong</Link>.
                What started with just the two of them has grown into a fully
                insured and vetted team of housekeeping professionals unified by
                a commitment to excellence and integrity. From their
                eco-friendly product choices to their meticulous processes and
                attention to detail, everything {siteConfig.name} does is driven
                by one goal - to give busy families the peace of mind that comes
                with living in an impeccably cleaned home, allowing them to
                spend precious free time making memories instead of chores. As
                Geelong&apos;s Premier maid service,
                {siteConfig.name} continues to be powered by the family values
                and local pride that took their small dream and made it a big
                reality.
            </div>
        </Shell>
    );
}
