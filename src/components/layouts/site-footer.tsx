import Link from 'next/link';
import { siteConfig } from '@/configs/site';
import { Shell } from '@/components/shell';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'react';
import Image from 'next/image';
import Logo from '/public/logo.png';

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
                        <div className="inline-flex items-center gap-2 text-lg font-bold leading-none">
                            <Image
                                width={32}
                                height={32}
                                src={Logo}
                                alt={`${siteConfig.name} Logo`}
                                className="h-8 w-8 rounded-full object-cover"
                            />
                            <div>
                                <Link
                                    href="/"
                                    className="text-lg flex items-center space-x-2 font-bold"
                                    title={siteConfig.name}
                                >
                                    {siteConfig.name}
                                </Link>
                                <Link
                                    href="/"
                                    className="text-xs flex items-center space-x-2 font-semibold"
                                >
                                    Cleaning Services Geelong
                                </Link>
                            </div>
                        </div>
                        <div className="mt-12 space-y-3">
                            <div>
                                <Link
                                    href="/imprint"
                                    className="text-base font-medium"
                                >
                                    Imprint
                                </Link>
                            </div>
                            <div
                                itemScope
                                itemType="http://schema.org/LocalBusiness"
                                className="flex flex-col space-y-2"
                            >
                                <div
                                    itemProp="name"
                                    className="font-bold text-sm"
                                >
                                    {siteConfig.name}
                                </div>
                                <Link
                                    href={`mailto:${siteConfig.business.email}`}
                                    className={cn('cursor-pointer text-sm')}
                                >
                                    <Icons.mail
                                        className="w-4 h-4 mr-1 inline"
                                        aria-hidden
                                    />
                                    <span itemProp="email">
                                        {siteConfig.business.email}
                                    </span>
                                </Link>
                                <Link
                                    href={`tel:${siteConfig.business.phone}`}
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
                                    itemScope
                                    itemType="http://schema.org/PostalAddress"
                                    className={cn('cursor-pointer text-sm')}
                                >
                                    <Icons.mapPin
                                        aria-hidden
                                        className="w-4 h-4 mr-1 inline"
                                    />
                                    <span itemProp="streetAddress">
                                        {
                                            siteConfig.business.detailsAddress
                                                .streetAddress
                                        }
                                    </span>
                                    ,{' '}
                                    <span itemProp="addressLocality">
                                        {
                                            siteConfig.business.detailsAddress
                                                .addressLocality
                                        }
                                    </span>{' '}
                                    <span itemProp="addressRegion">
                                        {
                                            siteConfig.business.detailsAddress
                                                .addressRegion
                                        }
                                    </span>{' '}
                                    <span itemProp="postalCode">
                                        {
                                            siteConfig.business.detailsAddress
                                                .postalCode
                                        }
                                    </span>{' '}
                                    <span itemProp="addressCountry">
                                        {
                                            siteConfig.business.detailsAddress
                                                .addressCountry
                                        }
                                    </span>
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
                    </div>
                    <section
                        id="footer-links"
                        aria-labelledby="footer-links-heading"
                        className="grid flex-1 grid-cols-1 gap-10 xs:grid-cols-2 sm:grid-cols-3"
                    >
                        {siteConfig.footerNav.map(item => (
                            <div key={item.title} className="space-y-3">
                                <div className="text-base font-medium">
                                    {item.title}
                                </div>
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
                    </section>
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
                    <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
                        <Link
                            aria-label="Facebook"
                            target="_blank"
                            href={siteConfig.links.facebook}
                            rel="nofollow"
                            title="Facebook"
                        >
                            <Icons.facebook aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Instagram"
                            target="_blank"
                            href={siteConfig.links.instagram}
                            rel="nofollow"
                            title="Instagram"
                        >
                            <Icons.instagram aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Twitter"
                            target="_blank"
                            href={siteConfig.links.twitter}
                            rel="nofollow"
                            title="Twitter"
                        >
                            <Icons.twitter aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Youtube"
                            target="_blank"
                            href={siteConfig.links.youtube}
                            rel="nofollow"
                            title="Youtube"
                        >
                            <Icons.youtube aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Linkin"
                            target="_blank"
                            href={siteConfig.links.linkedin}
                            rel="nofollow"
                            title="Linkin"
                        >
                            <Icons.linkin aria-hidden className="h-4 w-4" />
                        </Link>
                        <Link
                            aria-label="Pinterest"
                            target="_blank"
                            href={siteConfig.links.pinterest}
                            rel="nofollow"
                            title="Pinterest"
                        >
                            <Icons.pinterest aria-hidden className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </Shell>
        </footer>
    );
}
