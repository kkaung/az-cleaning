'use client';

import * as React from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import posthog from 'posthog-js';

import { PostHogProvider } from 'posthog-js/react';
import dynamic from 'next/dynamic';

const ProgressBar = dynamic(() => import('@/components/progress-bar'), {
    ssr: false,
});

export function Providers({ children, ...props }: React.PropsWithChildren) {
    return (
        <>
            <ProgressBar />
            <PostHogProvider client={posthog}>
                <TooltipProvider>{children}</TooltipProvider>
            </PostHogProvider>
        </>
    );
}
