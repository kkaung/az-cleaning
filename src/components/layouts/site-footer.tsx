import Link from 'next/link';
import { siteConfig } from '@/configs/site';
import { Shell } from '@/components/shell';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'react';
import { links } from '@/configs/links';
import { checkUserAgentForGooglebot } from '@/lib/next';

interface SiteFooterProps extends HTMLAttributes<HTMLElement> {}

export default async function SiteFooter({ ...props }: SiteFooterProps) {
    const isGooglebot = checkUserAgentForGooglebot();

    return (
        <footer className={`${props.className} border-t`}>
            <Shell as="div">
                <div
                    id="footer-content"
                    aria-labelledby="footer-content-heading"
                    className="flex flex-col gap-6 lg:flex-row lg:gap-8"
                >
                    <div
                        id="footer-branding"
                        aria-labelledby="footer-branding-heading"
                        className="w-full lg:max-w-sm"
                    >
                        <div>
                            <Link
                                aria-label="Home"
                                href="/"
                                className="text-lg flex items-center space-x-2 font-bold"
                            >
                                {siteConfig.name}
                            </Link>
                            <Link
                                href="/"
                                className="font-medium text-sm hover:underline"
                            >
                                Cleaner Near Me
                            </Link>
                        </div>
                        <div
                            itemScope
                            itemType="http://schema.org/LocalBusiness"
                            className="flex flex-col mt-6 space-y-2"
                        >
                            <div itemProp="name" className="font-bold text-sm">
                                {siteConfig.name}
                            </div>
                            <div className={cn('cursor-pointer text-sm')}>
                                <Icons.mail
                                    className="w-4 h-4 mr-1 inline"
                                    aria-hidden
                                />
                                <span itemProp="email">
                                    {siteConfig.business.email}
                                </span>
                            </div>
                            <Link
                                href={siteConfig.business.phone}
                                className={cn('cursor-pointer text-sm')}
                            >
                                <Icons.phone
                                    className="w-4 h-4 mr-1 inline"
                                    aria-hidden
                                />
                                <span itemProp="telephone">
                                    {siteConfig.business.phone}
                                </span>
                            </Link>
                            <div
                                itemProp="address"
                                itemType="http://schema.org/PostalAddress"
                                className={cn('cursor-pointer text-sm')}
                            >
                                <Icons.mapPin
                                    aria-hidden
                                    className="w-4 h-4 mr-1 inline"
                                />
                                <span itemProp="streetAddress">
                                    10/104 Little Malop St
                                </span>
                                ,{' '}
                                <span itemProp="addressLocality">
                                    Geelong VIC
                                </span>{' '}
                                <span itemProp="postalCode">3220</span>{' '}
                                <span itemProp="addressCountry">Australia</span>
                            </div>
                            <div className={cn('cursor-pointer text-sm')}>
                                <Icons.clock
                                    aria-hidden
                                    className="w-4 h-4 mr-1 inline"
                                />
                                {siteConfig.business.openingHour}
                            </div>
                            <Link
                                href="/"
                                className="text-muted-foreground text-sm mt-4 hover:text-primary"
                                itemProp="url"
                            >
                                {siteConfig.domain}
                            </Link>
                        </div>
                    </div>
                    <div
                        id="footer-links"
                        aria-labelledby="footer-links-heading"
                        className="grid flex-1 grid-cols-1 gap-10 xs:grid-cols-2 sm:grid-cols-3"
                    >
                        {siteConfig.footerNav.map(item => (
                            <div key={item.title} className="space-y-3">
                                <p className="text-base font-medium">
                                    {item.title}
                                </p>
                                <nav className="space-y-2">
                                    {item.items.map(link => (
                                        <Link
                                            key={link.title}
                                            href={link.href}
                                            className="text-sm transition-colors line-clamp-1"
                                            title={link.title}
                                        >
                                            {link.title}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    id="footer-bottom"
                    aria-labelledby="footer-bottom-heading"
                    className="flex flex-col space-x-3 sm:flex-row sm:items-center"
                >
                    <div className="flex-1 text-left text-xs leading-tight text-muted-foreground">
                        © {new Date().getFullYear()} {siteConfig.name}.
                        <span>All rights reserved.</span>
                    </div>
                    <div className="mt-3 flex items-center gap-6">
                        <Link
                            aria-label="Facebook"
                            target="_blank"
                            href={siteConfig.links.facebook}
                            rel="nofollow"
                        >
                            <Icons.facebook aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Twitter"
                            target="_blank"
                            href={siteConfig.links.twitter}
                            rel="nofollow"
                        >
                            <Icons.twitter aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Linkin"
                            target="_blank"
                            href={siteConfig.links.linkin}
                            rel="nofollow"
                        >
                            <Icons.linkin aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Pinterest"
                            target="_blank"
                            href={siteConfig.links.pinterest}
                            rel="nofollow"
                        >
                            <Icons.pinterest aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Instagram"
                            target="_blank"
                            href={siteConfig.links.instagram}
                            rel="nofollow"
                        >
                            <Icons.instagram aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Youtube"
                            target="_blank"
                            href={siteConfig.links.youtube}
                            rel="nofollow"
                        >
                            <Icons.youtube aria-hidden className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </Shell>
        </footer>
    );
}
