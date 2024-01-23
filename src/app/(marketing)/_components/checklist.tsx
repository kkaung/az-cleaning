import { Icons } from '@/components/icons';
import { headingVariants } from '@/components/page-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';

interface ChecklistProps extends HTMLAttributes<HTMLElement> {}

export default function Checklist({ ...props }: ChecklistProps) {
    return (
        <section
            id="checklists"
            aria-labelledby="checklists-heading"
            className={cn(props.className, 'p-12 space-y-12 bg-secondary')}
            {...props}
        >
            <div className="space-y-1">
                <p className="text-pink-500 uppercase font-medium">
                    What&apos;s Included
                </p>
                <h2 className={headingVariants({})}>Bond Cleaning Checklist</h2>
            </div>
            <Tabs
                defaultValue="account"
                orientation="horizontal"
                className="flex gap-12"
            >
                <TabsList className="bg-transparent flex flex-col text-left basis-1/3">
                    <TabsTrigger value="account" className="w-full">
                        <div>
                            01.
                            <span className="text-lg font-semibold ml-3">
                                Entry / Hallway
                            </span>
                        </div>
                        <Icons.arrowRight className="w-4 h-4" />
                    </TabsTrigger>
                    <TabsTrigger value="password">
                        <div>
                            02.
                            <span className="text-lg font-semibold ml-3">
                                Laundry
                            </span>
                        </div>
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <ul>
                        <li className="flex items-center">
                            <Icons.check
                                className="w-4 h-4 mr-2"
                                strokeWidth={3}
                                aria-hidden
                            />
                            <p>Wipe down skirting boards</p>
                        </li>
                    </ul>
                </TabsContent>
                <TabsContent value="password">
                    Change your password here.
                </TabsContent>
            </Tabs>
        </section>
    );
}
