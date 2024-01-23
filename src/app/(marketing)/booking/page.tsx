import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import React from 'react';

export const runtime = 'edge';

export default function Page() {
    return (
        <Shell>
            <PageHeader>
                <PageHeaderHeading>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis, illum.
                </PageHeaderHeading>
                <PageHeaderDescription>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consequatur, eum.
                </PageHeaderDescription>
            </PageHeader>
        </Shell>
    );
}
