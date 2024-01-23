import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import { Shell } from '@/components/shell';
import { Metadata } from 'next';
import React from 'react';

export const runtime = 'edge';

export const metadata: Metadata = {
    title: '',
    description: '',
};

export default function Page() {
    return (
        <Shell>
            <PageHeader>
                <PageHeaderHeading>End Of Lease Pricing</PageHeaderHeading>
                <PageHeaderDescription>
                    Our pricing and features adapt to match the scale and
                    complexity of your business
                </PageHeaderDescription>
            </PageHeader>
        </Shell>
    );
}
