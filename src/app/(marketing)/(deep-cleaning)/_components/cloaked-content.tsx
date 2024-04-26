import React from 'react';
import { Mdx } from '@/components/mdx/mdx-components';
import { Shell } from '@/components/shell';
import { allServices } from 'contentlayer/generated';
import { Breadcrumbs } from '@/components/pagers/breadcrumbs';

export default function CloakedContent() {
    const page = allServices.find(v => v.slugAsParams === 'deep-cleaning')!;

    return (
        <Shell as="article" variant="markdown">
            <Breadcrumbs
                segments={[
                    { title: 'Home', href: '/' },
                    {
                        title: 'Deep Cleaning Canberra',
                        href: '/deep-cleaning-canberra',
                    },
                ]}
            />
            <Mdx code={page.body.code} />
        </Shell>
    );
}
