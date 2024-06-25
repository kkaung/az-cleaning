import React, { type HTMLAttributes } from 'react';
import { headingVariants } from '@/components/page-header';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { items } from '@/configs/service';
import { buttonVariants } from '@/components/ui/button';

import AfterBuilderCleanImage from '/public/assets/images/after-builder-cleaning.png';
import DeepCleanImage from '/public/assets/images/deep-cleaning.png';
import RegularCleanImage from '/public/assets/images/regular-cleaning.png';
import AirbnbCleanImage from '/public/assets/images/airbnb-cleaning.png';
import OvenCleanImage from '/public/assets/images/oven-cleaning.png';
import CarpetCleanImage from '/public/assets/images/carpet-cleaning.png';
import OfficeCleanImage from '/public/assets/images/office-cleaning.png';
import BondCleanImage from '/public/assets/images/bond-cleaning.png';
import WindowCleanImage from '/public/assets/images/window-cleaning.png';

interface ServicesProps extends HTMLAttributes<HTMLElement> {
    location: string;
}

export default function Services({ location, ...props }: ServicesProps) {
    const filteredItems = items.filter(i => i.title !== 'Office Cleaning');

    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className={cn(props.className, 'space-y-12')}
            {...props}
        >
            <h3 className={headingVariants({})}>Other Cleaning Services</h3>
            <div className="mt-6 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredItems.map(i => {
                    const ImageSrc = getImageSrc(i.image);

                    return (
                        <div
                            key={i.title}
                            className="border rounded-xl overflow-hidden group cursor-pointer"
                        >
                            <Link
                                href={i.href}
                                title={`${i.title} ${location}`}
                            >
                                <Image
                                    src={ImageSrc!}
                                    alt={`${i.title} ${location}`}
                                    quality={60}
                                    className="object-cover object-center aspect-video"
                                />
                            </Link>
                            <div className="p-4">
                                <Link
                                    href={i.href}
                                    title={`${i.title} ${location}`}
                                    className="font-semibold group-hover:underline"
                                >
                                    {i.title}
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex items-center justify-center">
                <div>
                    <Link href="/services" className={cn(buttonVariants())}>
                        View All Service
                    </Link>
                </div>
            </div>
        </section>
    );
}

function getImageSrc(image: string) {
    switch (image) {
        case 'RegularCleanImage':
            return RegularCleanImage;
        case 'DeepCleanImage':
            return DeepCleanImage;
        case 'BondCleanImage':
            return BondCleanImage;
        case 'OfficeCleanImage':
            return OfficeCleanImage;
        case 'OvenCleanImage':
            return OvenCleanImage;
        case 'CarpetCleanImage':
            return CarpetCleanImage;
        case 'WindowCleanImage':
            return WindowCleanImage;
        case 'AfterBuilderCleanImage':
            return AfterBuilderCleanImage;
        case 'AirbnbCleanImage':
            return AirbnbCleanImage;
    }
}
