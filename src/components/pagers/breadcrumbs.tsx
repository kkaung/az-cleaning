import * as React from 'react';
import Link from 'next/link';
import { SlashIcon } from '@radix-ui/react-icons';
import { absoluteUrl, cn, truncate } from '@/lib/utils';
import Dot from '@/components/dot';
import { BreadcrumbJsonLd } from 'next-seo';

interface BreadcrumbsProps {
    segments: {
        title: string;
        href: string;
    }[];
    separator?: React.ComponentType<{ className?: string }>;
    truncationLength?: number;
    dottable?: boolean;
}

export function Breadcrumbs({
    segments,
    separator,
    truncationLength = 0,
    dottable = true,
    ...props
}: BreadcrumbsProps) {
    const SeparatorIcon = separator ?? SlashIcon;

    return (
        <>
            <nav
                aria-label="breadcrumbs"
                className="flex items-center text-sm font-medium text-muted-foreground flex-wrap"
            >
                {segments.map((segment, index) => {
                    const isLastSegment = index === segments.length - 1;

                    if (isLastSegment)
                        return (
                            <div
                                key={segment.href}
                                className="text-foreground font-medium"
                            >
                                {truncationLength > 0 && segment.title
                                    ? truncate(segment.title, truncationLength)
                                    : segment.title}
                            </div>
                        );

                    return (
                        <React.Fragment key={segment.href}>
                            <Link
                                aria-current={
                                    isLastSegment ? 'page' : undefined
                                }
                                href={segment.href}
                                className={cn(
                                    'truncate transition-colors hover:text-foreground',
                                    isLastSegment
                                        ? 'text-foreground'
                                        : 'text-muted-foreground'
                                )}
                            >
                                {truncationLength > 0 && segment.title
                                    ? truncate(segment.title, truncationLength)
                                    : segment.title}
                            </Link>
                            {!isLastSegment && (
                                <>
                                    {dottable ? (
                                        <Dot className="mx-2" aria-hidden />
                                    ) : (
                                        <SeparatorIcon
                                            className="w-3 h-3 mx-2"
                                            strokeWidth={3}
                                            aria-hidden
                                        />
                                    )}
                                </>
                            )}
                        </React.Fragment>
                    );
                })}
            </nav>
            <BreadcrumbJsonLd
                useAppDir
                itemListElements={segments.map((segment, idx) => {
                    return {
                        position: idx + 1,
                        name: segment.title,
                        item: absoluteUrl(segment.href),
                    };
                })}
            />
        </>
    );
}
