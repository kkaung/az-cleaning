import Link from 'next/link';
import React from 'react';
import MobileNav from '@/components/layouts/mobile-nav';
import MainNav from '@/components/layouts/main-nav';
import { siteConfig } from '@/configs/site';
import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';

interface SiteHeaderProps extends HTMLAttributes<HTMLElement> {}

const SiteHeader = ({ ...props }: SiteHeaderProps) => {
    return (
        <header
            className={cn(
                'w-full border-b sticky top-0 z-50 bg-background/90 backdrop-blur-lg backdrop-saturate-200',
                props.className
            )}
            {...props}
        >
            <div className="flex container max-w-7xl w-full h-16 items-center justify-between sm:h-14">
                <div className="flex items-center gap-4 flex-1 sm:gap-8 sm:mr-6 md:flex-grow-0">
                    <MobileNav
                        mainNavItems={siteConfig.mainNav}
                        sidebarNavItems={siteConfig.mainNav}
                    />
                    <Link aria-label="Home" href="/">
                        <span className="font-extrabold text-2xl italic text-primary">
                            {siteConfig.logo}
                        </span>
                    </Link>
                </div>
                <nav className="flex lg:flex-1 gap-4 items-center justify-between">
                    <MainNav items={siteConfig.mainNav} />
                    <div className="gap-3 flex items-center sm:gap-4 md:gap-6">
                        <Button variant="secondary">
                            <Icons.phone
                                aria-hidden
                                className="w-4 h-4 stroke-3 sm:mr-1"
                            />
                            <span className="hidden sm:inline">
                                {siteConfig.business.phone}
                            </span>
                            <span className="sr-only">Phone Number</span>
                        </Button>
                        <Link
                            className={cn(buttonVariants({}), '')}
                            href="/booking"
                        >
                            Book Online
                        </Link>
                        <Link
                            href="/cart"
                            className={cn(
                                buttonVariants({ variant: 'secondary' })
                            )}
                        >
                            <Icons.shoppingCart className="w-4 h-4" />
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

SiteHeader.displayName = 'SiteHeader';

export { SiteHeader };
