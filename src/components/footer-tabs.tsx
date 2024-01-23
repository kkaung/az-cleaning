'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { cn } from '@/lib/utils';

export default function FooterTabs() {
    const [tab, setTab] = useState(0);

    const tabs = [
        {
            title: '',
            href: `/dashboard/stores`,
        },
        {
            title: '',
            href: `/dashboard/stores`,
        },
    ];

    return (
        <div>
            <Tabs
                defaultValue={''}
                className="sticky top-0 z-30 h-full w-full overflow-auto px-1"
            >
                <ScrollArea className="pb-2.5" scrollBarClassName="h-2">
                    <TabsList className="inline-flex items-center justify-center space-x-1.5 text-muted-foreground">
                        {tabs.map(tab => (
                            <div
                                role="none"
                                key={tab.href}
                                className={cn(
                                    'border-b-2 border-transparent py-1.5'
                                    // tab.isActive && 'border-foreground'
                                )}
                            >
                                <TabsTrigger
                                    value={tab.href}
                                    className={cn(
                                        'inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium text-muted-foreground ring-offset-background transition-all hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1'
                                        // tab.isActive && 'text-foreground'
                                    )}
                                    asChild
                                >
                                    <>{tab.title}</>
                                </TabsTrigger>
                            </div>
                        ))}
                    </TabsList>
                    <Separator />
                </ScrollArea>
            </Tabs>
        </div>
    );
}
