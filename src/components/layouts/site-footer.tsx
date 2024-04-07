import Link from 'next/link';
import { siteConfig } from '@/configs/site';
import { Shell } from '@/components/shell';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'react';

interface SiteFooterProps extends HTMLAttributes<HTMLElement> {}

export default async function SiteFooter({ ...props }: SiteFooterProps) {
    return (
        <footer className="border-t">
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
                                className="text-2xl italic flex items-center space-x-2 font-bold"
                            >
                                {siteConfig.name}
                            </Link>
                            <Link
                                href="/"
                                className="font-medium italic hover:underline"
                            >
                                Cleaner Near Me
                            </Link>
                        </div>
                        <div className="flex flex-col mt-2 space-y-2">
                            <div className={cn('cursor-pointer text-sm')}>
                                <Icons.mail
                                    className="w-4 h-4 mr-1 inline"
                                    aria-hidden
                                />
                                <span className="sr-only">Email</span>
                                {siteConfig.business.email}
                            </div>
                            <div className={cn('cursor-pointer text-sm')}>
                                <Icons.phone
                                    className="w-4 h-4 mr-1 inline"
                                    aria-hidden
                                />
                                <span className="sr-only">Phone Number</span>
                                {siteConfig.business.phone}
                            </div>
                            <div className={cn('cursor-pointer text-sm')}>
                                <Icons.mapPin
                                    aria-hidden
                                    className="w-4 h-4 mr-1 inline"
                                />
                                <span className="sr-only">Office Address</span>
                                {siteConfig.business.address}
                            </div>
                            <div className={cn('cursor-pointer text-sm')}>
                                <Icons.clock
                                    aria-hidden
                                    className="w-4 h-4 mr-1 inline"
                                />
                                <span className="sr-only">
                                    Business Opening Hour
                                </span>
                                {siteConfig.business.openingHour}
                            </div>
                            <div className="text-muted-foreground">
                                <Link href="/">{siteConfig.domain}</Link>
                            </div>
                        </div>
                    </div>
                    <div
                        id="footer-links"
                        aria-labelledby="footer-links-heading"
                        className="grid flex-1 grid-cols-1 gap-10 xs:grid-cols-2 sm:grid-cols-3"
                    >
                        {siteConfig.footerNav.map(item => (
                            <div key={item.title} className="space-y-3">
                                <h4 className="text-base font-medium">
                                    {item.title}
                                </h4>
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
                    </div>
                </div>
            </Shell>
        </footer>
    );
}
