'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { MainNavItem, SidebarNavItem } from '@/types';
import { siteConfig } from '@/configs/site';
import { cn } from '@/lib/utils';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Icons } from '@/components/icons';

interface MobileNavProps {
    mainNavItems?: MainNavItem[];
    sidebarNavItems: SidebarNavItem[];
}

export default function MobileNav({ mainNavItems }: MobileNavProps) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center gap-4 lg:hidden">
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    >
                        <Icons.menu className="h-8 w-8" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
            </div>
            <SheetContent side="left" className="pl-1 pr-0">
                <div className="px-7">
                    <Link
                        aria-label="Home"
                        href="/"
                        className="flex items-center"
                        onClick={() => setIsOpen(false)}
                    >
                        <span className="font-bold text-2xl italic text-primary">
                            {siteConfig.logo}
                        </span>
                        <span className="sr-only">Home</span>
                    </Link>
                </div>
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6 space-y-4">
                    {mainNavItems?.map((item, idx) =>
                        item.href ? (
                            <div key={idx} className="pl-1 pr-7 py-2">
                                <MobileLink
                                    href={item.href}
                                    pathname={pathname!}
                                    setIsOpen={setIsOpen}
                                    disabled={item.disabled}
                                >
                                    {item.title}
                                </MobileLink>
                            </div>
                        ) : (
                            <div key={idx} className="pl-1 pr-7">
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full"
                                >
                                    <AccordionItem
                                        value={item.title}
                                        className="border-b-0"
                                    >
                                        <AccordionTrigger className="text-foreground/70 text-base py-2 data-[state=open]:text-foreground">
                                            {item.title}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col space-y-2">
                                                {item.items?.map(
                                                    (subItem, index) =>
                                                        subItem.href ? (
                                                            <MobileLink
                                                                key={index}
                                                                href={String(
                                                                    subItem.href
                                                                )}
                                                                pathname={
                                                                    pathname!
                                                                }
                                                                setIsOpen={
                                                                    setIsOpen
                                                                }
                                                                disabled={
                                                                    subItem.disabled
                                                                }
                                                            >
                                                                {subItem.title}
                                                            </MobileLink>
                                                        ) : (
                                                            <div
                                                                key={index}
                                                                className="text-foreground/70 transition-colors"
                                                            >
                                                                {item.title}
                                                            </div>
                                                        )
                                                )}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        )
                    )}
                    <div className="pl-1 pr-7 py-2">
                        <MobileLink
                            href=""
                            pathname={pathname}
                            setIsOpen={setIsOpen}
                        >
                            Login
                        </MobileLink>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
}

interface MobileLinkProps {
    children?: React.ReactNode;
    href: string;
    disabled?: boolean;
    pathname: string;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileLink({
    children,
    href,
    disabled,
    pathname,
    setIsOpen,
}: MobileLinkProps) {
    return (
        <Link
            href={href}
            className={cn(
                'text-foreground/70 transition-colors hover:text-foreground',
                pathname === href && 'text-foreground',
                disabled && 'pointer-events-none opacity-60'
            )}
            onClick={() => setIsOpen(false)}
        >
            {children}
        </Link>
    );
}
