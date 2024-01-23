'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useSelectedLayoutSegment } from 'next/navigation';
import type { MainNavItem } from '@/types';

interface MainNavProps {
    items?: MainNavItem[];
}

export default function MainNav({ items }: MainNavProps) {
    const segment = useSelectedLayoutSegment();

    return (
        <div className="hidden gap-6 z-30 lg:flex">
            <NavigationMenu>
                <NavigationMenuList>
                    {items?.map(item =>
                        item?.items ? (
                            <NavigationMenuItem key={item.title}>
                                <NavigationMenuTrigger
                                    className={cn(
                                        'h-auto bg-transparent font-normal text-base capitalize hover:bg-transparent hover:text-primary data-[active]:bg-transparent data-[state=open]:bg-transparent focus:bg-transparent'
                                        // item?.href?.startsWith(`/${segment}`)
                                        //     ? 'text-primary'
                                        //     : 'text-foreground/60'
                                    )}
                                >
                                    {item.title}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="w-[360px] h-full grid grid-cols-2 gap-3  p-4 z-50">
                                        {item.items.map(item => (
                                            <ListItem
                                                key={item.title}
                                                title={item.title}
                                                href={item.href}
                                            >
                                                {item.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ) : (
                            item.href && (
                                <NavigationMenuItem key={item.title}>
                                    <Link
                                        href={item.href}
                                        legacyBehavior
                                        passHref
                                    >
                                        <NavigationMenuLink
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                'h-auto font-normal text-base bg-transparent text-muted-foreground hover:bg-transparent hover:text-primary'
                                                // item.href.startsWith(
                                                //     `/${segment}`
                                                // )
                                                //     ? 'text-foreground'
                                                //     : 'text-foreground/60'
                                            )}
                                        >
                                            {item.title}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            )
                        )
                    )}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, href, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    href={String(href)}
                    className={cn(
                        'block select-none space-y-1 text-sm rounded-md leading-none no-underline outline-none transition-colors focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="leading-none text-foreground font-normal hover:underline">
                        {title}
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
