'use client';

import { Icons } from '@/components/icons';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';
import Balancer from 'react-wrap-balancer';
import Image from 'next/image';
import HeroOneImage from '/public/assets/images/hero-one.jpeg';
import HeroTwoImage from '/public/assets/images/hero-two.jpeg';
import HeroThreeImage from '/public/assets/images/hero-three.jpeg';
import Autoplay from 'embla-carousel-autoplay';
import { siteConfig } from '@/configs/site';
import Dot from '@/components/dot';

interface HeroProps extends HTMLAttributes<HTMLElement> {
    location: string;
}

export default function Hero({ location, ...props }: HeroProps) {
    return (
        <section
            id="hero"
            aria-labelledby="hero-headings"
            className={cn(
                props.className,
                'grid grid-cols-1 gap-6 items-center md:grid-cols-2 md:gap-8'
            )}
        >
            <div className="order-2 md:order-1">
                <Card className="max-w-lg shadow-none border-none md:shadow-lg md:rounded-xl">
                    <CardHeader className="py-6 pt-0 px-0 md:p-6 md:pb-0 md:pt-6">
                        <h1 className="font-extrabold text-4xl leading-none">
                            <Balancer>
                                {location}&apos;s Favourite <br /> Move Out
                                Cleaning Service
                            </Balancer>
                        </h1>
                    </CardHeader>
                    <CardContent className="space-y-8 p-0 md:p-6">
                        <p className="text-muted-foreground text-base">
                            Lowest Price Guarantee Move Out Cleaning Service —
                            trusted by thousands of customers across Sydney.
                            Secure the return of your security bond with our
                            thorough move out cleaning service.
                        </p>
                        <div className="space-y-3 leading-tight">
                            <div className="flex items-center">
                                <Icons.check
                                    className="w-4 h-4 mr-2"
                                    aria-hidden
                                    strokeWidth={3}
                                />
                                <p>Vetted & Trusted Cleaners</p>
                            </div>
                            <div className="flex items-center">
                                <Icons.check
                                    className="w-4 h-4 mr-2"
                                    aria-hidden
                                    strokeWidth={3}
                                />
                                <p>100% Bond Back Guarantee</p>
                            </div>
                            <div className="flex items-center">
                                <Icons.check
                                    className="w-4 h-4 mr-2"
                                    aria-hidden
                                    strokeWidth={3}
                                />
                                <p>Trusted by 1000+ monthly movers in Sydney</p>
                            </div>
                        </div>
                        <div className="flex gap-1 items-center text-sm">
                            <Icons.starFull className="w-4 h-4 text-pink-500" />
                            <span className="font-semibold">
                                {siteConfig.rating.ratingValue}
                            </span>
                            <Dot />
                            <span className="text-muted-foreground underline">
                                {siteConfig.rating.ratingCount} reviews
                            </span>
                        </div>
                        <div className="flex flex-col text-center">
                            <Link
                                href="/booking"
                                className={cn(
                                    buttonVariants({ size: 'lg' }),
                                    'font-semibold'
                                )}
                            >
                                Get An Instant Quote
                            </Link>
                            <div className="text-sm mt-2 itali px-4">
                                It takes only 60 seconds
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="order-1 md:order-2">
                <Carousel
                    className="w-full"
                    plugins={[
                        Autoplay({
                            delay: 5000,
                        }),
                    ]}
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        <CarouselItem>
                            <div className="p-1">
                                <div className="overflow-hidden rounded-xl">
                                    <AspectRatio
                                        ratio={16 / 9}
                                        className="bg-secondary"
                                    >
                                        <Image
                                            fill
                                            src={HeroOneImage}
                                            alt="End Of Lease Cleaner"
                                            className="object-top object-cover bg-no-repeat"
                                        />
                                    </AspectRatio>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <div className="overflow-hidden rounded-xl">
                                    <AspectRatio
                                        ratio={16 / 9}
                                        className="bg-secondary"
                                    >
                                        <Image
                                            fill
                                            src={HeroTwoImage}
                                            alt="Moving Out Cleaner"
                                            className="object-top object-cover bg-no-repeat"
                                        />
                                    </AspectRatio>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <div className="overflow-hidden rounded-xl">
                                    <AspectRatio
                                        ratio={16 / 9}
                                        className="bg-secondary"
                                    >
                                        <Image
                                            fill
                                            src={HeroThreeImage}
                                            alt="Vacate Cleaner"
                                            className="object-top object-cover bg-no-repeat"
                                        />
                                    </AspectRatio>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
