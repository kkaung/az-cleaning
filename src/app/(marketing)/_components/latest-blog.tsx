'use client';

import { headingVariants } from '@/components/page-header';
import { cn, formatDate } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';
import React, { type HTMLAttributes } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface LatestBlogProps extends HTMLAttributes<HTMLElement> {}

export default function LatestBlog({ ...props }: LatestBlogProps) {
    return (
        <section
            id="latest-blog"
            aria-labelledby="latest-blog-heading"
            className={cn(props.className, 'py-12 space-y-12 w-full')}
            {...props}
        >
            <h2 className={cn(headingVariants({}), 'md:text-center')}>
                Suggested Reads About Cleaning
            </h2>
            <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                    {allPosts.map((post, idx) => (
                        <CarouselItem
                            key={idx}
                            className="pl-1 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                        >
                            <div className="relative space-y-2">
                                <AspectRatio
                                    ratio={16 / 9}
                                    className="overflow-hidden rounded-xl relative mb-2"
                                >
                                    <Image
                                        fill
                                        src={post.image}
                                        alt={`${post.title}`}
                                        className="h-fit w-fit object-cover"
                                    />
                                    <Link
                                        href={`/blog/${post.slugAsParams}`}
                                        className="absolute inset-0"
                                    >
                                        <span className="sr-only">
                                            View Blog Post
                                        </span>
                                    </Link>
                                </AspectRatio>
                                <Link href={`/blog/${post.slugAsParams}`}>
                                    <h4 className="font-semibold text-lg leading-tight hover:underline">
                                        {post.title}
                                    </h4>
                                </Link>
                                <p className="text-muted-foreground text-sm">
                                    {formatDate(post.date)}
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
}
