'use client';

import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { type HTMLAttributes } from 'react';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/page-header';
import Image from 'next/image';
import AvatarOne from '/public/avatars/avatar-01.png';
import AvatarTwo from '/public/avatars/avatar-02.png';
import AvatarThree from '/public/avatars/avatar-03.png';
import AvatarFour from '/public/avatars/avatar-04.jpg';
import AvatarFive from '/public/avatars/avatar-05.jpg';
import AvatarSix from '/public/avatars/avatar-06.jpeg';

interface HeroProps extends HTMLAttributes<HTMLElement> {
    location: string;
}

export default function Hero({ location, ...props }: HeroProps) {
    const avatars = [
        { name: '', image: AvatarOne },
        { name: '', image: AvatarTwo },
        { name: '', image: AvatarThree },
        { name: '', image: AvatarFour },
        { name: '', image: AvatarFive },
        { name: '', image: AvatarSix },
    ];

    return (
        <section
            id="hero"
            aria-labelledby="hero-headings"
            className={cn(props.className, 'py-12 text-center')}
        >
            <PageHeader className="mx-auto text-center space-y-6">
                <PageHeaderHeading>
                    Top-rated Carpet Cleaning Service In {location}
                </PageHeaderHeading>
                <PageHeaderDescription className="mx-auto">
                    Say goodbye to grease and grime with our thorough deep
                    cleaning service.
                </PageHeaderDescription>
            </PageHeader>
            <ul className="mx-auto gird text-center space-y-2 mt-6 font-semibold">
                <li>
                    <Icons.check
                        className="text-green-500 mr-1 inline w-5 h-5"
                        aria-hidden="true"
                    />
                    Trusted Cleaning Service
                </li>
                <li>
                    <Icons.check
                        className="text-green-500 mr-1 inline w-5 h-5"
                        aria-hidden="true"
                    />
                    200% Guarantee
                </li>
                <li>
                    <Icons.check
                        className="text-green-500 mr-1 inline w-5 h-5"
                        aria-hidden="true"
                    />
                    5-Star Rated Service
                </li>
            </ul>
            <Link
                href="/booking"
                className={cn(
                    'w-52',
                    'font-semibold mt-12',
                    buttonVariants({ size: 'lg' })
                )}
            >
                <Icons.sparkles className="w-4 h-4 mr-2" /> Book Now
            </Link>
            <div className="flex flex-col items-center justify-center  gap-4 mt-12 sm:flex-row">
                <div className="flex items-center -space-x-2">
                    {avatars.map(avatar => (
                        <Image
                            key={avatar.name}
                            src={avatar.image}
                            width={40}
                            height={40}
                            alt={`${avatar.name} avatar`}
                            className="rounded-full object-cover object-center bg-cover border-2 border-white"
                        />
                    ))}
                </div>
                <div>
                    <div className="flex items-center justify-center sm:justify-start">
                        {Array.from({ length: 5 }, (_, idx) => (
                            <Icons.starFull
                                key={idx}
                                className="w-5 h-5 text-yellow-400"
                            />
                        ))}
                    </div>
                    <p className="text-sm font-semibold">
                        Trusted by 1000+ families in Geelong
                    </p>
                </div>
            </div>
        </section>
    );
}
